import {
    Events
} from '../collections/event.js';
Template.calendar.helpers({
    events() {
        var calendarEvents = [];
        var events = Events.find({}, {
            sort: {
                date: 1
            }
        }).fetch();
        for (event of events) {
            calendarEvents.push({
                title: event.name,
                start: event.date,
                url: "/eventView/" + event._id
            });
        }
        return calendarEvents;
    },
});
