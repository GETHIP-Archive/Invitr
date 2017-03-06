Template.createAccount.events({
    'submit .form-register' (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const target = event.target;

        console.log();
        Meteor.call('newUser', target.name.value, target.email.value, target.nameFirst.value, target.nameLast.value, target.password.value, target.cpassword.value, _register);
    }
});

function _register(error) {
    if (error) {
        sAlert.error(error.reason);
    } else {
        FlowRouter.go('/login');
    }
}
