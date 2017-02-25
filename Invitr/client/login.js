Template.login.events({
  'submit .form-login'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;

    Meteor.loginWithPassword(target.name.value, target.password.value, _login);
  }
});

function _login(error){
  if(error){
    sAlert.error(error.reason);
  }else{
    FlowRouter.go('/home');
  }
}