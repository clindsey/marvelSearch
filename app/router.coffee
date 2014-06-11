AppRouter = Backbone.Router.extend
  routes:
    '*actions': 'defaultRoute'

  defaultRoute: (actions) ->
    comicsCollection = require 'collections/Comics'
    creatorsCollection = require 'collections/Creators'
    charactersCollection = require 'collections/Characters'

    comicDetailsView = new (require 'views/ComicDetails') collection: comicsCollection
    creatorDetailsView = new (require 'views/CreatorDetails') collection: creatorsCollection
    characterDetailsView = new (require 'views/CharacterDetails') collection: charactersCollection

    searchAreaView = new (require 'views/SearchArea')
    searchAreaView.render()

    mediaTabsView = new (require 'views/MediaTabs')
    mediaTabsView.render()

    comicsListView = new (require 'views/ComicsList') collection: comicsCollection
    comicsListView.render()
    comicsCollection.fetch()

    creatorsListView = new (require 'views/CreatorsList') collection: creatorsCollection
    creatorsListView.render()
    creatorsCollection.fetch()

    charactersListView = new (require 'views/CharactersList') collection: charactersCollection
    charactersListView.render()
    charactersCollection.fetch()

module.exports = new AppRouter
