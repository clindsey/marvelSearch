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
