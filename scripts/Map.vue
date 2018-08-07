<template>
    <div id="map"></div>
</template>

<script>
import L from 'leaflet';
import { mapGetters } from 'vuex';
import store from './store';
export default {
  store,
  data() {
    return {
      map: null,
      layers: L.layerGroup(),
    };
  },
  mounted() {
    this.map = L.map('map', {
      center: [4.393626, 18.556771],
      zoom: 2,
    });
    L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png?{foo}', {
      foo: 'bar',
    }).addTo(this.map);
    this.layers.addTo(this.map);

    //
  },
  computed: mapGetters(['flag']),
  watch: {
    flag: function(value) {
      this.layers.clearLayers();
      import(`./data/assets/${value}.geo.json`).then(geoJSON =>
        L.geoJSON(geoJSON).addTo(this.layers)
      );
    },
  },
};
</script>
<style scoped>
#map {
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
