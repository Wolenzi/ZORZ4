const Discord = require("discord.js"),
    arraySort = require('array-sort'),
    table = require('table'),
    send = require('quick.hook');

module.exports.run = async (bot, message, args, tools) => {
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('Przepraszam, nie masz uprawnień do użycia tej komendy.');
    })

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = [['User', 'Users']];
    invites.forEach(function(invite) {
        possibleInvites.push([invite.inviter.username, invite.uses]);
    })

    const embed = new Discord.MessageEmbed()
        .setColor(fffb00)
        .addField('TOP', `\`\`\`${table.table(possibleInvites)}\`\`\``);
    send(message.channel, embed, {
        name: 'Serwer Invites'
    })   

}

module.exports.config = {
    name: "invites",
    aliases: ["inv", "zapr"]
}