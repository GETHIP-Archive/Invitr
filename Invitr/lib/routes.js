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
    if (Meteor.userId() && Meteor.userId()) {
    BlazeLayout.render("main", {content: "createEvent"});
    } else {
    BlazeLayout.render('index');
    }
    
  }
});

FlowRouter.route('/invitation', {
  name: 'invitation',
  action: function() {

    if (Meteor.userId() && Meteor.userId()) {
    BlazeLayout.render("invitation");
    } else {
    BlazeLayout.render('index');
    }
  }
});

FlowRouter.route('/invites', {
  name: 'invites',
  action: function() {
    BlazeLayout.render('invites');
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

    if (Meteor.userId() && Meteor.userId()) {
    BlazeLayout.render("homePage");
    } else {
    BlazeLayout.render('index');
    }
  }
}); 

FlowRouter.route('/calendar', {
  name: 'calendar',
  action: function() {

    if (Meteor.userId() && Meteor.userId()) {
    BlazeLayout.render("calendar");
    } else {
    BlazeLayout.render('index');
    }
  }
});

FlowRouter.route('/search', {
  name: 'search',
  action: function() {

    if (Meteor.userId() && Meteor.userId()) {
    BlazeLayout.render("search");
    } else {
    BlazeLayout.render('index');
    }
  }
});

FlowRouter.route('/yourEvents', {
  name: 'yourEvents',
  action: function() {
    if (Meteor.userId() && Meteor.userId()) {
    BlazeLayout.render("search");
    } else {
    BlazeLayout.render('index');
    }
  }
});

FlowRouter.route('/pastEvents', {
  name: 'pastEvents',
  action: function() {

    if (Meteor.userId() && Meteor.userId()) {
    BlazeLayout.render("pastEvents");
    } else {
    BlazeLayout.render('index');
    }
  }
});

FlowRouter.route('/settings', {
  name: 'settings',
  action: function() {

    if (Meteor.userId() && Meteor.userId()) {
    BlazeLayout.render("settings");
    } else {
    BlazeLayout.render('index');
    }
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action: function() {
    
    if (Meteor.userId() && Meteor.userId()) {
    BlazeLayout.render("homePage");
    } else {
    BlazeLayout.render('login');
    }
  }
});

FlowRouter.route('/signUp', {
	name: 'signUp',
  action: function() {

    if (Meteor.userId() && Meteor.userId()) {
    BlazeLayout.render("createAccount");
    } else {
    BlazeLayout.render('index');
    }
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

FlowRouter.route('/search/:id', {
  name: 'searchBox',
  action: function() {
    BlazeLayout.render('searchBox');
  }
});
