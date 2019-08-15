const Discord = require("discord.js");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.reply("Proszę rzucić!");
    let replies = ["Orzeł.", "Reszka."];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let flipembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("lime")
    .addField("Obstawiłeś", question)
    .addField("Rezultat", replies[result]);

    message.channel.send(flipembed);
}

module.exports.config = {
    name: "flipcoin",
    aliases: ["si", "rzut"]
}