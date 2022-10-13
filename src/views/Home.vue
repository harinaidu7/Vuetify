<template>
    <div>
        <Navbar/>

        <v-container class="my-5 ">
          
            <v-layout row class="d-flex justify-start">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <div class="px-2">
                      <v-btn  v-bind="attrs"   v-on="on" @click="sortbyTitle()"><v-icon>mdi-folder</v-icon>By project title</v-btn>
                  </div>
                </template>
                <span>sort by title</span>
              </v-tooltip>
              
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <div class="px-2">
                      <v-btn  v-bind="attrs"   v-on="on" @click="sortbyPerson()"><v-icon>mdi-account</v-icon>By person</v-btn>
                  </div>
                </template>
                <span>sort by title</span>
              </v-tooltip>

              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <div class="px-2">
                      <v-btn  v-bind="attrs"   v-on="on" @click="sortbyStatus()"><v-icon>mdi-check-circle</v-icon>By project status</v-btn>
                  </div>
                </template>
                <span>sort by title</span>
              </v-tooltip>
            </v-layout>

            
          
        </v-container>

        <v-container class="my-5 ">
          

            <v-card class="pa-5" flat v-for="project in projects" :key="project.id">
              <v-layout row wrap :class="`pa-3 project ${project.status}`">
                   <v-flex xs12 md6  >
                    <div class="caption grey--text">Title</div>
                    <div>{{project.Title}}</div>
                   </v-flex>
                   <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Person</div>
                    <div>{{project.Person}}</div>
                   </v-flex> 
                   <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Due</div>
                    <div>{{project.Date}}</div>
                   </v-flex>
                   <v-flex xs6 sm4 md2 class="d-flex justify-end">
                    <div class="right">
                        <v-chip  :class="`project ${project.Status} white--text caption my-2`">{{project.Status}}</v-chip>
                    </div>
                    
                  </v-flex>
                </v-layout>  
                <v-divider></v-divider>
              </v-card>
              <v-btn @click="project_info">click</v-btn>
        </v-container>
        <div v-for="data in info" :key="data.id" :v-model="project_info">
          {{data.Title}}
          {{data.Content}}
          {{data.Date}}
        </div>
        

    </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "Home",
  components: { Navbar },
  data() {
    return {
      projects:[],
    };
  },
  created(){
    this.project_info()
  },
  methods: {
    sortbyTitle() {
     return this.projects.sort((a, b) => (a.Title < b.Title ? -1 : 1));
    },
    sortbyPerson() {
     return this.projects.sort((a, b) => (a.Person < b.Person ? -1 : 1));
    },
    sortbyStatus() {
     return this.projects.sort((a, b) => (a.Status < b.Status ? -1 : 1));
    },

    project_info(){
      fetch('https://vue-1-54c00-default-rtdb.asia-southeast1.firebasedatabase.app/info.json').then((response)=>{
        if(response.ok){
          return response.json();
        }
      })
      .then((data)=>{
        const results = [];
        for(const id in data){
          results.push({
            id:id,
            Title: data[id]['Title'],
            Content: data[id]['Content'],
            Date: data[id]['Date'],
            Status: data[id]['Status'],
            Person: data[id]['Person']
          });
        }
        this.projects = results;
        console.log("info",this.projects)
        
      } )
    }
  },
};
</script>


<style scoped>
.project.completed {
  border-left: 4px solid green;
}
.project.ongoing {
  border-left: 4px solid rgb(218, 221, 39);
}

.v-chip.completed {
  background: green;
}
.v-chip.ongoing {
  background: rgb(218, 221, 39);
}
.project.overdue {
  border-left: 4px solid red;
}
.v-chip.overdue {
  background:  red;
}
</style>