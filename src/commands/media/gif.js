const axios = require("axios").default

module.exports = async (msg, args) => {
    let keywords = 'excited'
            
    if (args.length > 0) {
        keywords = args.join(" ")
    }

    const url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&limit=8&contentfilter=off`
    const response = await axios.get(url)
        .then(response => response.data)
        .catch(err => console.log(`Error accessing Tenor API...${err}`))
    const gifIndex = Math.floor(Math.random() * response.results.length)
    await msg.channel.send(response.results[gifIndex].url)
}
