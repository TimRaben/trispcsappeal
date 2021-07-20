const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'reactionrole',
    run : async(client, message) => {
        const embed = new MessageEmbed()
            .setTitle('Trispcs - Verificatie')
            .setDescription('Klik op de ✅ onder dit bericht om je te verifiëren!\nZodra je op de Emoji onder dit bericht ga je automatisch akkoord met de Discord TOS')
            .setColor('GREEN')

        const msg = await message.channel.send(embed)
        await msg.react('✅')
    }
}