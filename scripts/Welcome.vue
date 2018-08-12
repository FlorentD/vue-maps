<template>
  <transition
    name="welcome-show"
    enter-active-class="animated zoomIn"
    v-on:after-enter="showWelcomeMessage"
  >
    <div v-if="show" class="chooser">
      <h1>Country finder</h1>
      <p id="welcome-message"></p>
      <transition
        name="show-button"
        enter-active-class="animated zoomIn"
      >
        <a
          class="button button_find-country"
          v-if="showButton"
          v-on:click="showCountryDiv"
        >
          Trouver un pays
        </a>
      </transition>
      <Country v-if="showCountry"/>
    </div>
  </transition>
</template>

<script>
import TypeIt from 'typeit';
import Country from './Country.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Welcome',
  components: { Country },
  data() {
    return {
      show: false,
      showButton: false,
      showCountry: false,
    };
  },
  mounted() {
    this.showWelcome();
  },
  methods: {
    showWelcome() {
      setTimeout(() => (this.show = true), 500);
    },
    showCountryDiv() {
      this.showCountry = true;
      this.startRandomize();
    },
    showWelcomeMessage() {
      new TypeIt('#welcome-message', {
        speed: 20,
        nextStringDelay: 10,
        strings: ['Ne cherchez plus, trouvez !'],
        afterComplete: () => (this.showButton = true),
      });
    },
    ...mapActions(['startRandomize']),
  },
};
</script>

<style scoped>
h1 {
  font-size: 3em;
  font-weight: bold;
  font-family: 'Cookie', cursive;
}

.chooser {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 600px;
  border: 12px dashed #1b1a19;
  padding: 20px;
  text-align: center;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.9);
}

.button_find-country {
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
