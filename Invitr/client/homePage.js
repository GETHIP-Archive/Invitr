import { Events } from '../collections/event.js';
import { UserProfile } from '../collections/event.js';
Template.homePage.events({
  'click .searchButton'(event) {
    var textField = $('#searchBox').val();
    
    FlowRouter.go('/search/' + textField);
  },
});

Template.homePage.helpers({
    eventsHelper() {
        
          
      var events = Events.find({}, {sort: {date: 1}}, {limit: 5}).fetch();
    for (event of events){
        var user = meteor.users.findOne(_Id: event.host);
        event.host = user
    }
      console.log('it worked');
      return events;
    },
});