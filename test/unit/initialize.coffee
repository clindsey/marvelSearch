tests = [
  'test/unit/views/mediaTabs'
  #'test/unit/views/searchArea'
# 'test/unit/views/mediaList'
# 'test/unit/views/creatorsList'
# 'test/unit/views/creatorDetails'
# 'test/unit/views/comicsList'
# 'test/unit/views/comicDetails'
# 'test/unit/views/charactersList'
# 'test/unit/views/characterDetails'
# 'test/unit/models/creator'
# 'test/unit/models/comic'
# 'test/unit/models/character'
# 'test/unit/helpers/creatorsList'
# 'test/unit/helpers/comicsList'
# 'test/unit/helpers/charactersList'
# 'test/unit/helpers/characterDetails'
# 'test/unit/config'
# 'test/unit/collections/media'
# 'test/unit/collections/creators'
# 'test/unit/collections/comics'
# 'test/unit/collections/characters'
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
