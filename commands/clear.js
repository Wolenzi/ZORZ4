const Discord = require("discord.js")
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.replay("oof.");
    if(!args[0]) return message.channel.send("oof.");
    message.channel.bulkDelete(args[0]).then(() => {
        let cEmbed = new Discord.RichEmbed()
            .setTitle(`**Usunięto ${args[0]} wiadomości**`)
            .setColor(colours.green)

        message.channel.send(cEmbed).then(msg => msg.delete(5000))
    })
}


module.exports.config = {
    name: "clear",
    aliases: ["si", "czyść"]
}