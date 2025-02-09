import mongoose, { Schema, models } from "mongoose";
const User = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const User = models.User || mongoose.model("User", userSchema);
export default User;