const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json")

module.exports.run = async (bot, message, args) => {
    message.delete(1);
    let uEmbed = new Discord.RichEmbed()
    .setColor(colours.blue)
    .setTitle("Informacje o użytkowniku")
    .setThumbnail(message.author.avatarURL)
    .setAuthor(`Użytkownik ${message.author.username}`, message.author.defaultAvatarURL)
    .addField("**Nazwa:**", `${message.author}`, true)
    .addField("**Tag:**", `${message.author.discriminator}`, true)
    .addField("**ID:**", `${message.author.id}`, true)
    .addField("**Status:**", `${message.author.presence.status}`, true)
    .addField("**Utworzono:**", `${message.author.createdAt}`, true)
    .setFooter(`WolziBot | Footer`, bot.user.displayAvatarURL);
    message.channel.send({embed: uEmbed});
}


module.exports.config = {
    name: "dokument",
    aliases: ["ui", "userinfo"]
}