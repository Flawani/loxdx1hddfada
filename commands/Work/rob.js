const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {
    name: "rob",
    category: "Work",
    description: "Rabowanie Łybci",
    usage: "<id | wzmianka>",
    run: async (client, message, args) => {

        let user = message.mentions.members.first()
        let targetuser = await db.fetch(`Łybcie_${user.id}`)
        let author = await db.fetch(`Łybcie_${message.author.id}`)

        if (author < 250) {
            return message.channel.send(':x: Potrzebujesz co najmniej 250 $, aby kogoś obrabować.')
        }

        if (targetuser < 0) {
            return message.channel.send(`:x: ${user.user.username} nie ma już Łybci`)
        }

        let random = Math.floor(Math.random() * 40) + 1;

        let embed = new Discord.RichEmbed()
        .setDescription(`${message.author} okradłeś ${user} i uciekłeś z ${random}!`)
        .setColor("GREEN")
        .setThumbnail()
        message.channel.send(embed)

        db.subtract(`Łybcie_${user.id}`, random)
        db.add(`Łybcie_${message.author.id}`, random)
    }
}