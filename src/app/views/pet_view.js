import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

var PetView = Backbone.View.extend({
  initialize: function(params){
    this.template = params.template;
  },
  render: function(){
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events:{
    'click': "showDetails",
    'click h3.btn-delete' : "deletePet",
    'change input': "toggleVaccinated"
  },
  showDetails: function(event){
    $('#pet').empty();
    var detailsTemplate = _.template($('#pet-info-template').html());
    var compiledTemplate = detailsTemplate(this.model.toJSON());

    $('#pet').append(compiledTemplate);
  },
  deletePet: function(){
    this.model.destroy();
  },
  toggleVaccinated: function(){
    var newStatus = !(this.model.get('vaccinated'));
    this.model.set('vaccinated', newStatus);
    this.model.save();
  }
});
export default PetView;
