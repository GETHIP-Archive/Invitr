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

FlowRouter.route('/signUp/:redirect', {
	name: 'signUp',
  action: function() {
    BlazeLayout.render('signUp');
  }

});