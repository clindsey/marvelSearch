tests = [
  'test/unit/views/searchArea'
]

for test in tests
  require test

if window.mochaPhantomJS
  mochaPhantomJS.run()
else
  runner = mocha.run()

  runner.on 'end', ->
    if _$jscoverage?
      new MochaCov
