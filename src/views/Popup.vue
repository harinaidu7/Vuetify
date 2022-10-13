<template>
    <div>
       
        <v-dialog max-width="600px">
            <template  v-slot:activator="{ on, attrs }">
                <v-btn flat slot="activator" class="success" v-bind="attrs"
                v-on="on">Add new project</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <h2>Add a New Project</h2>
                </v-card-title>
                <v-card-text>
                    <v-form class="px-3" ref="form">
                        <v-text-field label="User" v-model="person" prepend-icon="mdi-account" :rules="inputRules"></v-text-field> 
                        <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules "></v-text-field> 
                        <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules "></v-textarea>  
                        <v-container fluid>
                            <label>Status</label>
                            <v-checkbox v-model="status" value="completed" color="green" label="Completed"></v-checkbox>
                            <v-checkbox v-model="status" value="ongoing" color="yellow" label="Ongoing"></v-checkbox>
                            <v-checkbox v-model="status" value="overdue" color="red" label="Overdue"></v-checkbox>
                        </v-container>

                        <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="date" label="Due date" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" :rules="inputRules "></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                            </v-date-picker>
                        </v-menu>

                        <v-btn class="success mx-0 mt-3" @click="submit">Add Project</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>

    </div>
</template>

<script>
export default {
  name: "Popup",
  data() {
    return {
      title: "",
      content: "",
      date: '',
      status:'',
      person:'',  
      inputRules:[
        v => v.length >= 5 || "Minimum length is 5 character" 
      ]
    };
  },
  methods:{
    submit(){
        if(this.$refs.form.validate()){

            fetch("https://vue-1-54c00-default-rtdb.asia-southeast1.firebasedatabase.app/info.json",{
                method:'Post',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Title : this.title,
                    Content: this.content,
                    Date : this.date,
                    Status : this.status,
                    Person: this.person
                })
            })

            this.title = '',
            this.content = '',
            this.date = '',
            this.status ='',
            this.person =''
        }
    }
  }
};
</script>

<style scoped>
</style>