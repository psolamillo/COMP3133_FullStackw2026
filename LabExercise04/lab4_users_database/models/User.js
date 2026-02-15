const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: [4, 'Username must be at least 4 characters'],
    maxLength: [100, 'Username must be at max 100 characters']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: false,
    validate: {
      validator: function(v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: props => `${props.value} is not valid`
    }
  },
  city: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z ]+$/.test(v);
      },
      message: props => `${props.value} contains invalid characters. Only alphabets and space allowed.`
    }
  },
  website: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^https?:\/\//.test(v);
      },
      message: props => `${props.value} is not a valid URL. Only http or https allowed.`
    }
  },
  zipCode: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^\d{5}-\d{4}$/.test(v);
      },
      message: props => `${props.value} is not a valid zip code. Format must be like 12345-1234 `
    }
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^\d-\d{3}-\d{3}-\d{4}$/.test(v);
      },
      message: props => `${props.value} is not a valid phone number. Format must be like 1-123-123-1234 `
    }
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
