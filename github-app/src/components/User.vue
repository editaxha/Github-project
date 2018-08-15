<template>
<div>
    <div>
        <md-table md-card>
            <md-table-toolbar>
                <h1 class="md-title">Users</h1>
            </md-table-toolbar>
            <md-table-row>
                <md-table-head >Label</md-table-head>
                <md-table-head>Data</md-table-head>
            </md-table-row>
            <md-table-row  v-for="(gateway, keyobject ) in databody" :key="keyobject" 
                v-if="(typeof gateway === 'object')">
                <md-table-row v-for="(gate, index) in gateway" :key="index">
                    <md-table-cell >{{ index }}</md-table-cell>
                    <md-table-cell >{{ gate || "do not exist" }}</md-table-cell>
                </md-table-row>
            </md-table-row >
            <md-table-row v-else>
                <md-table-cell >{{keyobject }}</md-table-cell>
                <md-table-cell >{{ gateway || "do not exist"}}</md-table-cell>
            </md-table-row>
        </md-table>
    </div>
    </div>
</template>
<script type="text/babel">
export default {
  name: "app",
  data() {
    return {
      databody: this.$store.state.userdata
    };
  }
};
</script>