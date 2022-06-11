// https://eth-rinkeby.alchemyapi.io/v2/HBeoEY71V2l7DZPpNIcgXKL6SsWGEkOU

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/HBeoEY71V2l7DZPpNIcgXKL6SsWGEkOU",
      accounts: [
        "e5078d6b4e6762ee464c77f7096bb668463d597ac32d79dc40eab7b67ee58098",
      ],
    },
  },
};