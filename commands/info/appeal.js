const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "appeal",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const questions = [
            "**Wat is je Discord Naam + Tag - Voorbeeld: Trispcs#0001**",
            "**Wat is de reden waarvoor je bent verbannen?**",
            "**Was de verbanning terecht volgens jou?**",
            "**Wat is jou kant van het verhaal?**",
            "**Wat ga je in de toekomst anders doen om niet nog een keer verbannen te worden?**",
            "**Extra Toevoegingen?**",
        ];

        let collectCounter = 0;
        let endCounter = 0;

        const filter = (m) => m.author.id === message.author.id;

        const appStart = await message.author.send(questions[collectCounter++]);
        const channel = appStart.channel;

        const collector = channel.createMessageCollector(filter);

        collector.on("collect", () => {
            if (collectCounter < questions.length) {
                channel.send(questions[collectCounter++]);
            } else {
                collector.stop("fulFilled");
            }
        });

        const appsChannel = client.channels.cache.get('865929910404251708');
        collector.on("end", (collected, reason) => {
            if (reason === "fulFilled") {
                let index = 1;
                const mappedResponses = collected
                .map((msg) => {
                    return `${index++}) ${questions[endCounter++]}\n${msg.content}`;
                })
                .join("\n\n");

                appsChannel.send(
                    new MessageEmbed()
                        .setAuthor(
                            message.author.tag, 
                            message.author.displayAvatarURL({ dynamic: true})
                        )
                        .setTitle('Triscps - Ban Appeal')
                        .setDescription(mappedResponses)
                        .setColor('#ff6047')
                        .setTimestamp()
                );
            }
        });
    },
};

