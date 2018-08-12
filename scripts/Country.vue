<template>
    <div class="country-wrapper">
        <span class="name">{{name}}</span>
        <img class="flag" :src="`${imagePath}/${flag}.svg#svgView(viewBox(0,0,200,200);preserveAspectRatio(slice))`"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Country',
  data() {
    return {
      imagePath: __IMAGE_PATH__,
    };
  },
  computed: mapGetters(['name', 'flag']),
};
</script>

<style scoped>
.country-wrapper {
    display: flex;
    flex-direction: column;
}
.name {
    margin-bottom: 20px;
}
.flag {
    display: block;
}
</style>
