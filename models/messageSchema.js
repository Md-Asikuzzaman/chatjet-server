import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  senderId: {
    type: String,
  },
  receiverId: {
    type: String,
  },
  message: {
    type: String,
  },
  basedId: {
    type: String,
  },

  date: {
    type: String,
  },
});

export default mongoose.model("Message", messageSchema);
