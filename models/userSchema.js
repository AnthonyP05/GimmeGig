import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  // Add other fields as needed
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;