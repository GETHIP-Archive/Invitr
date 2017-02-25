Template.homePage.events({
  'click .searchButton'(event) {
    var textField = $('#searchBox').val();
    
    FlowRouter.go('/search/' + textField);
  },
});