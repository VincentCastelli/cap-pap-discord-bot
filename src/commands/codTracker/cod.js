require("dotenv").config();
const { MessageEmbed } = require("discord.js");
const CodAPI = require("call-of-duty-api")({ platform: "xbl" });

const renderLeaderData = async (playerTags) =>
  await Promise.all(
    playerTags.map(async (player) => {
      let playerData = await CodAPI.MWBattleData(player, "xbl");
      playerData.br.id = `${player}`;
      return playerData.br;
    })
  );

module.exports = async (msg, args) => {
  const playerTags = [
    "Big Bad Leroy",
    "Vinsanity25",
    "sk0witit",
    "I cAuSe Pain I",
    "TheRealTone21",
    "Stizmatic",
    "ChuBByMaLanGa22",
  ];
  const cpapGheyming = await renderLeaderData(playerTags);

  const embed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle("CPaP Gheyming Wall of Honor")
    .setDescription("The finest soldiers CPaP Gheyming has to offer ")
    .addFields(
      {
        name: `1: ${playerTags[0]}`,
        value: `K/D: ${
          Math.round(
            (cpapGheyming.find((player) => player.id === playerTags[0])
              .kdRatio +
              Number.EPSILON) *
              100
          ) / 100
        }`,
      },
      {
        name: `2: ${playerTags[1]}`,
        value: `K/D: ${
          Math.round(
            (cpapGheyming.find((player) => player.id === playerTags[1])
              .kdRatio +
              Number.EPSILON) *
              100
          ) / 100
        }`,
      },
      {
        name: `3: ${playerTags[2]}`,
        value: `K/D: ${
          Math.round(
            (cpapGheyming.find((player) => player.id === playerTags[2])
              .kdRatio +
              Number.EPSILON) *
              100
          ) / 100
        }`,
      },
      {
        name: `4: ${playerTags[3]}`,
        value: `K/D: ${
          Math.round(
            (cpapGheyming.find((player) => player.id === playerTags[3])
              .kdRatio +
              Number.EPSILON) *
              100
          ) / 100
        }`,
      },
      {
        name: `5: ${playerTags[4]}`,
        value: `K/D: ${
          Math.round(
            (cpapGheyming.find((player) => player.id === playerTags[4])
              .kdRatio +
              Number.EPSILON) *
              100
          ) / 100
        }`,
      },
      {
        name: `6: ${playerTags[5]}`,
        value: `K/D: ${
          Math.round(
            (cpapGheyming.find((player) => player.id === playerTags[5])
              .kdRatio +
              Number.EPSILON) *
              100
          ) / 100
        }`,
      },
      {
        name: `7: ${playerTags[6]}`,
        value: `K/D: ${
          Math.round(
            (cpapGheyming.find((player) => player.id === playerTags[6])
              .kdRatio +
              Number.EPSILON) *
              100
          ) / 100
        }`,
      }
    )
    .setFooter("Updated")
    .setTimestamp();
  msg.channel.send(embed);
};
