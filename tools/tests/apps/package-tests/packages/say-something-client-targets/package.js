Package.describe({
  version: "1.0.0",
  summary: "prints to console, depending on which client arch we build for"
});

Package.on_use(function (api) {
  api.add_files('all-clients.js', ['client']);
  api.add_files('browser-client.js', ['client.browser']);
  api.add_files('test-client.js', ['client.test']);
  api.add_files('server.js', ['server']);
});
