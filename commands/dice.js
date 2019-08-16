const Discord = require("discord.js");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.reply("Błąd");
    let replies = ["Wypadło 1 oczko.", "Wypadły 2 oczka.","Wypadły 3 oczka.","Wypadły 4 oczka.","Wypadło 5 oczek.","Wypadło  oczek."];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let flipembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor(colours.money_green)
    .addField("Obstawiłeś", question)
    .addField("Rezultat", replies[result]);

    message.channel.send(flipembed);
}

module.exports.config = {
    name: "dice",
    aliases: ["si", "kostka"]
}