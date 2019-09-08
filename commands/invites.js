const Discord = require("discord.js");
const colours = require("../colours.json");
    arraySort = require('array-sort'),
    table = require('table'),
    send = require('quick.hook');

module.exports.run = async (bot, message, args, tools) => {
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('Przepraszam, nie masz uprawnień do użycia tej komendy.');
    })

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = [['User', 'Uses']];
    invites.forEach(function(invite) {
        possibleInvites.push([invite.inviter.username, invite.uses]);
    })

    let iembed = new Discord.RichEmbed()
    .setColor(colours.gold)
    .addField('TOP', `\`\`\`${table.table(possibleInvites)}\`\`\``);

    message.channel.send(iembed);

}

module.exports.config = {
    name: "invites",
    aliases: ["inv", "zapr"]
}