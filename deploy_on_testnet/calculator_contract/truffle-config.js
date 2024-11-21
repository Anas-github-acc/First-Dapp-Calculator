require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = process.env.MNEMONIC;
const infuraProjectId = process.env.INFURA_API_KEY;;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!

  compilers:{
    solc:{
      version: "^0.8.0"
    }
  },
  
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/${infuraProjectId}`),
      network_id: 11155111,       // sepolia's network id
      chain_id: 11155111,         // sepolia's chain id
      gas: 5500000,        // Gas limit used for deploys.
      confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets)
    },  
    develop: {
      port: 8545
    }
  }
};
