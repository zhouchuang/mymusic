<template>
 <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="tooglefavorite" class="glyphicon glyphicon-star"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
 </div> 
</template>

<script>
export default {
  name:'hello',
  data(){
      return {
          msg:'Welcome to My vue.js App'
      }
  },
  methods:{
      addNote:function(){
          console.log('addNote');
      },
      tooglefavorite:function(){
          console.log('tooglefavorite');
      },
      deleteNote:function(){
          console.log('deleteNote');
      }
  }
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

