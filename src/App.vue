<template>
  <div id="app">
    <v-app>
      <v-data-table
        :headers="headers"
        :items="data"
        :options.sync="options"
        :server-items-length="totalDesserts"
        :loading="loading"
        class="elevation-1"
      ></v-data-table>
    </v-app>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "ApsideList",
  props: {
    url: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        {
          text: 'Body',
          align: 'start',
          sortable: false,
          value: 'body',
        },
        {
          text: 'Title',
          align: 'start',
          sortable: false,
          value: 'title',
        }
      ],
      data: [],
      totalDesserts: 0,
      loading: true,
      options: {},
    }
  },
  watch: {
    options: {
      handler () {
        this.getRecords()
      },
      deep: true,
    },
  },
  methods: {
    getRecords () {
      this.loading = true
      const start = this.options.page * this.options.itemsPerPage - this.options.itemsPerPage
      axios.get(this.url,{
        params:{
          _start: start,
          _limit: this.options.itemsPerPage
        }
      }).then(async ({data}) => {
        const totalPage = (await axios.get(this.url)).data.length
        this.data = data
        this.totalDesserts = totalPage
        this.loading = false
      })
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
