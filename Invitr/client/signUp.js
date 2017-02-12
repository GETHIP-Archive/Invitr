Template.signUp.events({
	'submit form': function(event)	{
		event.preventDefault();
		var emailVar= event.target.registerEmail.value;
		var passwordVar = event.target.registerPassword.value
		Accounts.createUser({
			email: emailVar,
			password: passwordVar
		},
		onCreate()
		);
	}
})

function onCreate (error){
	if (error) {
		console.log(error.reason);
	}

	console.log('callback');

}

