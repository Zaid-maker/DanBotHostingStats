module.exports = async (client, oldMember, newMember) => {
    // If user nickname changes
    if (oldMember.displayName != newMember.displayName) {
        let displayName = newMember.displayName.toLowerCase();

        if (displayName.match(/^[a-z0-9]/i) == null) {
            return newMember.setNickname("I love Dan <3");
        }

        if (["hitler", "jew", "discord.gg", "discordapp", "aids"].some((r) => displayName.includes(r))) {
            newMember.setNickname("Moderated Nickname");
        }

        // Make a new RichEmbed
        const embed = new Discord.MessageEmbed()
            .setTitle("User Nickname changed.")
            .setDescription(`User: ${oldMember} Nickname has changed.`)
            .addField("Old Nickname", oldMember.displayName, true)
            .addField("New Nickname", newMember.displayName, true)
            .setColor(0xff7700)
            .setTimestamp(new Date());

        client.channels.cache.get(config.DiscordBot.oLogs).send(embed);
    }
};
