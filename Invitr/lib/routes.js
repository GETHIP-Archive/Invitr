import { Events } from '../collections/event.js';
FlowRouter.route('/', {
    name: 'index',
    action: function(params) {

       	if (Meteor.userId() && Meteor.userId()) {
    		BlazeLayout.render('homePage');
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

FlowRouter.route('/invitation', {
  name: 'invitation',
  action: function() {
    BlazeLayout.render('invitation');
  }
});

FlowRouter.route('/invites', {
  name: 'invites',
  action: function() {
    BlazeLayout.render('invites');
  }
});

FlowRouter.route('/home', {
	name: 'home',
  action: function() {
    BlazeLayout.render('homePage');
  }
});

FlowRouter.route('/calendar', {
  name: 'calendar',
  action: function() {
    BlazeLayout.render('calendar');
  }
});

FlowRouter.route('/search', {
  name: 'search',
  action: function() {
    BlazeLayout.render('search');
  }
});

FlowRouter.route('/yourEvents', {
  name: 'yourEvents',
  action: function() {
    BlazeLayout.render('yourEvents');
  }
});

FlowRouter.route('/pastEvents', {
  name: 'pastEvents',
  action: function() {
    BlazeLayout.render('pastEvents');
  }
});

FlowRouter.route('/settings', {
  name: 'settings',
  action: function() {
    BlazeLayout.render('settings');
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
