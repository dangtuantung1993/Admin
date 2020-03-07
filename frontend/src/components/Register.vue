<template>
    <div class="row">
      <div class="form-login ">
        <h5 class="text-center">Sign in</h5>
        <a href="/register">
            <span class="text-center" >
                Don't have an account? Sign up now!
            </span>
        </a>
        <div class="form-group">
            <input type="text"
                v-model="username"
                name="username"
                v-validate="'required'"
                :class="{'form-control': true, 
                    'border-danger': errors.has('username')}"
                placeholder="Username" autofocus
            >    
            <span v-show="errors.has('username')" class="text-danger">
                {{ errors.first('username') }}
            </span>
        </div>
        <div class="form-group">
            <input v-validate="'required'" name="password" 
                type="password" placeholder="Password" 
                v-model="password"
                :class="{'form-control': true, 
                 'border-danger': errors.has('password')}"   
                ref="password">                
        </div>
        <span v-show="errors.has('password')" 
            class="text-danger">{{ errors.first('password') }}
        </span>
        <div class="form-group">
            <input v-validate="'required|confirmed:password'" 
                name="retypePassword" type="password" 
                placeholder="Type password again"
                :class="{'form-control': true, 
                 'border-danger': errors.has('retypePassword')}"
                data-vv-as="password">                
        </div> 
        <span v-if="errors.has('retypePassword')" 
            class="text-danger">{{ errors.first('retypePassword') }}
        </span> 
        <button class="btn-lg btn-success btn-block text-uppercase"
            @click="createAccount">
            Create Account
        </button>  
        <span v-if="registerResponse.result === false"
            class="text-danger">{{registerResponse.message}}
        </span>
        <span v-else 
            class="text-success">{{registerResponse.message}}
        </span> 
        </div>
    </div>
</template>
<script>
import {registerUser} from '../APIs/usersAPI.js'
import {APIResponse} from '../APIs/apiParameters.js'
export default {
    name: "Register",
    data(){
        return {
            username: "",
            password: "",
            retypePassword: "",  
            registerResponse: new APIResponse()      
        }
    },
    methods: {
        async createAccount() {
            let result = await this.$validator.validateAll()
            if (!result) {
                return
            }
            this.registerResponse = await registerUser(this.username, this.password)
            if(this.registerResponse.result == true){
                this.$router.push('/login')
            }
        }
    }
}
</script>
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
    height: 45%!important;
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