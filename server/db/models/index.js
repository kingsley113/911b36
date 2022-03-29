const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");

// associations

Conversation.belongsToMany(User, { through: "Conversation_Users" });
User.belongsToMany(Conversation, { through: "Conversation_Users" });
Message.belongsTo(Conversation);
Conversation.hasMany(Message);

module.exports = {
  User,
  Conversation,
  Message,
};
