<script>
import { state } from "../state.js";

export default {
  data() {
    return {
      state,
    };
  },
  
  mounted() {
    state.funzioneDiFetch(state.url); //renderizzare in pag
  },
};
</script>
<template>
    <section> all photos would be here</section>
  </template>
  <style >
  
  </style>