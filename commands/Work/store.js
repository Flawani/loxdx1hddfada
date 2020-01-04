const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {
    name: "store",
    category: "Work",
    description: "kup range",
    usage: "<id | wzmianka>",
    run: async (client, message, args) => {

       let embed = new Discord.RichEmbed()
       .setTitle(`${client.user.tag} Sklep!`)
       .setDescription('**Użycie _buy <rola> aby kupić!**')
       .addField(`Piracka-Łyba`, '`10000$`\nDaje ci **Piracką Łyba** role!')
       .addField(`VR-ŁYBA`, '`15000$`\nDaje ci ** VR ŁYBA ** role!')
       .addField(`Król-Łyba`, '`17500$`\nDaje ci ** Król Łyba ** role!')
       .addField(`BIG-ŁYBA`, '`25000$`\nDaje ci **BIG ŁYBA** role!')
       .addField(`Łyba-Boża`, '`30000$`\nDaje ci rolę ** Łyba Boża ** role!')
       .addField(`Łyba-Boża-lvl-2`, '`35000$`\nDaje ci ** Łyba Boża 2 lvl ** role!')
       .addField(`Łyba-Boża-lvl-3`, '`40000$`\nDaje ci **Łyba Boża lvl 3** role!')
       .setColor("RANDOM")

       message.channel.send(embed)
    }
}