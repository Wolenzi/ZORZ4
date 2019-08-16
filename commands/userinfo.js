const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json")

module.exports.run = async (bot, message, args) => {
    let uEmbed = new Discord.RichEmbed()
    .setColor(colours.blue)
    .setTitle("Informacje o użytkowniku")
    .setThumbnail(message.author.avatarURL)
    .setAuthor(`Info ${message.author.username}`, message.author.defaultAvatarURL)
    .addField("**Nazwa:**", `${message.guild.owner}`, true)
    .addField("**Tag:**", `${message.author.discriminator}`, true)
    .addField("**ID:**", `${message.author.id}`, true)
    .addField("**Status:**", `${message.author.presence.status}`, true)
    .addField("**Utworzono:**", `${message.author.createdAt}`, true)
    .setFooter(`WolziBot | Footer`, bot.user.displayAvatarURL);
    message.channel.send({embed: uEmbed});
}


module.exports.config = {
    name: "dokument",
    aliases: ["si", "userinfo"]
}