require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const CodAPI = require("call-of-duty-api")({ platform: "xbl" });
const papSignal = require("./commands/messaging/papSignal");

client.login(process.env.BOTTOKEN);
const readyDiscord = async () => {
  console.log(`${client.user.tag} has logged in and ready!`);
  await CodAPI.login(process.env.CODUSERNAME, process.env.CODPASS);
};

const commandHandler = require("./commands");

client.on("ready", readyDiscord);
client.on("message", commandHandler);
papSignal(client);
