// this setting is for testrpc
// module.exports = {
//   networks: {
//     development: {
//       host: "localhost",
//       port: 8545,
//       gas: 500000,
//       network_id: "*" // Match any network id
//     }
//   }
// };

// this setting is for Gnache
module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 4710000      
    }
  }
}