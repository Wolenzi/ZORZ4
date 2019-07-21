const Discord = require("discord.js");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args) => {
 
    if (!message.member.voiceChannel) {
        
        let pEmbed = new Discord.RichEmbed()
            .setTitle("⛔ **Połącz się z kanałem głosowym.**")
            .setColor(colours.red)

        return message.channel.send(pEmbed);
    }
 
    if (!message.guild.me.voiceChannel) {
        
        let pEmbed = new Discord.RichEmbed()
            .setTitle("⛔ **Niestety bot nie jest podłączony do kanału głosowego.**")
            .setColor(colours.red)

        return message.channel.send(pEmbed);
    }
 
    if (message.guild.me.voiceChannelID != message.member.voiceChannelID) {

        let pEmbed = new Discord.RichEmbed()
            .setTitle("⛔ **Niestety nie jesteś połączony z tym samym kanałem.**")
            .setColor(colours.red)

        return message.channel.send(pEmbed);
    }

    {
        let pEmbed = new Discord.RichEmbed()
            .setDescription(`📤 **Opuścił kanał głosowy przez** ${message.author}`)
            .setColor(colours.red)
            
        message.guild.me.voiceChannel.leave() || message.channel.send(pEmbed);
 
    }

}
 
module.exports.config = {
    name: "leave",
    aliases: ["si", "wyjdź"]
}