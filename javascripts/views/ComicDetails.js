window.require.register("views/ComicDetails", function(require, module) {var ComicDetailsView, vent;

vent = require('vent');

ComicDetailsView = Backbone.View.extend({
  el: '.media-details',
  template: require('templates')(Handlebars)['app/templates/comicDetails.hbs'],
  initialize: function() {
    return vent.bind('!comic:click', (function(_this) {
      return function(data) {
        return _this.render(_this.collection.get(data.comicId));
      };
    })(this));
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
