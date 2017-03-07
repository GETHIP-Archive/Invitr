import {
    Events
} from '../collections/event.js';

Template.yourEvents.helpers({
    eventsHelper() {
        var userId = Meteor.userId();
        var events = Events.find({
            host: userId
        }, {
            sort: {
                date: 1
            }
        });

        return events;
    },
});
