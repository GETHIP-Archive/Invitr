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

FlowRouter.route('/newAccount', {
  action: function() {
    BlazeLayout.render("main", {content: "createAccount"});
  }
});

FlowRouter.route('/login', {
  action: function() {
    BlazeLayout.render("main", {content: "loginPage"});
  }
});

FlowRouter.route('/test', {
  action: function() {
    BlazeLayout.render("main", {content: "navSide"});
  }
});

FlowRouter.route('/downloadramr', {
  action: function() {
    BlazeLayout.render("main", {content: "ram"});
  }
});