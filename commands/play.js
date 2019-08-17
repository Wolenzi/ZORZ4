const Discord = require("discord.js");
const colours = require("../colours.json");
const ytdl = require("ytdl-core");

module.exports.run = async (bot, message, args, ops) => {
    
    if (!message.member.voiceChannel) {

        let pEmbed = new Discord.RichEmbed()
            .setDescription("⛔ **Połącz się z kanałem głosowym.**")
            .setColor(colours.red)

        return message.channel.send(pEmbed);
    }

    // if (message.guild.me.voiceChannel) return message.channel.send("⛔ **Przepraszamy, bot jest już połączony z kanałem głosowym.**");
 
    if (!args[0]) {
        
        let pEmbed = new Discord.RichEmbed()
            .setDescription("⛔ **Przepraszamy, podaj adres URL.**")
            .setColor(colours.red)

        return message.channel.send(pEmbed);
    }
 
    var validate = await ytdl.validateURL(args[0]);
 
    if (!validate) {
                
        let pEmbed = new Discord.RichEmbed()
            .setDescription("⛔ **Przepraszamy, wpisz poprawny adres URL.**")
            .setColor(colours.red)

        return message.channel.send(pEmbed);
    }
 
    var info = await ytdl.getInfo(args[0]);
 
    var data = ops.active.get(message.guild.id) || {};
 
    if (!data.connection) data.connection = await message.member.voiceChannel.join();
    if (!data.queue) data.queue = [];
    data.guildID = message.guild.id;
 
    data.queue.push({
        songTitle: info.title,
        requester: message.author.tag,
        url: args[0],
        announceChannel: message.channel.id
    });
 
    if (!data.dispatcher) {
        Play(bot, ops, data);
    } else {
        
        let pEmbed = new Discord.RichEmbed()
            .setTitle(`✅ **Dodano do kolejki: ${info.title}**`)
            .setDescription(`**Dodał:** ${message.author.tag}`)
            .setColor(colours.green)
            
        message.channel.send(pEmbed);
 
    }
 
    ops.active.set(message.guild.id, data);
 
}
 
async function Play(bot, ops, data) {

    let pEmbed = new Discord.RichEmbed()
        .setTitle(`▶ **${data.queue[0].songTitle}**`)
        .addField("**Dodany przez:**", `${data.queue[0].requester}`)
        .setColor(colours.blue)
 
    bot.channels.get(data.queue[0].announceChannel).send(pEmbed);
 
    var options = { seek: 2, volume: 1, bitrate: 128000 };
 
    data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: "audioonly" }), options);

    data.dispatcher.guildID = data.guildID;
 
    data.dispatcher.once('end', function () {
 
        Finish(bot, ops, this);
 
    });
 
}
 
function Finish(bot, ops, dispatcher) {
 
    var fetchedData = ops.active.get(dispatcher.guildID);
 
    fetchedData.queue.shift();
 
    if (fetchedData.queue.length > 0) {
 
        ops.active.set(dispatcher.guildID, fetchedData);
 
        Play(bot, ops, fetchedData);
 
    } else {
 
        ops.active.delete(dispatcher.guildID);
 
        //var voiceChannel = bot.guilds.get(dispatcher.guildID).me.voiceChannel;
 
        //if (voiceChannel) voiceChannel.leave();
 
    }
 
}
 
module.exports.config = {
    name: "play",
    aliases: ["pl", "graj"]
}
