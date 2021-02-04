const { MessageEmbed } = require('discord.js')
const formatDistanceToNow = require('date-fns/formatDistanceToNow')
const resolveUser = require('../../utils/resolveUser')

module.exports = (msg, args) => {
    let member = resolveUser(msg, args.join(' '))
    if (args.length === 0) ({ member } = msg)
    if (!member) throw new Error('This user can\'t be found.')

    const status = {
        online: `User is online!`,
        idle: `User is idle, probably woodworking?`,
        offline: `User is offline, probably sleeping?`,
        dnd: `User doesn't want to be disturbed right now.`,
    }
    const game = member.presence.game
        ? member.presence.game.name
        : 'Not playing a game'
    const createdAt = formatDistanceToNow(member.user.createdAt, {
        addSuffix: true,
    })
    const joinedAt = formatDistanceToNow(member.joinedAt, { addSuffix: true })

    let roles = 'This user has no special roles'
    let size = 0
    if (member.roles.cache.size !== 1) {
    // We don't use the @everyone role
        roles = member.roles.cache.filter(
            role => role.id !== '797312546708520990')
            .map(role => role.name)
            .sort()
            .join(", ") || 'none'
        size = member.roles.cache.size - 1
    }

    const embed = new MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setThumbnail(member.user.displayAvatarURL())
        .setTitle(`Information about ${member.displayName}`)
        .setDescription(status[member.presence.status])
        .addField('Username', member.user.username, true)
        .addField(`Playing...`, game, true)
        .addField('Account created', createdAt, true)
        .addField('Joined the server', joinedAt, true)
        .addField('ID', member.id, true)
        .addField(
            'Bot :robot:',
            member.user.bot ? 'Bleep bloop, I am a bot' : 'This person isn\'t a bot',
            true,
        )
        .addField(`Roles [${size}]`, `\`${roles}\``)
    msg.channel.send(embed)
};