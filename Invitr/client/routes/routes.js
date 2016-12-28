FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("main", {content: "frontPage"});
  }
});

FlowRouter.route('/create', {
  action: function() {
    BlazeLayout.render("main", {content: "createEvent"});
  }
});

FlowRouter.route('/home', {
  action: function() {
    BlazeLayout.render("main", {content: "homePage"});
  }
});