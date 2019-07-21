const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args) => {

    if (args === "heads" || args === "tails"){
        if(args != coins) {
            message.channel.send("przegrana");
        }
        else {
            message.channel.send("wygrana");
        }
    } 
    else {
        message.channel.send("błąd");
    }
}

module.exports.config = {
    name: "flipcoin",
    aliases: ["si", "moneta"]
}