const { WebClient } = require("@slack/web-api");

const config = {
  slackBotToken: "xoxb-5194338183636-7335101343392-jYRb4nOSHlBO8w3I2rTP7dF6",
  slackChannelId: "C07965N8VPV",
};

const web = new WebClient(config.slackBotToken);

const sendSlackMessage = async (message, channel = null) => {
  const channelId = channel || config.slackChannelId;
  try {
    await web.chat.postMessage({
      blocks: message,
      channel: channelId,
    });
    return true;
  } catch (error) {
    console.error("Error sending Slack message:", error);
    return false;
  }
};

const sendDirectMessage = async (userId, message) => {
  try {
    const email = 'muhammad.ullah@puppydog.io';
    const response = await web.users.lookupByEmail({ email });
    const conversation = await web.conversations.open({ users: userId });
    const channelId = conversation.channel.id;

    await web.chat.postMessage({
      channel: channelId,
      text: message.text,
      blocks: message.blocks,
    });
    return true;
  } catch (error) {
    console.log("----error----", error)
    console.error('Error sending Slack message:', error);
    return false;
  }
};

const getUserIdByEmail = async (email) => {
  try {
    const response = await web.users.lookupByEmail({ email });
    return response.user.id;
  } catch (error) {
    console.error('Error fetching user ID by email:', error);
    return null;
  }
};


const joinSlackChannel = async (channel, message = null) => {
  try {
    await web.conversations.join({ channel });
    if (message) {
      await sendSlackMessage(message, channel);
    }
    return true;
  } catch (error) {
    console.error("Error joining Slack channel:", error);
    return false;
  }
};

module.exports = {
  sendSlackMessage,
  joinSlackChannel,
  sendDirectMessage,
  getUserIdByEmail,
};
