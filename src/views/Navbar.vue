<template>
    <div>
      <nav>
        <v-app-bar app elevation="3" class=" purple lighten-3"  > 
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title><span class="text-uppercase ">Project</span><v-icon large red >mdi-play</v-icon><span class="text-uppercase font-weight-light">List</span></v-toolbar-title> 
            <v-spacer></v-spacer>
            <div class="text-center pa-5">
              <v-menu>
                <template v-slot:activator="{ on, attrs }" >
                  <v-btn color="grey " v-bind="attrs"
                  v-on="on"><v-icon>mdi-arrow-down</v-icon>menu</v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="link in links" :key="link.id">
                    <router-link router :to="link.route"  style="text-decoration: none; color: inherit;" class="d-flex col pa-3">
                      <v-icon class="black--text">{{link.icon}}</v-icon>
                      <v-list-item-title>{{link.text}}</v-list-item-title>
                    </router-link>
                  </v-list-item>
                </v-list>
              </v-menu>

            </div>
            <v-btn  color="grey">
              <span>Sign Out</span>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-btn>
          </v-app-bar>
          <v-navigation-drawer app  v-model="drawer" class="pa-10">
            <v-avatar size="100">
              <img src="/avatar-1.png">
            </v-avatar>
            <v-flex class="mt-4 mb-3">
              <Popup/>
            </v-flex>
            <v-list v-for="link in links" :key="link.id" class="mt-5">
              <v-list-title>
                <router-link router :to="link.route"  style="text-decoration: none; color: inherit;">
                  <v-list-tile-action>
                    <v-icon class="black--text">{{link.icon}}</v-icon>
                  </v-list-tile-action>
                  <v-list-title-content>
                    <v-list-title-title >{{link.text}}</v-list-title-title>
                  </v-list-title-content>
                  <v-spacer></v-spacer>

                </router-link>
              </v-list-title>
            </v-list>
          </v-navigation-drawer>
      </nav>

       
    </div>
</template>

<script>
import Popup from './Popup.vue';
export default {
    name: "Navbar",
    data() {
        return {
            drawer: false,
            links: [
                { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
                { icon: "mdi-folder", text: "My Projects", route: "/Projects" },
                { icon: "mdi-account", text: "Team", route: "/Team" }
            ]
        };
    },
    components: { Popup }
};
</script>

<style scoped>
router-link{
  text-decoration: none;
}
body{
  background-color: grey
}
</style>