<template>
  <div class="set_center" >
    <md-card md-with-hover> 
      <md-app>
        <md-app-toolbar class="md-primary">
          <md-card-header>            
            <span class="md-title title_font">電力状況</span>      
          </md-card-header>
        </md-app-toolbar>
      </md-app>     
      <md-card-content>
        <div class="md-layout-item md-layout md-gutter set_margin">
          <div class="md-layout-item content_font" style="text-align:left;">発電量</div>
          <div class="md-layout-item content_font" style="text-align:right;">{{ PowerState_data.power }} W</div>
        </div>
        <div class="md-layout-item md-layout md-gutter set_margin">
          <div class="md-layout-item content_font" style="text-align:left;">バッテリー残量</div>
          <div class="md-layout-item content_font" style="text-align:right;">{{ PowerState_data.battery }} Wh</div>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
  .set_margin{
    margin: 5px;
  }
  .title_font{
    font-size: 200%;  
  }
  .content_font{
    font-size: 150%
  }
  .set_center{
    text-align: center;
  }
  .md-card {
    width: 97%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    text-align: center;
  }
</style>

<script>
import PowerStateJs from '@/js/power_state'
export default {
  props: ['PowerState_data'],
  name: 'PowerState',
  data: function () {
    return {
      power: {},
      battery: {}
    }
  },
  watch: {
    power: function () {
      this.$emit('getPowerState', [this.power, this.battery])
    },
    battery: function () {
      this.$emit('getPowerState', [this.power, this.battery])
    }
  },
  created: function () {
    PowerStateJs.get_power_state().then((response) => {
      this.power = response[0]
      this.battery = response[1]
      this.$emit('getPowerState', [this.power, this.battery])
    })
  },
  mounted: function () {
    this.get_value()
  },
  methods: {
    get_value: function () {
      this.intervalid = setInterval(function () {
        PowerStateJs.get_power_state().then((response) => {
          this.power = response[0]
          this.battery = response[1]
        })
      }.bind(this), 3000)
    }
  }
}
</script>
