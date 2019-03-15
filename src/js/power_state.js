const PowerStateJs = {

  init: function () {
  },
  get_power_state: function () {
    return new Promise((resolve, reject) => {
      var power = Math.floor(Math.random() * 10 + 100)
      var battery = Math.floor(Math.random() * 15 + 150)
      resolve([power, battery])
    })
  }
}

export default PowerStateJs
