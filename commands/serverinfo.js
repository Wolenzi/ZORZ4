const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json")

module.exports.run = async (bot, message, args) => {
    let sEmbed = new Discord.RichEmbed()
    .setColor(colours.purple)
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
    .addField("**Nazwa serwera:**", `${message.guild.name}`, true)
    .addField("**Twoja nazwa:**", `${message.guild.owner}`, true)
    .addField("**Użytkownicy**:", `${message.guild.memberCount}`, true)
    .addField("**Role:**", `${message.guild.roles.size}`, true)
    .addField("**Utworzono:**", `${message.guild.createdAt}`, true)
    .setFooter(`WolziBot | Footer`, bot.user.displayAvatarURL);
    message.channel.send({embed: sEmbed});
}


module.exports.config = {
    name: "serverinfo",
    aliases: ["si", "serverdesc"]
}