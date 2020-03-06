<template>
  <div class="container">
    <div class="row">
      <div class="form-login ">
        <h5 class="text-center">Sign in</h5>
        <a href="/register">
            <span class="text-center" >
                Don't have an account? Sign up now!
            </span>
        </a>
        <div class="form-group">
          <input type="text" id="inputEmail"
            v-model="username"
            name="username"
            v-validate="'required|'"
            :class="{'form-control': true, 
                     'border-danger': errors.has('username')}"
            placeholder="User name" autofocus
            >    
            <span v-show="errors.has('username')" class="text-danger">
              {{ errors.first('username') }}
            </span>
        </div>
        <div class="form-group">
            <input type="password" 
              name="password" 
              v-model="password" 
              v-validate="'required'"       
              :class="{'form-control': true, 
                     'border-danger': errors.has('password')}"      
              placeholder="Password">                
        </div> 
        <span v-show="errors.has('password')" 
          class="text-danger">{{ errors.first('password') }}
        </span>
        <button class="btn-lg btn-primary btn-block text-uppercase"
          @click="login">
          Login
        </button>
       
      </div>
    </div>
  </div> 
</template>

<script>
import axios from 'axios'
// import {loginUser} from '@/APIs/usersAPI.js'
export default {
  name: 'Login',
  components: {
   
  },
  //props = "Thuộc tính public"
  props: {
    
  },
  data() {
    return {
      //Các thuộc tính "private" => Giống "state" trong React !       
      username:'',
      password:''
    }
  },
  
  //Các phương thức "private"
  methods: {
    async login() {
      //Giờ chúng ta cần "validate" các thông tin đăng nhập
      let result = await this.$validator.validateAll()
      if(!result) {
        return
      }
        const instance = axios.create({
        baseURL: 'http://165.22.52.211:1337/',
        timeout: 1000,
        headers: {
                "X-Parse-REST-API-Key": "01c896577245da140fcf9f0fd247c16f",
                "X-Parse-Application-Id": "SONTUNGDEV",
                "Content-type": "application/json",
        }
        });

       instance.post(`parse/users`, {
            
                "username": '${username}',
                "password": '${password}'
                       
        }).then(response =>{
            console.log(response)
        }).catch(e => {
            console.log(e)
        })
       
    //   if(Object.keys(loggedInUser).length > 0) {
    //     this.$session.start() //Lưu session
    //     this.$session.set('loggedInUser', loggedInUser)
    //     this.$router.push('/') //Home
    //   } else {
    //     alert('Đăng nhập ko thành công, kiểm tra lại email/password')
    //   }
    },
    async register(){
       this.$router.push('/register')
    }
  },  
}
</script>

<!-- scoped: Chỉ có tác dụng trong file .vue này -->
<style scoped>
.row {
    background: linear-gradient(90deg,rgba(9,9,121,1) 0,rgba(9,9,121,1) 22%,rgba(0,250,255,1) 99%,rgba(1,199,246,1) 100%);
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
    display: flex;
	align-items: center;
	justify-content: center;
    
}
.form-login {
    background-color: #fff;
    color: rgba(0,0,0,.87);
	width: 30%!important;
    height: 35%!important;
    transition: box-shadow 280ms cubic-bezier(.4,0,.2,1);
    display: block;
    position: relative;
    padding: 16px;
    border-radius: 4px;
}
.text-center {
    text-align: center;
}
</style>