<template>
 <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="deleteNode" class="glyphicon glyphicon-remove"></i>
    <i @click="starNoteList" v-bind:class="[glyphicon,heart,star==true?starClass:'']" ></i>
 </div> 
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name:'hello',
  data(){
      return {
         starClass:'star',
         glyphicon:'glyphicon', 
         heart:'glyphicon-heart'
      }
  },
  computed:{
    star(){
      return this.$store.state.isStar;
    }
  },
  methods:mapActions(['addNote','deleteNode','starNoteList'])
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
.star{
  color:#c50f0f;
}
</style>

