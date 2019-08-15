const Discord = require("discord.js");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args) => {
    if(!args[2]) return message.reply("Proszę zadać pytanie!");
    let replies = ["Tak.", "Nie.", "Nie mam pojęcia.", "Zapytaj mnie później."];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor(colours.lime)
    .addField("Pytanie", question)
    .addField("Odpowiedź", replies[result]);

    message.channel.send(ballembed);
}

module.exports.config = {
    name: "8ball",
    aliases: ["si", "pyt"]
}