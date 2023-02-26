const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "script",
    alias: ["repo","sc","sourcecode"],
    desc: "Say hello to bot.",
    react: "🍁",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        let picURL = fs.readFileSync('./Page/BG.jpg')
        let repoInfo = await axios.get('')
        let repo = repoInfo.data
        let txt = `      🧣 *${botName}'s Script* 🧣\n\n*🎀 Just a simple easy project and if you have problem then talk to mods by typing .owner*`
        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}
