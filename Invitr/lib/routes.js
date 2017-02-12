import { Events } from '../collections/event.js';
FlowRouter.route('/', {
    name: 'index',
    action: function(params) {

       	if (Meteor.userId() && Meteor.userId()) {
    		BlazeLayout.render('home');
        } else {
    		BlazeLayout.render('index');
        }
    }
});

FlowRouter.route('/create', {
	name: 'create',
  action: function() {
    BlazeLayout.render("main", {content: "createEvent"});
  }
});

FlowRouter.route('/home', {
	name: 'home',
  action: function() {
    BlazeLayout.render('home');
  }
});

FlowRouter.route('/calendar', {
  name: 'calendar',
  action: function() {
    BlazeLayout.render('calendar');
  }
});

FlowRouter.route('/signUp/:redirect', {
	name: 'signUp',
  action: function() {
    BlazeLayout.render('signUp');
  }

});

FlowRouter.route('/eventView/:id', {
  name: 'eventView',
  action: function(params, queryParams) {
    console.log(params.id);
    var event = Events.findOne({_id: "hdYezckozpPGxiBaL"});
    console.log(event);
    BlazeLayout.render('eventView', {event: event});
  }
});
