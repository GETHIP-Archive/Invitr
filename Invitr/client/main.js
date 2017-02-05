import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

CreateEvent = new SimpleSchema({
  host: {
    type: String,
    label: "Host",
    max: 50
  },
  event_name: {
    type: String,
    label: "Title"
  },
  date: {
    type: Date,
    label: "Date",
  },
  time: {
    type: String,
    label: "Time",
    max: 5
  },
  location: {
    type: String,
    label: "location",
    optional: true,
    max: 100
  },
  description: {
  	type: String,
  	label: "description",
  }
});

UserProfile = new SimpleSchema({
  fullname: {
    type: String,
    label: "fullname",
  },
  email: {
  	type: String,
  	label: "email",
  },
  bio: {
  	type: String,
  	label: "biography",
  	max: 250
  }

});