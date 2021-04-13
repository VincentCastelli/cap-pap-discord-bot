const botMention = require("./commands/messaging/botMention");
const cod = require("./commands/codTracker/cod");
const gif = require("./commands/media/gif");
const ping = require("./commands/information/ping");
const user = require("./commands/information/user");

const commands = { cod, gif, ping, user };

module.exports = async (msg) => {
  if (
    Boolean(msg.mentions.users.find((user) => user.id === "804618304596475955"))
  ) {
    botMention(msg);
  }

  const msgContent = msg.content.split(" ");
  let command = msgContent.shift();

  if (command.charAt(0) === "!") {
    // Valid command starts with !
    command = command.substring(1);
    commands[command](msg, msgContent);
  }
};
