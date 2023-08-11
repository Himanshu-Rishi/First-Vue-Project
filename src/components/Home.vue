<template>
  <div class="form__box">
    <div class="container">
      <div class="title">Registration</div>
      <div class="content">
        <form @submit.prevent="submitForm">
          <div class="user-details">
            <div class="input-box">
              <span class="details">First Name*</span>
              <input
                type="text"
                placeholder="Enter your first name"
                v-model="data.firstName"
                required
              />
            </div>
            <div class="input-box">
              <span class="details">Last Name</span>
              <input
                type="text"
                placeholder="Enter your last name"
                v-model="data.lastName"
              />
            </div>
            <div class="input-box">
              <span class="details">Email*</span>
              <input
                type="email"
                placeholder="Enter your email"
                required
                v-model="data.email"
              />
            </div>
            <div class="input-box">
              <span class="details">Phone Number*</span>
              <input
                type="tel"
                placeholder="Enter your number"
                required
                v-model="data.phoneNumber"
              />
            </div>
            <div class="input-box">
              <span class="details">Address*</span>
              <input
                type="text"
                placeholder="Enter your address"
                required
                v-model="data.address"
              />
            </div>
            <div class="input-box">
              <span class="details">Job Title*</span>
              <input
                type="text"
                placeholder="Enter your job title"
                required
                v-model="data.jobTitle"
              />
            </div>
          </div>
          <div class="button">
            <input type="submit" value="Register" />
            <p class="last__text">
              Want to check details?
              <router-link to="/details" class="link__text" exact
                >Go</router-link
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
export default {
  data() {
    return {
      data: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phoneNumber: "",
        jobTitle: "",
      },
    };
  },
  methods: {
    async submitForm() {
      const $toast = useToast();
      const response = await axios.post(
        "http://localhost:8000/api/employee",
        this.data
      );
      if (response.data.success) {
        let instance = $toast.success("Submit Successfully!", {
          position: "bottom-left",
        });
      } else {
        let instance = $toast.error(`${response.data.message}`, {
          position: "bottom-left",
        });
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.form__box {
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
.container {
  max-width: 700px;
  max-height: 75vh;
  background-color: #fff;
  padding: 25px 30px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  margin: auto;
}
.container .title {
  font-size: 25px;
  font-weight: 500;
  position: relative;
}
.container .title::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  border-radius: 5px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}
.content form .user-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
}
form .user-details .input-box {
  margin-bottom: 15px;
  width: calc(100% / 2 - 20px);
}
form .input-box span.details {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}
.user-details .input-box input {
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}
.user-details .input-box input:focus {
  border-color: #9b59b6;
}
form .gender-details .gender-title {
  font-size: 20px;
  font-weight: 500;
}
form .category {
  display: flex;
  width: 80%;
  margin: 14px 0;
  justify-content: space-between;
}
form .category label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
form .category label .dot {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 10px;
  background: #d9d9d9;
  border: 5px solid transparent;
  transition: all 0.3s ease;
}
#dot-1:checked ~ .category label .one,
#dot-2:checked ~ .category label .two,
#dot-3:checked ~ .category label .three {
  background: #9b59b6;
  border-color: #d9d9d9;
}
form input[type="radio"] {
  display: none;
}
form .button {
  height: 45px;
  margin: 35px 0;
}
form .button input {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}
form .button input:hover {
  /* transform: scale(0.99); */
  background: linear-gradient(-135deg, #71b7e6, #9b59b6);
}

.navigate__box {
  width: 100%;
  display: flex;
  justify-content: center;
}
.last__text {
  text-align: center;
  color: gray;
  margin-top: 0.25rem;
}

.link__text {
  color: #9961ba;
  text-decoration: none;
}
@media (max-width: 584px) {
  .container {
    max-width: 100%;
  }
  form .user-details .input-box {
    margin-bottom: 15px;
    width: 100%;
  }
  form .category {
    width: 100%;
  }
  .content form .user-details {
    max-height: 300px;
    overflow-y: scroll;
  }
  .user-details::-webkit-scrollbar {
    width: 5px;
  }
}
@media (max-width: 459px) {
  .container .content .category {
    flex-direction: column;
  }
}
</style>
