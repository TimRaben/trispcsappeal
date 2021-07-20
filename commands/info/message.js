const { MessageEmbed } = require(`discord.js`)

module.exports ={
    name: "embed",
    run : async(client, message) => {
        const embed = new Discord.RichEmbed()
.setTitle("Trispcs Appeal - Informatie")
.setAuthor("Trispcs", "https://images-ext-1.discordapp.net/external/gNeYUX6tot0dDNTiqq8H5UnafHbeKoi4Npsn2UcJh5I/https/cdn.mee6.xyz/guild-images/862632855585423411/164cee6d0aa8e72db091b09e74223cb13e68e8703735aa044c05a3bf97a46b0e.jpeg?width=671&height=671","https://yagami.xyz")
.setColor("#5900ff")
.setDescription("Hey! Je kan Appealen door middel van !appeal, dan stuurt onze BOT jou in DM een vragenlijst die jij per stap moet invullen! zodra jij dit hebt gedaan en er komt GEEN volgende stap meer dan is jou Appeal succesvol ingediend! Wij zullen hem dan binnen 3 dagen behandelen en dan krijgt u persoonlijk het antwoord gestuurd! Krijg je geen DM wanneer je de commando uitvoert? Ga dan naar Instellingen > Privacy & Veiligheid > Privé Berichten van Serverleden, zet dit aan! en typ dan het Commando opnieuw! Werkt dit niet contacteer een Stafflid in PM! **Succes!**")
.setFooter("Trispcs Community, https://images-ext-1.discordapp.net/external/gNeYUX6tot0dDNTiqq8H5UnafHbeKoi4Npsn2UcJh5I/https/cdn.mee6.xyz/guild-images/862632855585423411/164cee6d0aa8e72db091b09e74223cb13e68e8703735aa044c05a3bf97a46b0e.jpeg?width=671&height=671")
.setImage("http://i.imgur.com/yVpymuV.png")
.setThumbnail("https://images-ext-1.discordapp.net/external/gNeYUX6tot0dDNTiqq8H5UnafHbeKoi4Npsn2UcJh5I/https/cdn.mee6.xyz/guild-images/862632855585423411/164cee6d0aa8e72db091b09e74223cb13e68e8703735aa044c05a3bf97a46b0e.jpeg?width=671&height=671")
        message.channel.send({embed})
    }



}
