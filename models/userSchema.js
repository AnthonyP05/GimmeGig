import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  profile: {
    bandName: {
      type: String,
      required: true,
    },
    spotifyLink: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
  },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;