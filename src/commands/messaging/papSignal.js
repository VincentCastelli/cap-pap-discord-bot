const CronJob = require('cron').CronJob
const { papSignalMsging } = require('../../messages')

module.exports = client => {
    const dailyPapSignal = new CronJob('00 45 18 * * *', () => {
        const channel = client.channels.cache.get('805963573029109800')
        const keys = Object.keys(papSignalMsging)
        const index = Math.floor(Math.random() * keys.length)
        channel.send(`@here ${papSignalMsging[keys[index]].message}`)
    }, null, true, 'America/Los_Angeles')
    dailyPapSignal.start()
}
