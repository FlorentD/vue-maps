<template>
    <div class="wrapper">
        <div class="chooser">
            <h1>Destination culinaire</h1>
            <span class="name">{{name}}</span>
            <img class="flag" :src="`scripts/data/assets/${flag}.svg`"/>
            <button v-on:click="startRandomize">Trouver un pays</button>
        </div>
        <Map />
    </div>
</template>
<script>
import store from './store';
import { mapGetters, mapActions } from 'vuex';
import Map from './Map.vue';

export default {
  store,
  components: { Map },
  computed: mapGetters(['name', 'flag']),
  methods: mapActions(['startRandomize']),
};
</script>
<style scoped>
.wrapper {
  display: block;
  width: 100%;
  height: 100%;
}
h1 {
  font-size: 3em;
}
.chooser {
  position: absolute;
  width: 500px;
  height: 500px;
  right: 0px;
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom-left-radius: 5px;
  padding: 20px;
  text-align: center;
  z-index: 100;
}
.name {
  width: 100%;
  display: inline-block;
  font-size: 2em;
  font-weight: bold;
  margin: auto;
  padding-bottom: 1em;
}
.flag {
  height: 200px;
  margin: 0px 90px;
  padding-bottom: 5em;
}
</style>
