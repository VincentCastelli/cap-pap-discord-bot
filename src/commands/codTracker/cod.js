require("dotenv").config();
const { MessageEmbed } = require("discord.js");
const CodAPI = require("call-of-duty-api")({ platform: "xbl" });
const playerTags = require("./battleTags");

const renderLeaderData = async (playerTags) =>
  await Promise.all(
    playerTags.map(async (player) => {
      let playerData = await CodAPI.MWBattleData(player, "xbl");
      playerData.br.id = `${player}`;
      return playerData.br;
    })
  );

const renderPlayerFields = (cpapGheymingData) => {
  return playerTags.map((player, idx) => ({
    name: `${idx + 1}: ${player}`,
    value: `WINS:  ${
      cpapGheymingData.find((data) => data.id === player).wins
    } | K/D:  ${
      Math.round(
        (cpapGheymingData.find((data) => data.id === player).kdRatio +
          Number.EPSILON) *
          100
      ) / 100
    } | REVIVES:  ${
      cpapGheymingData.find((data) => data.id === player).revives
    } | GAMES:  ${
      cpapGheymingData.find((data) => data.id === player).gamesPlayed
    }`,
  }));
};

module.exports = async (msg, args) => {
  const cpapGheymingData = await renderLeaderData(playerTags);
  const embed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle("CPaP Gheyming Wall of Honor")
    .setDescription("The finest soldiers CPaP Gheyming has to offer ")
    .addFields(renderPlayerFields(cpapGheymingData))
    .setFooter("Updated")
    .setTimestamp();
  msg.channel.send(embed);
};
