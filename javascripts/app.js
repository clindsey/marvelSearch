window.require.register('collections/Characters', function(require, module) {
var CharacterCollection, CharacterModel, MediaCollection, config, vent;

MediaCollection = require('collections/Media');

CharacterModel = require('models/Character');

config = require('config');

vent = require('vent');

CharacterCollection = MediaCollection.extend({
  model: CharacterModel,
  url: function() {
    var limit, offset, urlString;
    limit = this.itemsPerPage;
    offset = Math.max(0, this.page * limit);
    urlString = "" + config.apiBaseUri + "/characters?apikey=" + config.apiKey + "&limit=" + limit + "&offset=" + offset;
    if (this.query) {
      urlString = "" + urlString + "&nameStartsWith=" + this.query;
    }
    return urlString;
  },
  parse: function(response) {
    vent.trigger('!characters:searchCount', {
      count: response.data.total
    });
    return MediaCollection.prototype.parse.call(this, response);
  }
});

module.exports = new CharacterCollection;

});

window.require.register('collections/Comics', function(require, module) {
var ComicCollection, ComicModel, MediaCollection, config, vent;

MediaCollection = require('collections/Media');

ComicModel = require('models/Comic');

config = require('config');

vent = require('vent');

ComicCollection = MediaCollection.extend({
  model: ComicModel,
  url: function() {
    var limit, offset, urlString;
    limit = this.itemsPerPage;
    offset = Math.max(0, this.page * limit);
    urlString = "" + config.apiBaseUri + "/comics?apikey=" + config.apiKey + "&limit=" + limit + "&offset=" + offset;
    if (this.query) {
      urlString = "" + urlString + "&titleStartsWith=" + this.query;
    }
    return urlString;
  },
  parse: function(response) {
    vent.trigger('!comics:searchCount', {
      count: response.data.total
    });
    return MediaCollection.prototype.parse.call(this, response);
  }
});

module.exports = new ComicCollection;

});

window.require.register('collections/Creators', function(require, module) {
var CreatorCollection, CreatorModel, MediaCollection, config, vent;

MediaCollection = require('collections/Media');

CreatorModel = require('models/Creator');

config = require('config');

vent = require('vent');

CreatorCollection = MediaCollection.extend({
  model: CreatorModel,
  url: function() {
    var limit, offset, urlString;
    limit = this.itemsPerPage;
    offset = Math.max(0, this.page * limit);
    urlString = "" + config.apiBaseUri + "/creators?apikey=" + config.apiKey + "&limit=" + limit + "&offset=" + offset;
    if (this.query) {
      urlString = "" + urlString + "&nameStartsWith=" + this.query;
    }
    return urlString;
  },
  parse: function(response) {
    vent.trigger('!creators:searchCount', {
      count: response.data.total
    });
    return MediaCollection.prototype.parse.call(this, response);
  }
});

module.exports = new CreatorCollection;

});

window.require.register('collections/Media', function(require, module) {
var MediaCollection, config, vent;

config = require('config');

vent = require('vent');

MediaCollection = Backbone.Collection.extend({
  page: 0,
  itemsPerPage: config.itemsPerPage,
  totalCount: 0,
  query: '',
  initialize: function() {
    return vent.on('!search:term', this.onSearchTerm, this);
  },
  onSearchTerm: function(data) {
    this.totalCount = 0;
    this.query = data.query;
    this.page = 0;
    return this.fetch();
  },
  parse: function(response) {
    this.totalCount = response.data.total;
    return response.data.results;
  }
});

module.exports = MediaCollection;

});

window.require.register('config', function(require, module) {
var config;

config = {
  apiKey: '5bcc3f454ee3374c9426e6c9f0f5ad84',
  apiBaseUri: 'http://gateway.marvel.com:80/v1/public',
  itemsPerPage: 16
};

module.exports = config;

});

window.require.register('config.example', function(require, module) {
var config;

config = {
  apiKey: '',
  apiBaseUri: 'http://gateway.marvel.com:80/v1/public',
  itemsPerPage: 16
};

module.exports = config;

});

window.require.register('helpers/charactersList', function(require, module) {

Handlebars.registerHelper('thumbnailSrc', function(thumbnail) {
  if (thumbnail == null) {
    return 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
  }
  return "" + thumbnail.path + "." + thumbnail.extension;
});

});

window.require.register('helpers/comicsList', function(require, module) {

Handlebars.registerHelper('thumbnailImageSrc', function(images) {
  var firstImage;
  firstImage = _.first(images);
  if (firstImage == null) {
    return 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
  }
  return "" + firstImage.path + "/standard_xlarge." + firstImage.extension;
});

});

window.require.register('helpers/creatorsList', function(require, module) {

Handlebars.registerHelper('thumbnailSrc', function(thumbnail) {
  return "" + thumbnail.path + "." + thumbnail.extension;
});

});

window.require.register('helpers/mediaList', function(require, module) {
var buildPaginationItem;

Handlebars.registerHelper('buildMediaList', function(collection, options) {
  var $rowEl, output;
  output = '';
  $rowEl = $('<div class="row">');
  collection.each(function(mediaItem, index) {
    var $mediaEl;
    if (index !== 0 && index % 4 === 0) {
      output += $rowEl[0].outerHTML;
      $rowEl = $('<div class="row">');
    }
    $mediaEl = $('<div class="col-xs-6 col-md-3">');
    $mediaEl.html(options.fn(mediaItem.toJSON()));
    return $rowEl.append($mediaEl);
  });
  output += $rowEl[0].outerHTML;
  return output;
});

Handlebars.registerHelper('buildPagination', function(collection) {
  var $liEl, $outEl, endIndex, pageIndex, pagesCount, startIndex, _i;
  $outEl = $('<div class="pagination">');
  pagesCount = Math.ceil(collection.totalCount / collection.itemsPerPage);
  $liEl = buildPaginationItem('&laquo;', 'page-back', collection.page === 0, 'disabled');
  $outEl.append($liEl);
  startIndex = Math.max(collection.page - 3, 0);
  endIndex = Math.min(startIndex + 6, Math.max(0, pagesCount - 1));
  if (endIndex - startIndex === 0) {
    return '';
  }
  for (pageIndex = _i = startIndex; startIndex <= endIndex ? _i <= endIndex : _i >= endIndex; pageIndex = startIndex <= endIndex ? ++_i : --_i) {
    $liEl = buildPaginationItem(pageIndex + 1, 'page-number', pageIndex === collection.page, 'active');
    $outEl.append($liEl);
  }
  $liEl = buildPaginationItem('&raquo;', 'page-forward', (collection.page === pagesCount - 1) || pagesCount === 0, 'disabled');
  $outEl.append($liEl);
  return $outEl[0].outerHTML;
});

buildPaginationItem = function(htmlText, className, condition, conditionalClassName) {
  var $aEl, $liEl;
  $liEl = $('<li>');
  $liEl.addClass(className);
  if (condition) {
    $liEl.addClass(conditionalClassName);
  }
  $aEl = $('<a href="#">').html(htmlText);
  $liEl.append($aEl);
  return $liEl;
};

});

window.require.register('index', function(require, module) {
var appRouter;

appRouter = require('router');

Backbone.history.start();

});

window.require.register('models/Character', function(require, module) {
var CharacterModel;

CharacterModel = Backbone.Model.extend({
  initialize: function() {}
});

module.exports = CharacterModel;

});

window.require.register('models/Comic', function(require, module) {
var ComicModel;

ComicModel = Backbone.Model.extend({
  initialize: function() {}
});

module.exports = ComicModel;

});

window.require.register('models/Creator', function(require, module) {
var CreatorModel;

CreatorModel = Backbone.Model.extend({
  initialize: function() {}
});

module.exports = CreatorModel;

});

window.require.register('router', function(require, module) {
var AppRouter;

AppRouter = Backbone.Router.extend({
  routes: {
    '*actions': 'defaultRoute'
  },
  defaultRoute: function(actions) {
    var characterDetailsView, charactersCollection, charactersListView, comicDetailsView, comicsCollection, comicsListView, creatorDetailsView, creatorsCollection, creatorsListView, mediaTabsView, searchAreaView;
    comicsCollection = require('collections/Comics');
    creatorsCollection = require('collections/Creators');
    charactersCollection = require('collections/Characters');
    comicDetailsView = new (require('views/ComicDetails'))({
      collection: comicsCollection
    });
    creatorDetailsView = new (require('views/CreatorDetails'))({
      collection: creatorsCollection
    });
    characterDetailsView = new (require('views/CharacterDetails'))({
      collection: charactersCollection
    });
    searchAreaView = new (require('views/SearchArea'));
    searchAreaView.render();
    mediaTabsView = new (require('views/MediaTabs'));
    mediaTabsView.render();
    comicsListView = new (require('views/ComicsList'))({
      collection: comicsCollection
    });
    comicsListView.render();
    comicsCollection.fetch();
    creatorsListView = new (require('views/CreatorsList'))({
      collection: creatorsCollection
    });
    creatorsListView.render();
    creatorsCollection.fetch();
    charactersListView = new (require('views/CharactersList'))({
      collection: charactersCollection
    });
    charactersListView.render();
    return charactersCollection.fetch();
  }
});

module.exports = new AppRouter;

});

window.require.register('vent', function(require, module) {

module.exports = _.extend({}, Backbone.Events);

});

window.require.register('views/CharacterDetails', function(require, module) {
var CharacterDetailsView, vent;

vent = require('vent');

CharacterDetailsView = Backbone.View.extend({
  el: '.media-details',
  template: require('templates')(Handlebars)['app/templates/characterDetails.hbs'],
  initialize: function() {
    var _this = this;
    return vent.bind('!character:click', function(data) {
      return _this.render(_this.collection.get(data.characterId));
    });
  },
  render: function(characterModel) {
    if (!characterModel) {
      return;
    }
    this.$el.modal();
    this.$('.modal-content').html(this.template(characterModel.toJSON()));
    return this;
  }
});

module.exports = CharacterDetailsView;

});

window.require.register('views/CharactersList', function(require, module) {
var CharactersListView, MediaListView, vent;

require('helpers/charactersList');

vent = require('vent');

MediaListView = require('views/MediaList');

CharactersListView = MediaListView.extend({
  el: '.characters-list',
  template: require('templates')(Handlebars)['app/templates/charactersList.hbs'],
  events: {
    'click .characters-list-item': 'onItemClick'
  },
  initialize: function() {
    MediaListView.prototype.initialize.call(this);
    return _.extend(this.events, MediaListView.prototype.events);
  },
  onItemClick: function($event) {
    var characterId;
    characterId = $($event.target).data('character-id');
    return vent.trigger('!character:click', {
      characterId: characterId
    });
  }
});

module.exports = CharactersListView;

});

window.require.register('views/ComicDetails', function(require, module) {
var ComicDetailsView, vent;

vent = require('vent');

ComicDetailsView = Backbone.View.extend({
  el: '.media-details',
  template: require('templates')(Handlebars)['app/templates/comicDetails.hbs'],
  initialize: function() {
    var _this = this;
    return vent.bind('!comic:click', function(data) {
      return _this.render(_this.collection.get(data.comicId));
    });
  },
  render: function(comicModel) {
    if (!comicModel) {
      return;
    }
    this.$el.modal();
    this.$('.modal-content').html(this.template(comicModel.toJSON()));
    return this;
  }
});

module.exports = ComicDetailsView;

});

window.require.register('views/ComicsList', function(require, module) {
var ComicsListView, MediaListView, vent;

require('helpers/comicsList');

vent = require('vent');

MediaListView = require('views/MediaList');

ComicsListView = MediaListView.extend({
  el: '.comics-list',
  template: require('templates')(Handlebars)['app/templates/comicsList.hbs'],
  events: {
    'click .comics-list-item': 'onItemClick'
  },
  initialize: function() {
    MediaListView.prototype.initialize.call(this);
    return _.extend(this.events, MediaListView.prototype.events);
  },
  onItemClick: function($event) {
    var comicId;
    comicId = $($event.target).data('comic-id');
    return vent.trigger('!comic:click', {
      comicId: comicId
    });
  }
});

module.exports = ComicsListView;

});

window.require.register('views/CreatorDetails', function(require, module) {
var CreatorDetailsView, vent;

vent = require('vent');

CreatorDetailsView = Backbone.View.extend({
  el: '.media-details',
  template: require('templates')(Handlebars)['app/templates/creatorDetails.hbs'],
  initialize: function() {
    var _this = this;
    return vent.bind('!creator:click', function(data) {
      return _this.render(_this.collection.get(data.creatorId));
    });
  },
  render: function(creatorModel) {
    if (!creatorModel) {
      return;
    }
    this.$el.modal();
    this.$('.modal-content').html(this.template(creatorModel.toJSON()));
    return this;
  }
});

module.exports = CreatorDetailsView;

});

window.require.register('views/CreatorsList', function(require, module) {
var CreatorsListView, MediaListView, vent;

require('helpers/creatorsList');

vent = require('vent');

MediaListView = require('views/MediaList');

CreatorsListView = MediaListView.extend({
  el: '.creators-list',
  template: require('templates')(Handlebars)['app/templates/creatorsList.hbs'],
  events: {
    'click .creators-list-item': 'onItemClick'
  },
  initialize: function() {
    MediaListView.prototype.initialize.call(this);
    return _.extend(this.events, MediaListView.prototype.events);
  },
  onItemClick: function($event) {
    var creatorId;
    creatorId = $($event.target).data('creator-id');
    return vent.trigger('!creator:click', {
      creatorId: creatorId
    });
  }
});

module.exports = CreatorsListView;

});

window.require.register('views/MediaList', function(require, module) {
var MediaListView;

require('helpers/mediaList');

MediaListView = Backbone.View.extend({
  events: {
    'click .pagination .page-number a': 'onPageNumberClick',
    'click .pagination .page-back a': 'onPageBackClick',
    'click .pagination .page-forward a': 'onPageForwardClick'
  },
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.onCollectionSync);
    return this.listenTo(this.collection, 'request', this.onCollectionRequest);
  },
  render: function(showCollection) {
    var showLoading;
    if (showCollection == null) {
      showCollection = true;
    }
    showLoading = !showCollection;
    this.$el.html(this.template({
      collection: this.collection,
      showLoading: showLoading
    }));
    return this;
  },
  onPageNumberClick: function($event) {
    var selectedPage;
    $event.preventDefault();
    if ($($event.target).parent().hasClass('active')) {
      return;
    }
    selectedPage = parseInt($($event.target).html(), 10) - 1;
    this.collection.page = selectedPage;
    return this.collection.fetch();
  },
  onPageBackClick: function($event) {
    $event.preventDefault();
    if ($($event.target).parent().hasClass('disabled')) {
      return;
    }
    this.collection.page = Math.max(0, this.collection.page - 1);
    return this.collection.fetch();
  },
  onPageForwardClick: function($event) {
    var pagesCount;
    $event.preventDefault();
    if ($($event.target).parent().hasClass('disabled')) {
      return;
    }
    pagesCount = Math.ceil(this.collection.totalCount / this.collection.itemsPerPage);
    this.collection.page = Math.min(pagesCount - 1, this.collection.page + 1);
    return this.collection.fetch();
  },
  onCollectionRequest: function() {
    return this.render(false);
  },
  onCollectionSync: function() {
    return this.render();
  }
});

module.exports = MediaListView;

});

window.require.register('views/MediaTabs', function(require, module) {
var MediaTabsView, formatNumber, vent;

vent = require('vent');

MediaTabsView = Backbone.View.extend({
  el: '.media-tabs',
  template: require('templates')(Handlebars)['app/templates/mediaTabs.hbs'],
  initialize: function() {
    vent.on('!characters:searchCount', this.onCharactersSearchCount, this);
    vent.on('!comics:searchCount', this.onComicsSearchCount, this);
    vent.on('!creators:searchCount', this.onCreatorsSearchCount, this);
    return vent.on('!search:term', this.onSearchTerm, this);
  },
  render: function() {
    this.$el.html(this.template({}));
    return this;
  },
  onSearchTerm: function() {
    return this.$('.badge').html('');
  },
  onCharactersSearchCount: function(data) {
    return this.$('a[href="#characters"] .badge').html(formatNumber(data.count));
  },
  onComicsSearchCount: function(data) {
    return this.$('a[href="#comics"] .badge').html(formatNumber(data.count));
  },
  onCreatorsSearchCount: function(data) {
    return this.$('a[href="#creators"] .badge').html(formatNumber(data.count));
  }
});

formatNumber = function(number) {
  return ("" + number).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
};

module.exports = MediaTabsView;

});

window.require.register('views/SearchArea', function(require, module) {
var SearchAreaView, vent;

vent = require('vent');

SearchAreaView = Backbone.View.extend({
  el: '.search-area',
  template: require('templates')(Handlebars)['app/templates/searchArea.hbs'],
  events: {
    'keydown input': 'onKeydownInput'
  },
  render: function() {
    this.$el.html(this.template({}));
    return this;
  },
  onKeydownInput: function($event) {
    var query;
    if ($event.keyCode === 13) {
      $event.preventDefault();
      query = this.$('input').val();
      $($event.target).blur();
      return vent.trigger('!search:term', {
        query: query
      });
    }
  }
});

module.exports = SearchAreaView;

});
