const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json")

module.exports.run = async (bot, message, args) => {
    let uEmbed = new Discord.RichEmbed()
    .setColor(colours.blue)
    .setTitle("User Info")
    .setThumbnail(message.author.avatarURL)
    .setAuthor(`${message.author} Info`, message.author.defaultAvatarURL)
    .addField("**Nazwa:**", `${message.author.username}`, true)
    .addField("**Tag:**", `${message.author.discriminator}`, true)
    .addField("**ID:**", `${message.author.id}`, true)
    .addField("**Status:**", `${message.author.presence.status}`, true)
    .addField("**Utworzono:**", `${message.author.createdAt}`, true)
    .setFooter(`WolziBot | Footer`, bot.user.displayAvatarURL);
    message.channel.send({embed: uEmbed});
}


module.exports.config = {
    name: "userinfo",
    aliases: ["si", "userdesc"]
}