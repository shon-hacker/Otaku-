const {Attachment} = require('discord.js')
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

        if(!args[0]) return message.channel.sendMessage("Donnez un utilisateur valide")
          message.channel.startTyping();
  message.channel.send({files: (`https://lemmmy.pw/osusig/sig.php?colour=pink&uname=${args}&pp=2&countryrank&flagstroke&darktriangles&onlineindicator=undefined&xpbar&xpbarhex`, `banner.png`)})
            message.channel.stopTyping();
       
    }
    
    exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'osu',
  description: 'Répond a votre question',
  usage: '8ball [question]'
};
