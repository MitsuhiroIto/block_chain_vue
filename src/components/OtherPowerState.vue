<template>
  <div class="set_center" >
    <md-card md-with-hover> 
      <md-app>
        <md-app-toolbar class="md-primary">
          <md-card-header>            
            <span class="md-title title_font">他の電力状況　(電力購入先を選択して下さい)</span>      
          </md-card-header>
        </md-app-toolbar>
      </md-app>     
        <md-card-content>
         <md-table v-model="OtherPowerState_data.users" md-sort="Address" md-sort-order="asc" @md-selected="onSelect">
            <md-table-row slot="md-table-row" slot-scope="{ item }" :class="getClass(item)" md-selectable="single">
              <md-table-cell md-label="Address" md-sort-by="address">{{ item.address }}</md-table-cell>
              <md-table-cell md-label="Switch" md-sort-by="switch_para">{{ item.switch_para }}</md-table-cell>
              <md-table-cell md-label="Power" md-sort-by="power">{{ item.power }}</md-table-cell>
              <md-table-cell md-label="Cost" md-sort-by="cost">{{ item.cost }}</md-table-cell>
            </md-table-row>
          </md-table>
        </md-card-content>
      <md-card-actions>
        <md-button class="md-primary md-raised" v-on:click="reload">更新</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
  .md-table + .md-table {
    margin-top: 16px
  }
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
import OtherPowerStateJs from '@/js/other_power_state'
export default {
  props: ['OtherPowerState_data'],
  name: 'OtherPowerState',
  data: function () {
    return {
      selected: ''
    }
  },
  created: function () {
    OtherPowerStateJs.get_other_power_state().then((response) => {
      this.$emit('getOtherPowerState', response)
    })
  },
  methods: {
    reload: function () {
      OtherPowerStateJs.get_other_power_state().then((response) => {
        this.$emit('getOtherPowerState', response)
      })
    },
    getClass: ({ address }) => ({
      'md-accent': address
    }),
    onSelect (item) {
      this.selected = item
      this.$emit('getSelected', this.selected)
    }
  }
}
</script>
