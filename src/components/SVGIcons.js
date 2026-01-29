import React from 'react';

export const DocumentSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80" height="80">
    <rect x="10" y="10" width="80" height="80" fill="#e8f4f8" stroke="#0066cc" strokeWidth="2" rx="5"/>
    <rect x="15" y="15" width="70" height="15" fill="#0066cc" rx="2"/>
    <line x1="20" y1="40" x2="80" y2="40" stroke="#666" strokeWidth="1.5"/>
    <line x1="20" y1="50" x2="80" y2="50" stroke="#666" strokeWidth="1.5"/>
    <line x1="20" y1="60" x2="75" y2="60" stroke="#666" strokeWidth="1.5"/>
    <line x1="20" y1="70" x2="75" y2="70" stroke="#666" strokeWidth="1.5"/>
    <line x1="20" y1="80" x2="60" y2="80" stroke="#666" strokeWidth="1.5"/>
  </svg>
);

export const ResizeSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80" height="80">
    <rect x="15" y="20" width="35" height="60" fill="none" stroke="#ff6b6b" strokeWidth="2"/>
    <text x="32" y="55" fontSize="12" textAnchor="middle" fill="#ff6b6b" fontWeight="bold">Original</text>
    <path d="M 55 50 L 70 50" stroke="#0066cc" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
    <rect x="75" y="35" width="20" height="30" fill="none" stroke="#4caf50" strokeWidth="2"/>
    <text x="85" y="52" fontSize="10" textAnchor="middle" fill="#4caf50" fontWeight="bold">Resized</text>
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#0066cc"/>
      </marker>
    </defs>
  </svg>
);

export const CheckSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80" height="80">
    <circle cx="50" cy="50" r="45" fill="#e8f5e9" stroke="#4caf50" strokeWidth="2"/>
    <path d="M 35 50 L 45 60 L 65 40" fill="none" stroke="#4caf50" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ToolSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80" height="80">
    <circle cx="50" cy="50" r="3" fill="#0066cc"/>
    <path d="M 50 30 Q 70 30 80 50 Q 70 70 50 70 Q 30 70 20 50 Q 30 30 50 30" fill="#e3f2fd" stroke="#0066cc" strokeWidth="2"/>
    <g transform="translate(45, 45)">
      <circle r="8" fill="#0066cc"/>
      <path d="M -2 -2 L 2 2 M 2 -2 L -2 2" stroke="white" strokeWidth="1"/>
    </g>
  </svg>
);

export const InfoSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80" height="80">
    <circle cx="50" cy="50" r="45" fill="#fff3e0" stroke="#ff9800" strokeWidth="2"/>
    <text x="50" y="70" fontSize="50" textAnchor="middle" fill="#ff9800" fontWeight="bold">i</text>
  </svg>
);
