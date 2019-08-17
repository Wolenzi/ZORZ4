const Discord = require("discord.js");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args) => {
    message.delete(1);
    if(!args[0]) return message.reply("Proszę wybrać: ``Orzeł`` lub ``Reszka``!");
    let replies = ["Orzeł.", "Reszka."];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let flipembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setColor(colours.money_green)
    .addField("Obstawiłeś", question)
    .addField("Rezultat", replies[result]);

    message.channel.send(flipembed);
}

module.exports.config = {
    name: "flipcoin",
    aliases: ["si", "moneta"]
}