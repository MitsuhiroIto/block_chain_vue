var Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))

var _Contract = require('@contracts/Contract.json')
var contract = require('truffle-contract')
var Contract = contract(_Contract)

const BlockChain = {

  init: function () {
    Contract.setProvider(web3.currentProvider)

    if (typeof Contract.currentProvider.sendAsync !== 'function') {
      Contract.currentProvider.sendAsync = function () {
        return Contract.currentProvider.send.apply(
          Contract.currentProvider, arguments
        )
      }
    }
  },
  get_address_balance: function () {
    return new Promise((resolve, reject) => {
      var Web3 = require('web3')
      var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))

      web3.eth.getAccounts((err, address) => {
        if (err) {
          console.log(err)
        } else {
          web3.eth.getBalance(address[0], (err, balance) => {
            if (err) {
              console.log(err)
            } else {
              resolve([address[0], web3.fromWei(String(balance), 'ether')])
            }
          })
        }
      })
    })
  }
}

export default BlockChain
