Tinytest.add('dimsum', function (test) {
  var isDefined = false;
  try {
    dimsum;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "dimsum is not defined");
  test.isTrue(Package['peerlibrary:dimsum'].dimsum, "Package.peerlibrary:dimsum.dimsum is not defined");

  test.matches(dimsum(), /^[A-Z].+\.$/i);
});
