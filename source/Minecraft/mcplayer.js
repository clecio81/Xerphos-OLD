const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (reason.length < 1){
    return message.channel.send({embed: {
        description: `<:314240199406387201:490756225575682049> ${message.author}, Diga o nick da **\`Skin\`**`,
        color: 0x36393e
    }}).then(msg => msg.delete(5000));
}
  let embed = new Discord.RichEmbed()


.setImage(`https://mc-heads.net/player/${args[0]}`)
.setFooter(`Pedido por: ${message.author.tag} `,message.author.avatarURL )
 .setTimestamp()
 .setDescription(`<a:minecraft:508786928481599490> | Nick: **${args[0]}**`)
 .setColor(0x0000)
  message.channel.send(embed)
}

