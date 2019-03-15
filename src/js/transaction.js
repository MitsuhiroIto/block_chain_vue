var Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))

var _Contract = require('@contracts/Contract.json')
var contract = require('truffle-contract')
var Contract = contract(_Contract)

const Transaction = {

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
  transact: function (address, cost, switchPara, criteria, power) {
    return new Promise((resolve, reject) => {
      var Web3 = require('web3')
      var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))

      web3.eth.getAccounts((err, accounts) => {
        if (err) {
          console.log(err)
        } else {
          Contract.deployed()
          .then((Instance) => {
            if (power < criteria) {
              Instance.set(power, address, switchPara, {from: accounts[0], value: web3.toWei(String(cost), 'ether')})
              resolve(switchPara)
            } else {
              resolve(0)
            }
          })
          .catch((err) => {
            console.log(err)
          })
        }
      })
    })
  }
}

export default Transaction
