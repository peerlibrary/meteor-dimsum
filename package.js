Package.describe({
  summary: "A lorem ipsum generator, generating a filler text for placeholder content",
  version: '0.1.8-5',
  name: 'mrt:dimsum',
  git: 'https://github.com/peerlibrary/meteor-dimsum.git'
});

Package.on_use(function (api) {
  api.imply('peerlibrary:dimsum@0.1.8-5');
});
