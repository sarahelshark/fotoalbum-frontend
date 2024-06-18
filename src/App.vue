<script >
import axios from 'axios' ;
import AppFooter from "./components/AppFooter.vue";
import AppMain from "./components/AppMain.vue";

export default{
  name:'App',
  components: {
    
    AppFooter,
    AppMain,
  },
  data(){
    return{
      
      photos:' '  //salvo qui i dati richiesti
    }
  },
 
}
</script>

<template>
  <h1>Photos</h1>
  <AppMain></AppMain>
  <AppFooter></AppFooter>
  
</template>

<style >

</style>
