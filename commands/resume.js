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

    if (!guildIDData.dispatcher.paused) {
        let pEmbed = new Discord.RichEmbed()
            .setTitle("⛔ **Muzyka nie jest wstrzymana.**")
            .setColor(colours.red)

        return message.channel.send(pEmbed);
    }

    {
        let pEmbed = new Discord.RichEmbed()
            .setTitle(`✅ **Pomyślnie uruchomiony ${guildIDData.queue[0].songTitle}**`)
            .setColor(colours.green)
            
        guildIDData.dispatcher.resume() || message.channel.send(pEmbed);
 
    }
 
}

module.exports.config = {
    name: "resume",
    aliases: ["si", "uruchom"]
}