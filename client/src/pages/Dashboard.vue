<template>
  <div>

   
    <div class="row">
      <div class="col-lg-12">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">{{$t('dashboard.completedTasks')}}</h5>
            <h3 class="card-title"><i class="tim-icons icon-send text-success "></i> 12,100K</h3>
          </template>
        </card>
      </div>
    </div>
  </div>
</template>
<script>


  export default {
    data() {
      return {
        data: true
      }
    },
    beforeDestroy() {
      if (this.$rtl.isRTL) {
        this.i18n.locale = 'en';
        this.$rtl.disableRTL();
      }
    }
  };
</script>
<style>
</style>
