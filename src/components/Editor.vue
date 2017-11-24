<template>
  <div id="note-editor">
     <input name="header" v-model="activeNoteHeader"  type="text" class="form-control" placeholder="标题">
     <textarea v-model="activeNoteText" placeholder="笔记内容"  ></textarea>
     <div style="float:right;">
       <span  @click="addStar"  v-bind:class="[glyphicon,heart,star==true?starClass:unstarClass]"  ></span>  
       <label>Date:{{time | timeformat}}</label>
     </div>
  </div>
</template>

<script>
import Vue from 'vue'
import filters from './../util/filter';
Vue.filter('timeformat', filters['timeformat']);


export default {
  name:'editor',
  data(){
      return {
         starClass:'star',
         unstarClass:'unstar',
         glyphicon:'glyphicon', 
         heart:'glyphicon-heart'
      }
  },
  computed:{
			activeNoteText:{
        get : function () {
          return this.$store.state.activeNote.content
        },
        set:function(newValue){
          this.$store.state.activeNote.content = newValue
        }
			},
			activeNoteHeader:{
        get : function () {
          return this.$store.state.activeNote.title
        },
        set:function(newValue){
          this.$store.state.activeNote.title = newValue
        }
      },
      time(){
        // var time  =  this.$store.state.activeNote.time;
        // return (time.getYear()+1900)+"-"+(time.getMonth()+1)+"-"+time.getDate()+
        // " "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
        return this.$store.state.activeNote.time;
      },
      star(){
        return this.$store.state.activeNote.star;
      }
    },
    methods:{
      addStar:function(){
         this.$store.commit('CHANGE_STAR');
         this.$store.dispatch('getActiveNote');
      }
    }
}
</script>

<style>
#note-editor textarea {
  margin-top: 10px;
  height: 80%;
  width: 100%;
  padding: 6px 20px;
  border-radius: 6;
  border: 2px solid #e0e1e1;
}
.form-control{
  top: 50px;
  height:60px;
  margin: 0;
  padding: 6px 20px;
  border-radius: 6px;
  border: 2px solid #e0e1e1;
}
.star{
  color:#c50f0f;margin-right:5px;
  top: 4px;
  font-size: 18px;
}
.unstar{
  color:#666;margin-right:5px;
  top: 4px;
  font-size: 18px;
}
</style>

