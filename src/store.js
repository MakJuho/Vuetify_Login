import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { 
    userInfo : null,
    allUsers:[
      {id:1, name: "juho", email: "einjuho7@ajou.ac.kr", password:"1111"},
      {id:2, name: "jongin", email: "jongin@ajou.ac.kr", password:"2222"}
    ],
    isLogin: false,
    isLoginError: false
  },
  
  
  mutations: {
    // state 값 변화 시킴
    // 로그인이 성공했을 때
    loginSuccess(state, payload){
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload
    },
    
    // 로그인이 실패했을 때
    loginError(state){
      state.isLogin = false,
      state.isLoginError = true
    },

    // 로그아웃
    logOut(state){
      state.isLogin = false,
      state.isLoginError = false,
      state.userInfo = null
    }
  },

  actions: {
    // 로그인 시도
    // 로그인 성공하면 loginSuccess실행

    // 로그인 실패하면 loginError실행

    login({state, commit}, loginObj){
      let selectedUser = null

      state.allUsers.forEach(user =>{
          if(user.email === loginObj.email){               
              selectedUser = user
          }
      })
      if(selectedUser === null || selectedUser.password !== loginObj.password){
        commit("loginError")
      }else{
        commit("loginSuccess", selectedUser)  
        router.push({name:"mypage"})
      }
      
    },
    logout({commit}){
      commit("logOut")
      router.push({name:"home"})
    }
  }
});
