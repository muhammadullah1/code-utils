
const { sendMessageInChannel, sendMessageInDM, getUserIdFromEmail } = require("./services/slack");

const messageBlocks = [
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text: "Hello, Slack!. Message From Puppydog",
    },
  },
];
// sendMessageInChannel(messageBlocks);
// const userEmail = getUserIdFromEmail('muhammad.ullah@puppydog.io');
// console.log("-----email----", userEmail)
sendMessageInDM('U061LKH8UMD', messageBlocks);
