<template>
  <div class="set_center" >
    <md-card md-with-hover> 
      <md-app>
        <md-app-toolbar class="md-primary">
          <md-card-header>            
            <span class="md-title title_font">電力取引(自家発電が基準値以下の場合、買取先候補から電力を購入する)</span>      
          </md-card-header>
        </md-app-toolbar>
      </md-app>     
      <md-card-content>
        <div class="md-layout-item md-layout md-gutter set_margin">
          <div class="md-layout-item content_font set_margin" style="text-align:left;">取引状況</div>
          <div class="md-layout-item content_font set_margin" style="text-align:right;" v-if="state !=0 & !value">{{Transaction_data.selected.address}}から購入中((switch: {{ state }}))</div>
          <div class="md-layout-item content_font set_margin" style="text-align:right;" v-if="state ==0 & !value">自家発電中(switch: {{ state }})</div>
        </div>
        <div class="md-layout-item md-layout md-gutter set_margin">
          <div class="md-layout-item content_font set_margin" style="text-align:left;">購入先</div>
          <div class="md-layout-item content_font set_margin" style="text-align:right;">{{Transaction_data.selected.address}} {{Transaction_data.selected.cost}} ether</div>
        </div>
        <div class="md-layout-item md-layout md-gutter set_margin">
          <div class="md-layout-item content_font" style="text-align:left;">基準電力</div>
          <div class="md-layout-item content_font">
            <md-field>
              <label>基準電力を入力して下さい(単位 W)</label>
              <md-input v-model="power_criteria"></md-input>
            </md-field>
          </div>
        </div>
      </md-card-content>
      <md-card-actions v-if="value">
        <md-dialog-confirm
          :md-active.sync="active"
          md-title="本当に電力取引を開始しますか?"
          md-confirm-text="開始"
          md-cancel-text="中止"
          @md-cancel="onCancel"
          @md-confirm="onConfirm" />
        <md-button class="md-primary md-raised" @click="active = true">開始</md-button>
      </md-card-actions>
      <md-card-actions v-if="!value">
        <md-dialog-confirm
          :md-active.sync="active"
          md-title="本当に電力取引を中止しますか?"
          md-confirm-text="中止"
          md-cancel-text="取引を続行"
          @md-cancel="onConfirm"
          @md-confirm="onCancel" />
        <md-button class="md-primary md-raised md-accent" @click="active = true">中止</md-button>
      </md-card-actions>
    </md-card>
    <div>
 </div>
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
import TransactionJs from '@/js/transaction'
export default {
  props: ['Transaction_data'],
  name: 'Transaction',
  data: () => ({
    power_criteria: 100,
    active: false,
    value: true,
    state: 0
  }),
  beforeCreate: function () {
    TransactionJs.init()
  },
  watch: {
    value: function () {
      if (this.value) {
        console.log('終了')
      } else {
        console.log('スタート')
        TransactionJs.transact(this.Transaction_data.selected.address, this.Transaction_data.selected.cost, this.Transaction_data.selected.switch_para, this.power_criteria, this.Transaction_data.power).then((response) => {
          this.state = response
        })
      }
    }
  },
  mounted: function () {
    this.transact()
  },
  methods: {
    onConfirm () {
      this.value = false
    },
    onCancel () {
      this.value = true
    },
    transact: function () {
      this.intervalid = setInterval(function () {
        if (!this.value) {
          TransactionJs.transact(this.Transaction_data.selected.address, this.Transaction_data.selected.cost, this.Transaction_data.selected.switch_para, this.power_criteria, this.Transaction_data.power).then((response) => {
            this.state = response
          })
        }
      }.bind(this), 3000)
    }
  }
}
</script>
