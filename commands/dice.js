const Discord = require("discord.js");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args) => {
    let roll = ["Wypadło 1 oczko.", "Wypadły 2 oczka.", "Wypadły 3 oczka.", "Wypadłt 4 oczka.", "Wypadło 5 oczek.", "Wypadło 6 oczek."];
    let roll = Math.floor((Math.random() * roll));

    let diceembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setColor(colours.money_green)
    .addField(roll)

    message.channel.send(diceembed);
}

module.exports.config = {
    name: "dice",
    aliases: ["si", "kostka"]
}