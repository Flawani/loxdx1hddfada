const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

module.exports = {
    name: "daily",
    category: "Work",
    description: "Dzienna nagroda",
    usage: "<id | wzmianka>",
    run: async (client, message, args) => {

        let timeout = 86400000
        let amount = 250

        let daily = await db.fetch(`dzienne_${message.author.id}`);

        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));

            message.channel.send(`Już odebrałeś swoją codzienną nagrodę, możesz wrócić i ją odebrać za **${time.hours}g ${time.minutes}m ${time.seconds}s**`)
        } else {
            let embed = new Discord.RichEmbed()
            .setAuthor(`Codziennie`, message.author.displayAvatarURL)
            .setColor("GREEN")
            .setDescription(`**Codzienna nagroda**`)
            .addField(`Zebrane`, amount)

            message.channel.send(embed)
            db.add(`Łybcie_${message.author.id}`, amount)
            db.set(`dzienne_${message.author.id}`, Date.now())
        }

    }
}