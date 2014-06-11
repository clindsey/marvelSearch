window.require.register('test/unit/initialize', function(require, module) {
var runner, test, tests, _i, _len;

tests = [];

for (_i = 0, _len = tests.length; _i < _len; _i++) {
  test = tests[_i];
  require(test);
}

if (window.mochaPhantomJS) {
  mochaPhantomJS.run();
} else {
  runner = mocha.run();
  runner.on('end', function() {
    return new MochaCov;
  });
}

});

window.require.register('test/unit/views/comicsList', function(require, module) {
var ComicsListView;

ComicsListView = require('views/ComicsList');

describe("View Comics List", function() {
  return it("does something", function() {
    return expect(true).to.equal(true);
  });
});

});
