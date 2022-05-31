<template>
  <div id="app">
    <v-app>
      <h1>{{ title }}</h1>
      <v-data-table
        :headers="headers"
        :items="data"
        :options.sync="options"
        :server-items-length="totalDesserts"
        :loading="loading"
        class="elevation-1"
      ></v-data-table>
      <v-alert
        dense
        text
        type="info"
      >
        Componente desarrollado por <a href="https://apside.cl" target="_blank">Apside</a><br>
        Estamos consultando la siguiente URL: <b>{{ url }}</b>
      </v-alert>
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
    titles: {
      type: Array,
    },
    title: {
      type: String,
      default: 'Listado Apside'
    }
  },
  data() {
    return {
      headers: [],
      data: [],
      totalDesserts: 0,
      loading: true,
      options: {},
    }
  },
  mounted () {
    this.titles.forEach(item => {
      this.headers.push({ 
        text: item.text,
        align: 'start',
        sortable: false,
        value: item.value
      })
    })
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
