Package.describe({
  summary: "Meteor smart package for dimsum node.js package, a lorem ipsum generator"
});

Package.on_use(function (api) {
  api.add_files([
    'dimsum/dimsum.js'
  ], ['client', 'server']);
});
