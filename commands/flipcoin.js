const Discord = require("discord.js");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args) => {
    message.delete(1);
    let replies = ["Orzeł.", "Reszka."];
    let roll = Math.floor((Math.random() * replies.length));

    let flipembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setColor(colours.money_green)
    .addField("Rezultat:", replies[roll])

    message.channel.send(flipembed);
}

module.exports.config = {
    name: "flipcoin",
    aliases: ["si", "moneta"]
}