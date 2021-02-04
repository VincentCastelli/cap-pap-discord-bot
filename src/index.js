require("dotenv").config()
const Discord = require("discord.js")
const client = new Discord.Client()
const papSignal = require('./commands/messaging/papSignal')

client.login(process.env.BOTTOKEN)
const readyDiscord = () => {
    console.log(`${client.user.tag} has logged in and ready!`)
}

const commandHandler = require('./commands')

client.on('ready', readyDiscord)
client.on('message', commandHandler)
papSignal(client)
