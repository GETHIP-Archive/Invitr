import { Events } from '../collections/event.js';
Template.homePage.events({
  'click .searchButton'(event) {
    var textField = $('#searchBox').val();
    
    FlowRouter.go('/search/' + textField);
  },
});

Template.homePage.helpers({
    eventsHelper() {
      var events = Events.find({}, {sort: {date: 1}}, {limit: 5});
      console.log('it worked');
      return events;
    },
});