Template.navBar.events({
  'click #logout': function(event){
      Meteor.logout(_logout);
  }
});

function _logout (){
	FlowRouter.go('/login')
}