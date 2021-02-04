const { botMentionMsging } = require('../../messages')

module.exports = msg => {
    const msgContent = msg.content.split('>')[1].trim()

    if (['hello', 'what\'s up?', 'what up?', 'yo!', 'how are you?'].indexOf(msgContent) >= 0) {
        const keys = Object.keys(botMentionMsging.repliesNice)
        const index = Math.floor(Math.random() * keys.length)
        msg.reply(botMentionMsging.repliesNice[keys[index]].message)
    } else if (['what up stunad?', 'chill out', 'get lost'].indexOf(msgContent) >= 0) {
        const keys = Object.keys(botMentionMsging.repliesCheeky)
        const index = Math.floor(Math.random() * keys.length)
        msg.reply(botMentionMsging.repliesCheeky[keys[index]].message)
    } else {
        const keys = Object.keys(botMentionMsging.repliesNotFound)
        const index = Math.floor(Math.random() * keys.length)
        msg.reply(botMentionMsging.repliesNotFound[keys[index]].message)
    }
}
