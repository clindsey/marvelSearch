tests = [
  #'test/unit/views/comicsList'
]

for test in tests
  require test

if window.mochaPhantomJS
  mochaPhantomJS.run()
else
  runner = mocha.run()

  runner.on 'end', ->
    new MochaCov
