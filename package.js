Package.describe({
  summary: "Meteor smart package for dimsum node.js package"
});

Package.on_use(function (api) {
  api.use('coffeescript', 'server');

  api.add_files([
    'bootstrap.coffee',
    'server.coffee'
  ], 'server');
});
