const { MessageEmbed } = require(`discord.js`)

module.exports ={
    name: "embed",
    run : async(client, message) => {
        const embed = new MessageEmbed()
        .setTitle(`Trispcs Ban Appeals - Informatie`)
        .setDescription(`Hey! Je kan Appealen door middel van !appeal, dan stuurt onze BOT jou in DM een vragenlijst die jij per stap moet invullen! zodra jij dit hebt gedaan en er komt GEEN volgende stap meer dan is jou Appeal succesvol ingediend! Wij zullen hem dan binnen 3 dagen behandelen en dan krijgt u persoonlijk het antwoord gestuurd! Krijg je geen DM wanneer je de commando uitvoert? Ga dan naar **Instellingen > Privacy & Veiligheid > Privé Berichten van Serverleden, zet dit aan! en typ dan het Commando opnieuw! Werkt dit niet contacteer een Stafflid in PM!`)
        .setColor(`#33ace8`)
        .setThumbnail(`https://media.discordapp.net/attachments/838112437239939133/866633618083807252/trispcs.jpg?width=671&height=671`)

        // message.channel.send()
        // message.reply()

        message.channel.send(embed)
    }



}