const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// This is an example model for a user where we are storing their name and email
const userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: false
	}
});

// This registers the model into mongoose so that anywhere else in your server you can do
/*
`const User = mongoose.model('User');`
`User.update(...)`
*/
mongoose.model('User', userSchema);
