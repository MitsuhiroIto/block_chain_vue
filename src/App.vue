<template>
  <div id="app">
    <PowerState v-bind:PowerState_data="PowerState_data" v-on:getPowerState="getPowerState"/>
    <BlockChain v-bind:BlockChain_data="BlockChain_data" v-on:getAddressBalance="getAddressBalance"/>
    <OtherPowerState v-bind:OtherPowerState_data="OtherPowerState_data" v-on:getSelected="getSelected" v-on:getOtherPowerState="getOtherPowerState"/>
    <Transaction v-bind:Transaction_data="Transaction_data"/>
  </div>
</template>

<script>
import PowerState from './components/PowerState.vue'
import BlockChain from './components/BlockChain.vue'
import OtherPowerState from './components/OtherPowerState.vue'
import Transaction from './components/Transaction.vue'

export default {
  name: 'app',
  components: {
    PowerState,
    BlockChain,
    OtherPowerState,
    Transaction
  },
  data: function () {
    return {
      PowerState_data: {
        power: {},
        battery: {}
      },
      BlockChain_data: {
        wallet_address: {},
        wallet_balance: {}
      },
      OtherPowerState_data: {
        users: {}
      },
      Transaction_data: {
        selected: {},
        power: {}
      }
    }
  },
  methods: {
    getSelected (item) {
      this.Transaction_data.selected = item
    },
    getOtherPowerState (item) {
      this.OtherPowerState_data.users = item
    },
    getPowerState (item) {
      this.PowerState_data.power = item[0]
      this.Transaction_data.power = item[0]
      this.PowerState_data.battery = item[1]
    },
    getAddressBalance (item) {
      this.BlockChain_data.wallet_address = item[0]
      this.BlockChain_data.wallet_balance = item[1]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
