<template>
  <div id="note-editor">
     <input name="header" v-model="activeNoteHeader"  type="text" class="form-control" placeholder="标题">
     <textarea v-model="activeNoteText" placeholder="笔记内容"  @input="editNote"></textarea>
  </div>
</template>

<script>
export default {
  name:'editor',
  data(){
      return {
          editNote:''
      }
  },
  computed:{
			activeNoteText(){
				return this.$store.state.activeNote.content
			},
			activeNoteHeader(){
				return this.$store.state.activeNote.title
			}
    },
    methods:{
      edit:function(e){
				this.$store.commit('EDIT_NOTE', e.target.value)
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
</style>

