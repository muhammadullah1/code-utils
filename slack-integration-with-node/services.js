const { sendSlackMessage, joinSlackChannel, sendDirectMessage, getUserIdByEmail } = require("../utils/slack");

console.log("🚀 Slack Notifier 🚀");
const sendMessageInChannel = async (message) => {
  const sendResult = await sendSlackMessage(message);
  console.log("Message sent:", sendResult);
};

const sendMessageInDM = async (userId, message) => {
  const sendResult = await sendDirectMessage(userId, message);
  console.log("Message sent:", sendResult);
};

const getUserIdFromEmail = async (email) => {
  const sendResult = await getUserIdByEmail(email);
  console.log("User Id get:", sendResult);
};

const joinChannel = async (message) => {
  const joinResult = await joinSlackChannel("C07965N8VPV", message);
  console.log("Joined channel and sent message:", joinResult);
};

module.exports = {
  sendMessageInChannel,
  sendMessageInDM,
  getUserIdFromEmail,
  joinChannel,
};