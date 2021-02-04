const stripIndent = require('../../utils/stripIndent')
module.exports = async  msg => {
    const msgReply = await msg.channel.send('Pong!')
    msgReply.edit(
        stripIndent(
            `Pong!
            Time taken: ${msgReply.createdTimestamp - msg.createdTimestamp}ms :timer:`,
        ),
    )
}
