const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

module.exports = {
    name: "work",
    category: "Work",
    description: "Pracowanko",
    usage: "<id | wzmianka>",
    run: async (client, message, args) => {

        //if (args[0] == 'prostitute') {
        /*
            let amount = Math.floor(Math.random() * 50) + 1; // 1-500 random number. whatever you'd like
    
            let embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
            .setDescription(`${message.author}, pracowałeś jako prostytutka i dostałeś zapłatę ${amount}$ za seks! :RE`)
            .setColor("RANDOM")
            
        
            message.channel.send(embed)
            db.add(`Łybcie_${message.author.id}`, amount)
        } else if(args[0] == 'constructor') {
            let amount = Math.floor(Math.random() * 50) + 1; // 1-500 random number. whatever you'd like
    
            let embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
            .setDescription(`${message.author}, pracowałeś jako konstruktor i dostałeś zapłatę ${amount}$ za odbudowę budynku imperium.`)
            .setColor("RANDOM")
            
        
            message.channel.send(embed)
            db.add(`Łybcie_${message.author.id}`, amount)
        } else if(args[0] == 'programmer') {
            let amount = Math.floor(Math.random() * 50) + 1; // 1-500 random number. change to whatever you'd like
    
            let embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
            .setDescription(`${message.author}, pracowałeś jako programista epicgames, naprawiłeś ich grę i zarobiłeś ${amount}$!`)
            .setColor("RANDOM")
            
        
            message.channel.send(embed)
            db.add(`Łybcie_${message.author.id}`, amount)
        }
        */


        let amount = Math.floor(Math.random() * 100) + 25;
        
        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}, opłaciło się!`, message.author.displayAvatarURL)
        .setDescription(`${message.author},pracowałeś i zarabiałeś ${amount}$ !`)
        .setColor("RANDOM")

        message.channel.send(embed)
        db.add(`Łybcie_${message.author.id}`, amount)
        
    }
}