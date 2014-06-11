window.require.register("views/SearchArea", function(require, module) {var SearchAreaView, vent;

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
