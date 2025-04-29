const app = document.getElementById('app');

function loadView(hash) {
  switch (hash) {
    case '#home':
      app.innerHTML = `<h2>Home</h2><p>Welcome to the Home page!</p>`;
      break;
    case '#about':
      app.innerHTML = `<h2>About</h2><p>This is a simple SPA with hash-based routing.</p>`;
      break;
    case '#contact':
      app.innerHTML = `<h2>Contact</h2><p>Contact us at xyz@support.com</p>`;
      break;
    default:
      app.innerHTML = `<h2>404</h2><p>Page not found.</p>`;
  }
}

window.addEventListener('load', () => {
  loadView(location.hash || '#home');
});

// Re-run when the hash changes
window.addEventListener('hashchange', () => {
  loadView(location.hash);
});
