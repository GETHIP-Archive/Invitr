import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  newUser: function(username, email, firstname, lastname, password, confirmPassword) {
    if(password != confirmPassword){
      throw new Meteor.Error('passwords-do-not-match', 'Passwords do not match.')
    }
    if (password.length < 5) {
      throw new Meteor.Error('password-too-short', 'Use a longer password.');
    }

    var profile
    
    id = Accounts.createUser({
    	username: username,
      	email: email,
      	password: password,
      profile: {
      	firstname: firstname,
      	lastname: lastname,
      }
    })
});