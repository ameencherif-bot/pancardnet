# PAN Card Central

A concise resource and backlink site for PAN card guides, resizing tips, and practical tools (reference backup for the main PAN Card Resizer website).

## Features

✨ **Modern, Responsive Design** - Built with React and Bootstrap for stunning visuals on all devices
📱 **Multiple Pages** - Home, Resize Tips, Document Guide, and Best Practices
🎨 **SVG Icons** - Custom SVG graphics throughout the site
🔗 **SEO Optimized** - Multiple backlinks to the main website
📚 **Comprehensive Content** - In-depth guides and blog posts
⚡ **Fast Performance** - Optimized for speed and user experience

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pancardresizer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with Bootstrap
│   ├── Footer.js          # Footer with backlinks
│   └── SVGIcons.js        # Custom SVG components
├── pages/
│   ├── Home.js            # Homepage with CTA buttons
│   ├── BlogResizeTips.js  # Blog: Professional resize tips
│   ├── BlogDocumentGuide.js # Blog: Document size guide
│   └── BlogBestPractices.js # Blog: Best practices guide
├── styles/
│   ├── Header.css         # Navigation styling
│   ├── Home.css           # Homepage styles
│   ├── Blog.css           # Blog post styles
│   └── Footer.css         # Footer styling
├── App.js                 # Main app with routing
├── App.css                # Global styles
└── index.js               # Entry point
```

## Technologies Used

- **React** 19.2.3 - UI Framework
- **React Router DOM** - Client-side routing
- **Bootstrap 5** - CSS Framework
- **React Bootstrap** - Bootstrap components for React

## Key Pages

1. **Home Page** - Features hero section, feature cards, and blog previews with multiple CTAs
2. **Resize Tips Blog** - Professional tips and techniques for resizing PAN cards
3. **Document Guide Blog** - Complete specifications and file format information
4. **Best Practices Blog** - Security, storage, and management guidelines

## Backlink Strategy

Every page includes multiple strategic backlinks to [pancardresizer.net](https://pancardresizer.net):
- CTAs in hero sections
- Footer links
- In-article links
- CTA sections at the end of blog posts

## Deployment

This repo now includes Netlify-ready configuration. See `DEPLOYMENT.md` for step-by-step instructions; Netlify is configured to use `npm run build:fast` (smaller bundles by disabling source maps) and `netlify.toml` provides caching headers for static assets.

## Environment Variables

Create a `.env` file in the root directory:
```
REACT_APP_SITE_URL=https://pancardresizer.net
```

## Performance Optimization

- ✅ SVG graphics for scalability
- ✅ CSS animations and transitions
- ✅ Responsive images and media queries
- ✅ Lazy loading support (can be added)
- ✅ Minified production build

## SEO Optimization

- Meta tags and descriptions in index.html
- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3)
- Strategic internal linking
- Mobile-friendly design
- Fast page load times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues or questions about the PAN Card Resizer tool, visit [pancardresizer.net](https://pancardresizer.net)

## Related Links

- [PAN Card Resizer Tool](https://pancardresizer.net)
- [Online Document Tools](https://pancardresizer.net)
- [Learn About PAN Cards](https://pancardresizer.net)

---

**Built with ❤️ for document optimization**

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
