Tinytest.add('meteor-dimsum', function (test) {
  var isDefined = false;
  try {
    dimsum;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "dimsum is not defined");
  test.matches(dimsum(), /^[A-Z].+\.$/i);
});