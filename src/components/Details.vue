<template>
  <h1 class="headline">Details of all form that are Submitted</h1>
  <div class="details__box">
    <div class="card" v-for="item in data">
      <p>
        Name: <span v-if="item.firstName">{{ item.firstName }}</span>
        <span v-if="item.lastName">{{ item.lastName }}</span>
      </p>
      <p>
        Email: <span v-if="item.email">{{ item.email }}</span>
      </p>
      <p>
        Phone Number:
        <span v-if="item.phoneNumber">{{ item.phoneNumber }}</span>
      </p>
      <p>
        Address: <span v-if="item.address">{{ item.address }}</span>
      </p>
      <p>
        Job Title: <span v-if="item.jobTitle">{{ item.jobTitle }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    async loadData() {
      const response = await axios.get("http://localhost:8000/api/employee");
      this.data = response.data.data;
      console.log(response.data.data);
    },
  },
  beforeMount() {
    this.loadData();
  },
};
</script>

<style scoped>
.headline {
  text-align: center;
  color: rgb(214, 214, 214);
  margin-top: 1rem;
}
.details__box {
  max-width: 100%;
  margin: 2rem 1rem;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
}
.card {
  min-width: 250px;
  min-height: 200px;
  padding: 5px 10px;
  margin: 0.25rem;
}
</style>
