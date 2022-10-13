<template>
    <div>
        <Navbar/>
        <h1>Team</h1>

        <v-container class="my-5">
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.id">
                    <v-card  class="text-xs-center ma-3">
                        <v-responsive class="pt-4 ">
                            <v-avatar size="100" class="grey lighten-2">
                                <img :src ="person.avatar"  />
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="subheading">{{person.name}}</div>
                            <div class="grey--text">{{person.role}}</div>
                        </v-card-text >
                        <v-card-action>
                            <v-btn flat color="grey">
                                <v-icon>mdi-message</v-icon>
                            </v-btn>
                        </v-card-action>
                    </v-card>
                </v-flex>
            </v-layout> 
        </v-container>



    </div>
</template>

<script>
import Navbar from './Navbar.vue';
    export default {
    name: "Team",
    components: { Navbar },

    data(){
        return{
            team:[
                {name: 'Hari Naidu', role: 'Web developer', avatar: '/avatar-1.png'},
                {name: 'Krishnan Naidu', role: 'Graphic designer',avatar: '/avatar-2.png'},
                {name: 'Raj Devender ', role: 'Web Developer',avatar: '/avatar-3.png'},
                {name: 'Ankit Nayak', role: 'Social media head',avatar: '/avatar-4.png'},
                {name: 'Shriraj lakeshree', role: 'Admin',avatar: '/avatar-5.png'},
                {name: 'Vijay Nadar', role: 'Project Manager',avatar: '/avatar-1.png'},
                {name: 'Vighnesh Naidu', role: 'Chief of Operations',avatar: '/avatar-2.png'}

            ]
        }
    }
}
</script>        
     