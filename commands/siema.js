const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args) => {
    message.delete(1000);
    let siemaEmbed = new Discord.RichEmbed()
        .setDescription(`Siema **${message.author}**`)
        .setColor(colours.lime)
    return message.channel.send(siemaEmbed);

}

module.exports.config = {
    name: "siema",
    aliases: ["si", "siemanko"]
}
