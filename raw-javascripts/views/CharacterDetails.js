var CharacterDetailsView, vent;

vent = require('vent');

CharacterDetailsView = Backbone.View.extend({
  el: '.media-details',
  template: require('templates')(Handlebars)['app/templates/characterDetails.hbs'],
  initialize: function() {
    return vent.bind('!character:click', (function(_this) {
      return function(data) {
        return _this.render(_this.collection.get(data.characterId));
      };
    })(this));
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
