const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

module.exports = {
    name: "monthly",
    category: "Work",
    description: "Miesięczna nagroda",
    usage: "<id | wzmianka>",
    run: async (client, message, args) => {

        let timeout = 2592000000
        let amount = 3000

        let monthly = await db.fetch(`monthly_${message.author.id}`);

        if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
            let time = ms(timeout - (Date.now() - monthly));

            message.channel.send(`Już odebrałeś swoją miesięczną nagrodę, możesz wrócić i ją odebrać za **${time.days}d ${time.hours}g ${time.minutes}m ${time.seconds}s**`)
        } else {
            let embed = new Discord.RichEmbed()
            .setAuthor(`Miesięczna`, message.author.displayAvatarURL)
            .setColor("GREEN")
            .setDescription(`**Miesięczna Nagroda**`)
            .addField(`Zebrane`, amount)

            message.channel.send(embed)
            db.add(`Łybcie_${message.author.id}`, amount)
            db.set(`monthly_${message.author.id}`, Date.now())
        }

    }
}