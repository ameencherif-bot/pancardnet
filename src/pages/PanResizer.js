import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { jsPDF } from 'jspdf';
import '../styles/PanResizer.css';

function PanResizer() {
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const [profile, setProfile] = useState('UTI'); // 'UTI' or 'NSDL'
  const [uploadedSrc, setUploadedSrc] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedRequirement, setSelectedRequirement] = useState(null);
  const [mode] = useState('selected');
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [isDragging, setIsDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [loaderVisible, setLoaderVisible] = useState(false);
  const [finalPreview, setFinalPreview] = useState({ visible: false, src: '', sizeText: '' });

  // Profile-based requirements (pixels)
  const profiles = {
    UTI: {
      photograph: { width: 213, height: 213 },
      signature: { width: 450, height: 150 },
      document: { width: 213, height: 213 }
    },
    NSDL: {
      // Slightly different sizes used by NSDL (example values). Change as needed.
      photograph: { width: 350, height: 350 },
      signature: { width: 450, height: 160 },
      document: { width: 350, height: 350 }
    }
  };

  useEffect(() => {
    // Home embedding: do not override main page title when used embedded
    if (window.location.pathname === '/tools/pan-resizer') {
      document.title = 'PAN Card Resizer — Tools';
    }
  }, []);

  useEffect(() => {
    renderCanvas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadedImage, offset, zoom, rotation, brightness, contrast, mode, selectedRequirement]);

  function handleFile(file) {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = e => {
      setUploadedSrc(e.target.result);
      const img = new Image();
      img.onload = () => setUploadedImage(img);
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  function onDrop(e) {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files && files[0]) handleFile(files[0]);
  }

  function renderCanvas() {
    const canvas = canvasRef.current;
    if (!canvas || !uploadedImage || !selectedRequirement) return;
    const ctx = canvas.getContext('2d');
    const size = profiles[profile][selectedRequirement];
    canvas.width = size.width;
    canvas.height = size.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.filter = `brightness(${brightness}%) contrast(${contrast}%)`;

    if (mode === 'original') {
      const scale = Math.min(canvas.width / uploadedImage.width, canvas.height / uploadedImage.height);
      const w = uploadedImage.width * scale;
      const h = uploadedImage.height * scale;
      ctx.drawImage(uploadedImage, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
    } else {
      ctx.translate(canvas.width / 2 + offset.x, canvas.height / 2 + offset.y);
      ctx.rotate(rotation * Math.PI / 180);
      ctx.scale(zoom, zoom);
      ctx.drawImage(uploadedImage, -uploadedImage.width / 2, -uploadedImage.height / 2);
    }

    ctx.restore();
  }

  function startDrag(e) {
    if (mode === 'original') return;
    setIsDragging(true);
    setStart({ x: e.clientX, y: e.clientY });
  }
  function moveDrag(e) {
    if (!isDragging) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    setOffset(o => ({ x: o.x + dx, y: o.y + dy }));
    setStart({ x: e.clientX, y: e.clientY });
  }
  function stopDrag() { setIsDragging(false); }

  function handleWheel(e) {
    if (mode === 'original') return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const newZoom = Math.max(0.3, Math.min(10, zoom * delta));
    setZoom(newZoom);
  }

  function makeDownload() {
    if (!uploadedImage || !selectedRequirement) return;
    setLoaderVisible(true);
    setTimeout(() => {
      const canvas = canvasRef.current;
      const timestamp = Date.now();
      if (selectedRequirement === 'document') {
        const size = profiles[profile][selectedRequirement];
        const pdf = new jsPDF({ orientation: 'portrait', unit: 'px', format: [size.width, size.height] });
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, size.width, size.height);
        pdf.save(`pancard_document_${profile.toLowerCase()}_${timestamp}.pdf`);
      } else {
        const a = document.createElement('a');
        a.download = `pancard_${profile.toLowerCase()}_${selectedRequirement}_${timestamp}.png`;
        a.href = canvas.toDataURL('image/png');
        a.click();
      }
      setLoaderVisible(false);
    }, 1500);
  }

  function showFinalPreview() {
    if (!uploadedImage || !selectedRequirement) return;
    const size = profiles[profile][selectedRequirement];
    const tcanvas = document.createElement('canvas');
    tcanvas.width = size.width;
    tcanvas.height = size.height;
    const tctx = tcanvas.getContext('2d');
    tctx.clearRect(0, 0, tcanvas.width, tcanvas.height);
    tctx.save();
    tctx.filter = `brightness(${brightness}%) contrast(${contrast}%)`;
    if (mode === 'original') {
      const scale = Math.min(tcanvas.width / uploadedImage.width, tcanvas.height / uploadedImage.height);
      const w = uploadedImage.width * scale;
      const h = uploadedImage.height * scale;
      tctx.drawImage(uploadedImage, (tcanvas.width - w) / 2, (tcanvas.height - h) / 2, w, h);
    } else {
      tctx.translate(tcanvas.width / 2 + offset.x, tcanvas.height / 2 + offset.y);
      tctx.rotate(rotation * Math.PI / 180);
      tctx.scale(zoom, zoom);
      tctx.drawImage(uploadedImage, -uploadedImage.width / 2, -uploadedImage.height / 2);
    }
    tctx.restore();

    setFinalPreview({ visible: true, src: tcanvas.toDataURL('image/png'), sizeText: `${size.width} × ${size.height} pixels` });
  }

  return (
    <div className="pan-resizer-page">
      <div className="tool-container">
        <header className="tool-header">
          <p className="muted ">Select your issuer profile, upload a photo and adjust until perfect.</p>
        </header>

        <div className="profile-select center">
          <button className={`profile-btn ${profile === 'UTI' ? 'active' : ''}`} onClick={() => setProfile('UTI')}>UTI</button>
          <button className={`profile-btn ${profile === 'NSDL' ? 'active' : ''}`} onClick={() => setProfile('NSDL')}>NSDL</button>
        </div>

        <div className="upload-row single">
          <div className={`upload-box ${uploadedSrc ? 'has-image' : ''}`} onDrop={onDrop} onDragOver={e => e.preventDefault()} onClick={() => { if (!uploadedSrc) fileInputRef.current.click(); }}>

            {/* Stage 1: No file yet */}
            {!uploadedSrc && (
              <div className="upload-prompt">
                <h3>Drag & Drop or Click</h3>
                <p className="select-btn mt-3">Select File</p>
                </div>
            )}

            {/* Stage 2: File uploaded, choose type inside same box */}
            {uploadedSrc && !selectedRequirement && (
              <div className="select-stage">
                <h3 className="selected-heading">Choose Type</h3>
                <div className="type-grid">
                  {['photograph','signature','document'].map(type => (
                    <button key={type} className={`type-btn ${selectedRequirement === type ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setSelectedRequirement(type); }}>
                      <strong>{type[0].toUpperCase() + type.slice(1)}</strong>
                      <div className="req-sub">{profiles[profile][type].width} × {profiles[profile][type].height}</div>
                    </button>
                  ))}
                  <div className="upload-actions">
                  <Button variant="primary mt-3 mx-5" onClick={(e) => { e.stopPropagation(); setUploadedSrc(null); setUploadedImage(null); fileInputRef.current.value = ''; }}>Reset</Button>
                </div>
                </div>
              </div>
            )}

            {/* Stage 3: Selected type -> show editor and download inside same box */}
            {uploadedSrc && selectedRequirement && (
              <div className="edit-stage" onClick={e => e.stopPropagation()}>
                <h3 className="selected-heading">Selected: {selectedRequirement[0].toUpperCase()+selectedRequirement.slice(1)} — {profiles[profile][selectedRequirement].width} × {profiles[profile][selectedRequirement].height}</h3>

                <div className="canvas-wrap small" onMouseDown={startDrag} onMouseMove={moveDrag} onMouseUp={stopDrag} onMouseLeave={stopDrag} onWheel={handleWheel}>
                  <canvas ref={canvasRef} className="canvas-surface" />
                </div>

                <div className="inline-controls">
                  <div className="control small">
                    <label>Rotate <span className="value">{rotation}°</span></label>
                    <input type="range" min="-180" max="180" value={rotation} onChange={e => setRotation(Number(e.target.value))} />
                  </div>
                  <div className="control small">
                    <label>Brightness <span className="value">{brightness}%</span></label>
                    <input type="range" min="0" max="200" value={brightness} onChange={e => setBrightness(Number(e.target.value))} />
                  </div>
                  <div className="control small">
                    <label>Contrast <span className="value">{contrast}%</span></label>
                    <input type="range" min="0" max="200" value={contrast} onChange={e => setContrast(Number(e.target.value))} />
                  </div>
                  <div className="control small">
                    <label>Zoom <span className="value">{Math.round(zoom * 100)}%</span></label>
                    <input type="range" min="30" max="1000" value={Math.round(zoom * 100)} onChange={e => setZoom(Number(e.target.value) / 100)} />
                  </div>
                </div>

                <div className="box-actions">
                  <Button variant="secondary" onClick={() => setSelectedRequirement(null)}>Change Type</Button>
                  <Button variant="success" onClick={makeDownload}>Download</Button>
                  <Button variant="outline-primary" onClick={showFinalPreview}>Preview</Button>
                </div>

              </div>
            )}

          

            <input ref={fileInputRef} type="file" accept="image/*" style={{display:'none'}} onChange={(e) => handleFile(e.target.files[0])} />
          </div>
        </div>

        {/* Loader */}
        {loaderVisible && (
          <div className="loader-overlay">
            <div className="loader-card">
              <div className="spinner" />
              <div className="loader-text">Preparing your file…</div>
            </div>
          </div>
        )}

        {/* Final Preview Modal */}
        {finalPreview.visible && (
          <div className="modal-overlay" onClick={() => setFinalPreview(p => ({...p, visible:false}))}>
            <div className="modal-card" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setFinalPreview(p => ({...p, visible:false}))}>×</button>
              <h3>Final Preview</h3>
              <div className="preview-box">
                <img src={finalPreview.src} alt="final" />
              </div>
              <div className="preview-meta">Size: <strong>{finalPreview.sizeText}</strong></div>
              <div className="modal-actions">
                <Button variant="success" onClick={() => { const a=document.createElement('a'); a.href=finalPreview.src; a.download=`pancard_preview_${Date.now()}.png`; a.click(); }}>Download Preview</Button>
                <Button variant="secondary" onClick={() => setFinalPreview(p => ({...p, visible:false}))}>Close</Button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default PanResizer;
