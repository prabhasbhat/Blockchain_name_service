require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks:{
    mumbai:{
      url:"https://purple-indulgent-morning.matic-testnet.quiknode.pro/72bb8e692cc790acdf02424e05d33eae8fbbbdd8/",
      accounts:["540de2394f72d4e99defbdb9bc81d88fc68e7812735f713f8a5d2f5acf98a2d2"]
    }
  }
};
