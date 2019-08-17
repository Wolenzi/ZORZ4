const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args) => {
    
    if (message.content.startsWith("||say ")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(5, message.content.length));
    }
    
}

module.exports.config = {
    name: "test",
    aliases: ["si", "te"]
}