<template>
    <div class="wrapper">
        <Welcome />
        <Map />
    </div>
</template>
<script>
import store from './store';
import Map from './Map.vue';
import Welcome from './Welcome.vue';

export default {
  store,
  components: { Map, Welcome },
};
</script>
<style scoped>
.wrapper {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
