import App from './controllers/App';

import '../styles/main.css';

// Setup the App once the window loads
window.addEventListener('load', () => App.setup());

// Handle resizing of App components (models and views)
window.addEventListener('resize', () => App.resize());
