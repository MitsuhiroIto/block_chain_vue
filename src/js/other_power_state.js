const OtherPowerState = {

  init: function () {
  },
  get_other_power_state: function () {
    return new Promise((resolve, reject) => {
      var users = [
        {
          address: '0x8645D2104a60027AF536298c222377b29aff07aF',
          power: Math.floor(Math.random() * 10 + 100),
          cost: Math.random().toFixed(1) * 0.1 + 1,
          switch_para: 1
        },
        {
          address: '0x1591d6D4622C09AAa967CaDCc71F6C325ae27344',
          power: Math.floor(Math.random() * 10 + 100),
          cost: Math.random().toFixed(1) * 0.1 + 1,
          switch_para: 2
        },
        {
          address: '0x35b1922c82114CBeC8443d182290E3Aefa37a232',
          power: Math.floor(Math.random() * 10 + 100),
          cost: Math.random().toFixed(1) * 0.1 + 1,
          switch_para: 3
        },
        {
          address: '0x4f950274eF24CF2758FB9cDf398A833a2d86aFBc',
          power: Math.floor(Math.random() * 10 + 100),
          cost: Math.random().toFixed(1) * 0.1 + 1,
          switch_para: 4
        }
      ]
      resolve(users)
    })
  }
}

export default OtherPowerState
