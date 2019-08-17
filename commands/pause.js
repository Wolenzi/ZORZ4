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
 
    if (guildIDData.dispatcher.paused) {
        let pEmbed = new Discord.RichEmbed()
            .setTitle("⏸ **Muzyka jest już wstrzymana.**")
            .setColor(colours.blue)

        return message.channel.send(pEmbed);
    }

    {
        let pEmbed = new Discord.RichEmbed()
            .setTitle(`⏸ **${guildIDData.queue[0].songTitle}**`)
            .addField("**Wstrzymano przez:**", `${message.author.tag}`)
            .setColor(colours.blue)
            
        guildIDData.dispatcher.pause() || message.channel.send(pEmbed);
 
    }
 
}

module.exports.config = {
    name: "pause",
    aliases: ["pa", "pauza"]
}