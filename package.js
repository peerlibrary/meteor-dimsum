Package.describe({
  summary: "A lorem ipsum generator, generating a filler text for placeholder content",
  version: '0.1.8_6',
  name: 'peerlibrary:dimsum',
  git: 'https://github.com/peerlibrary/meteor-dimsum.git'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.3');
  api.export('dimsum');

  api.add_files([
    'dimsum/dimsum.js',
    'export-dimsum.js'
  ], ['client', 'server']);
});

Package.on_test(function (api) {
  api.use(['peerlibrary:dimsum', 'tinytest', 'test-helpers'], ['client', 'server']);

  api.add_files('tests.js', ['client', 'server']);
});
