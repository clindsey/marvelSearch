var CreatorDetailsView, vent;

vent = require('vent');

CreatorDetailsView = Backbone.View.extend({
  el: '.media-details',
  template: require('templates')(Handlebars)['app/templates/creatorDetails.hbs'],
  initialize: function() {
    return vent.bind('!creator:click', (function(_this) {
      return function(data) {
        return _this.render(_this.collection.get(data.creatorId));
      };
    })(this));
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
