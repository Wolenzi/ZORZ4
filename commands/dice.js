const Discord = require("discord.js");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args) => {
    message.delete(1);
    let replies = ["1 oczko.", "2 oczka.", "3 oczka.", "4 oczka.", "5 oczek.", "6 oczek."];
    let roll = Math.floor((Math.random() * replies.length));

    let diceembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setColor(colours.money_green)
    .addField("Rezultat:", replies[roll])

    message.channel.send(diceembed);
}

module.exports.config = {
    name: "dice",
    aliases: ["di", "kostka"]
}