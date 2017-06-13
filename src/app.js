import $ from 'jquery';
import _ from 'underscore';

import PetList from 'app/collections/pet_list';
import PetListView from 'app/views/pet_list_view';

var petList = new PetList();

var petListView = new PetListView({
  model: petList,
  template: _.template($('#pet-card-template').html()),
  el: 'main'
});

$(document).ready(function() {
petList.fetch();
});
