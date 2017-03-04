import { Events } from '../collections/event.js';

Template.yourEvents.helpers({
    eventsHelper() {
      var userId = Meteor.userId();
      console.log(userId);
      var events = Events.find({host: userId});
      

      console.log('it worked');
      return events;
    },
});

     