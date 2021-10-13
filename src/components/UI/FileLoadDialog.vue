<template>
  <modal-dialog :show="true">
    <div class="load-file-content">
      <h1 class="select-header">Выберите файлы для загрузки</h1>
      <form @submit.prevent>
        <label>File
          <input type="file" id="files" ref="files" multiple v-on:change="handleFileUpload()"/>
        </label>
        <button v-on:click="submitFile()">Submit</button>
      </form>
    </div>
  </modal-dialog>
</template>

<script>
import ModalDialog from "@/components/UI/ModalDialog";
import axios from "axios";


class WrongFiles extends Error {
  constructor(props, filename) {
    super(props);
    this.filename = filename;
  }
}

export default {
  name: "FileLoadDialog",
  components: {ModalDialog},
  data() {
    return {
      files: []
    }
  },
  methods: {
    handleFileUpload() {
      let uploadedFiles = this.$refs.files.files;

      uploadedFiles.forEach(file => {
        this.files.push(file);
      });
    },
    submitFile() {
      let formData = new FormData();

      this.files.forEach((file, i) => {
        formData.append('files[' + i + ']', file);
      });

      axios.post( 'http://localhost:8088/uploadfiles',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
      ).then(function(){
        console.log('SUCCESS!!');
      })
      .catch(err =>{
        if (err.response) {
          let err_res = err.response;

          if (err_res.status === 500) {
            let data = err_res.data;

            throw WrongFiles(data['message'], )
          }
        }
      });
    }
  }
}
</script>

<style scoped>
.load-file-content {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  width: 700px;
  height: min-content;

  /*border: 5px solid var(--mosit-gray-color);*/
  border-radius: 15px;
  /*box-shadow: 3px 3px 5px 1px black;*/

  margin: auto;
  padding: 20px;
  background: white;
}

.select-header {
  margin-bottom: 20px;
  font-size: 26px;
}

</style>