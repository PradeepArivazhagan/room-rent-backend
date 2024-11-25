import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("Users", userSchema);

export default User;
