const Discord = require("discord.js");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args, ops) => {

    var guildIDData = ops.active.get(message.guild.id);

    if (!guildIDData) {
        let pEmbed = new Discord.RichEmbed()
            .setTitle("💤 **W tej chwili nie ma żadnych utworów.**")
            .setColor(colours.light_blue)

        return message.channel.send(pEmbed);
    }

    if (message.member.voiceChannel !== message.guild.me.voiceChannel) {
        let pEmbed = new Discord.RichEmbed()
            .setTitle("⛔ **Niestety nie jesteś na tym samym kanale co bot.**")
            .setColor(colours.red)

        return message.channel.send(pEmbed);
    }

    if (isNaN(args[0]) || args[0] > 150 || args[0] < 0) {
        let pEmbed = new Discord.RichEmbed()
            .setTitle("⛔ **Wprowadź liczbę od 0 do 150.**")
            .setColor(colours.red)

        return message.channel.send(pEmbed);
    }

    {
        let pEmbed = new Discord.RichEmbed()
            .setTitle(`✅ **Głośność zmieniona**  ${guildIDData.queue[0].songTitle} **na** ${args[0]}`)
            .setColor(colours.green)
            
        guildIDData.dispatcher.setVolume(args[0] / 100) || message.channel.send(pEmbed);
 
    }
 
}

module.exports.config = {
    name: "volume",
    aliases: ["vo", "głośność"]
}
