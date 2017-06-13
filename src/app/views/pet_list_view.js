import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import PetView from './pet_view';
import Pet from '../models/pet.js'

var PetListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);

  },
  render: function(){
    this.$('#pet-list').empty();

    var that = this;

    this.model.each(function(pet){

      var petView = new PetView({
        model: pet,
        template: that.template,
      });

      that.$('#pet-list').append(petView.render().$el);
    });
    return this;
  },

  events:{
    'click h3.btn-save': "savePet",
    'click h3.btn-cancel': "cancelPet",
  },
  newPet: function(){
    var name = $('#name').val();
    $('#name').val("");

    var age = $('#age').val();
    $('#age').val("");

    var breed = $('#breed').val();
    $('#breed').val("");

    var about = $('#about').val();
    $('#about').val("");

    var vaccinated = $('#vaccinated').prop("checked");
    $('#vaccinated').prop("checked", false);

    var postData = {}

    if (name && name != ""){
      postData["name"] = name;
    }
    if (age && age != ""){
      postData["age"] = age;
    }
    if (breed && breed != ""){
      postData["breed"] = breed;
    }
    if (about && about != ""){
      postData["about"] = about;
    }
      postData["vaccinated"] = vaccinated;
      return postData;
  },

  savePet: function() {
    var postData = this.newPet();
    this.model.create(postData);
  },
  cancelPet: function(){
    $('#name').val("");
    $('#age').val("");
    $('#breed').val("");
    $('#about').val("");
    $('#vaccinated').prop("checked", false);
  }

});

export default PetListView;
