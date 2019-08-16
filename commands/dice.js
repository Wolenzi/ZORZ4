const Discord = require("discord.js");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args) => {
    let roll = Math.floor(Math.random() * 6) + 1;

    let diceembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor(colours.money_green)
    .addField("Wypadło" + roll)

    message.channel.send(diceembed);
}

module.exports.config = {
    name: "dice",
    aliases: ["si", "kostka"]
}