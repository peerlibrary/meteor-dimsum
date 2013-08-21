Package.describe({
  summary: "Meteor smart package for dimsum node.js package, a lorem ipsum generator"
});

Package.on_use(function (api) {
  api.export('dimsum');

  api.add_files([
    'dimsum/dimsum.js',
    'export-dimsum.js'
  ], ['client', 'server']);
});

Package.on_test(function (api) {
  api.use(['dimsum', 'tinytest', 'test-helpers'], ['client', 'server']);
  api.add_files('tests.js', ['client', 'server']);
});