const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku, mk } = require("../../Database/dataschema.js");
const fs = require("fs");
const config = require('../../config');
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);

module.exports = { 

    name: "add",  
    desc: "add gold.", 
    alias: ["creatorsend"],
    category: "Economy",  
    react: "💸", 
    start: async ( 
        Miku, 
      m, 
      { text, prefix, isCreator} 
    ) => {
        let value = text.trim().split(" ");
    if (value[0] === "") return m.reply(`Use ${prefix}add 100 @user`);
    if (!text && !m.quoted) {
      return Miku.sendMessage(
        m.from,
        { text: `Please tag any user ${pushName} senpai 🤦‍♂️ !` },
        { quoted: m }
      );
    } else if (m.quoted) {
      var mentionedUser = m.quoted.sender;
    } else {
      var mentionedUser = mentionByTag[0];
    }

    let user = (await mentionedUser) || m.msg.contextInfo.participant;
    //let user = mentionByTag[0];
    
    const cara = "cara"
        const user1 = m.sender
        const user2 = user
        const word = value[0];
		const code = value[1];
        let d = parseInt(word)
		if (!d)return m.reply('check your text plz u r using the command in a wrong way👀');
        const balance = await eco.balance(user1, cara);
        const deduct = await eco.deduct(user1, cara, value[0]);
        const give = await eco.give(user2, cara, value[0]);
        let buttons = [
            {
              buttonId: `${prefix}wallet`,
              buttonText: { displayText: "Wallet 💳" },
              type: 1,
            },
            {
                buttonId: `${prefix}Bank`,
              buttonText: { displayText: "Bank 🏦" },
              type: 1,

            },
          ];
          let buttonMessage = {
            image: fs.readFileSync("./Assets/Img/card.png"), 
            caption: `*📠 Transaction successful of ${word} 💷*`,
            footer: `*${botName}*`,
            buttons: buttons,
            type: 4
          };
        
          await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
        }
    }
