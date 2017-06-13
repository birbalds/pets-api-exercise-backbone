import Backbone from 'backbone';

var Pet = Backbone.Model.extend({
  defaults: {
    'name': 'Tofu',
    'age': '1',
    'breed': 'Fluffer',
    'vaccinated': false
  }
});

export default Pet;
