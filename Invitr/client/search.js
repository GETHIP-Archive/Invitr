import {
    Events
} from '../collections/event.js';
import {
    UserProfile
} from '../collections/event.js';
Meteor.subscribe('allUsers');
Template.homePage.events({
    'click .searchButton' (event) {
        var textField = $('#searchBox').val();

        FlowRouter.go('/search/' + textField);
    },
});

Template.search.helpers({
    eventsHelper() {

        var events = Events.find({
            date: {
                $gte: new Date()
            }
        }, {
            sort: {
                date: 1
            }
        }).fetch();
        for (event of events) {
            var user = Meteor.users.findOne({
                "_id": event.host
            })
            console.log(user);
            event.host = user.profile.firstname + " " + user.profile.lastname + " (" + user.username + ") "
        }
        return events;
    },
});
