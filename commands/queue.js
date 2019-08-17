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
 
    var queue = guildIDData.queue;
    var nowPlaying = queue[0];
 
    var response = `▶ ${nowPlaying.songTitle} || **Dodał** ${nowPlaying.requester}\n\nQueue: \n`;

    for (var i = 0; i < queue.length; i++) {
 
        response += `${i}, ${queue[i].songTitle} **Dodał** ${queue[i].requester}\n`;
 
    }
   
    message.channel.send(response);
 
}
 
module.exports.config = {
    name: "queue",
    aliases: ["qu", "kolejka"]
}