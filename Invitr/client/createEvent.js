import { Events } from '../collections/event.js';
Template.createEvent.events({
	'submit #eventForm': function(event)	{
		event.preventDefault();
		var host = Meteor.userId();
		var name = event.target.name.value
    var description = event.target.description.value
    var date = event.target.date.value
    var time = event.target.time.value
    var location = event.target.location.value

    var eventId = Events.insert({
      name: name,
      host: host,
      description: description,
      date: date,
      time: time,
      location: location
    })
    if(eventId){
      FlowRouter.go('/eventView/' + eventId);
    }
    console.log(eventId);
	}
})
