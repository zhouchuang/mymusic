<template>
 <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="addNote" class="glyphicon glyphicon-star"></i>
    <i @click="addNote" class="glyphicon glyphicon-remove"></i>
 </div> 
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name:'hello',
  data(){
      return {
          msg:'Welcome to My vue.js App'
      }
  },
   methods:mapActions(['addNote'])
}
</script>

<style>
  #toolbar i {
  font-size: 30px;
  margin-bottom: 35px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.5s ease;
}

#toolbar i:hover {
  opacity: 1;
}
</style>

