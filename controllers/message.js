import Message from "./../models/messageSchema.js";

export const sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, date, message } = req.body;

    const result = await Message.create({
      senderId,
      receiverId,
      date,
      message,
      basedId: receiverId,
    });

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const fetchMessage = async (req, res) => {
  try {
    const messages = await Message.find();

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
