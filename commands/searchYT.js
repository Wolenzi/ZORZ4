const Discord = require("discord.js");
const colours = require("../colours.json");
const search = require('yt-search');
 
module.exports.run = async (bot, message, args, ops) => {

    search(args.join(' '), function (err, res) {

        if (err) {
            
            let pEmbed = new Discord.RichEmbed()
                .setTitle("**⛔ Coś poszło nie tak**")
                .setColor(colours.red)

            return message.channel.send(pEmbed);
        }

        var videos = res.videos.slice(0, 10);

        var response = '';

        for (var i in videos) {

            response += `**[${parseInt(i) + 1}]:** ${videos[i].title} \r\n`;
 
        }
 
        response += `**✅ Wybierz liczbę od 1-${videos.length}.**`;

        message.channel.send(response);

        const filter = music => !isNaN(music.content) && music.content < videos.length + 1 && music.content > 0;

        const collection = message.channel.createMessageCollector(filter);

        collection.videos = videos;

        collection.once('collect', function (music) {
 
            var commandFile = require('./play.js');

            commandFile.run(bot, message, [this.videos[parseInt(music.content) - 1].url], ops);
 
        });
 
    });
 
}

module.exports.config = {
    name: "searchyt",
    aliases: ["sy", "szukajyt"]
}