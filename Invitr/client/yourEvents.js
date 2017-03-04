import { Events } from '../collections/event.js';

Template.yourEvents.helpers({
    eventsHelper() {
      var userId = Meteor.userId();
      console.log(userId);
      var events = Events.find({host: userId}, {sort: {date: 1}});
      

      console.log('it worked');
      return events;
    },
});

     