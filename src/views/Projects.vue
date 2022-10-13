<template>
    <div>
        <Navbar/>
        <h1>Projects</h1>
        <v-expansion-panels accordion>
            <v-expansion-panel v-for="project in myProjects"  :key="project.id">
              <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatem exercitationem dolor expedita enim laboriosam dolorem vero facere quidem consectetur, libero maiores ipsum, nihil illo perferendis, ex error neque mollitia.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
    export default {
    name: "Projects",
    components: { Navbar },
    data(){
        return{
            projects: [
        {
          title: "Design a new website",
          person: "Raj Devender",
          due: "1 Jan 2023",
          status: "ongoing",
        },
        {
          title: "Authenticate new website",
          person: "Raj Devender",
          due: "1 Jan 2023",
          status: "completed",
        },
        {
          title: "Manage the new website",
          person: "Mark Weeber",
          due: "1 Jan 2023",
          status: "completed",
        },
        {
          title: "Ui of the new website",
          person: "Ankit Nayak",
          due: "1 Jan 2023",
          status: "ongoing",
        },
        {
          title: "Maintain new website",
          person: "Thor Nadar",
          due: "1 Jan 2023",
          status: "ongoing",
        },
        {
          title: "Support the new website",
          person: "Vijay Nadar",
          due: "1 Jan 2023",
          status: "completed",
        },
        {
          title: "research about new website",
          person: "Vighnesh Naidu",
          due: "1 Jan 2023",
          status: "ongoing",
        },
      ],
        }
    },
    computed:{
        myProjects(){
            return this.projects.filter(project => {
                return project.person === 'Raj Devender'
            })
        }
    }

}
</script>

<style scoped>

</style>