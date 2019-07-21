const Discord = require("discord.js");
const colours = require("../colours.json");
const discord = require("discord.js");
 
module.exports.run = async (bot, message, args, ops) => {
 
    var guildIDData = ops.active.get(message.guild.id);
 
    if (!guildIDData) {
        
        let pEmbed = new Discord.RichEmbed()
            .setTitle("💤 **W tej chwili nie ma muzyki.**")
            .setColor(colours.light_blue)

        return message.channel.send(pEmbed);
    }
 
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) {
        
        let pEmbed = new Discord.RichEmbed()
            .setTitle(" ⛔ **Niestety nie jesteś na tym samym kanale co bot.**")
            .setColor(colours.red)

        return message.channel.send(pEmbed);
    }
 
    var amountUsers = message.member.voiceChannel.members.size;
 
    var amountSkip = Math.ceil(amountUsers / 2);
 
    if (!guildIDData.queue[0].voteSkips) guildIDData.queue[0].voteSkips = [];
 
    if (guildIDData.queue[0].voteSkips.includes(message.member.id)) {
        
        let pEmbed = new Discord.RichEmbed()
            .setTitle(`✅ **Już pominięto.** ${guildIDData.queue[0].voteSkips.length}/${amountSkip}`)
            .setColor(colours.green)

        return message.channel.send(pEmbed);
    }
 
    guildIDData.queue[0].voteSkips.push(message.member.id);
 
    ops.active.set(message.guild.id, guildIDData);
 
    if (guildIDData.queue[0].voteSkips.length >= amountSkip) {
        
        let pEmbed = new Discord.RichEmbed()
            .setTitle("⏭ **W drodze do następnej piosenki**")
            .setColor(colours.light_blue)

        return message.channel.send(pEmbed) || guildIDData.dispatcher.emit("🔚 Koniec");
 
    }
 
    message.channel.send(`⏭ **Pominięto.** ${guildIDData.queue[0].voteSkips.length}/${amountSkip}`);
 
}
 
module.exports.config = {
    name: "skip",
    aliases: ["si", "pomiń"]
}