<template>
  <div id="app">
    <Toolbar></Toolbar>
    <NoteList></NoteList>
    <Editor></Editor>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import NoteList from './components/NoteList.vue'
import Editor from './components/Editor.vue'
import axios from 'axios'
export default {
  name: 'app',
  components: {
    Toolbar,
    NoteList,
    Editor
  },
  //初始化数据
  created:function(){

        this.$store.dispatch('getNoteList');
        // var params = new URLSearchParams();
        // params.append("name","tom");
        // axios.get('http://localhost:8081/api/note/noteList'
        //   ).then((res) => {
        //     this.$store.commit('GET_NOTELIST',res.data);
        //   }).catch(function (error) {
        //     console.log(error);
        //   });
  },
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    increment(){
      this.$store.commit('increment')
    },
    decrement(){
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Raleway:400,300);
html, #app {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  max-height: 100%;
  position: relative;
}
#toolbar {
  float: left;
  width: 80px;
  height: 100%;
  background-color: #30414D;
  color: #767676;
  padding: 35px 25px 25px 25px;
}
#notes-list {
  float: left;
  width: 300px;
  height: 100%;
  background-color: #F5F5F5;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
}
#note-editor {
  margin-left: 5px;
  min-width: 600px;
  height: 100%;
  float:left;
}
</style>
