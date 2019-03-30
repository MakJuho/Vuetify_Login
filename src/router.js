import Vue from "vue";
import Router from "vue-router";
import store from "./store";

Vue.use(Router);

// 가드 함수 정의 - 인증
const rejectAuthUser = (to, from, next)=>{
  if(store.state.isLogin === true ){
    // 이미 로그인된 유저는 막아야된다.
    alert("You already logged in")
    // home으로 redirection
    next("/")
  }else{
    // 로그인 안된 유저
    next() // from -> to
  }
}

const onlyAuthUser = (to, from, next)=>{
  if(store.state.isLogin === false ){
    // 아직 로그인 안된 유저가 mypage로 넘어오는 것을 막아야된다.
    alert("You have to log in")
    // home으로 redirection
    next("/")
  }else{
    // 로그인 안된 유저
    next() // from -> to
  }
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      // 가드 먼저 check
      beforeEnter : rejectAuthUser,
      component: () => import(/* webpackChunkName: "login" */ "./views/Login.vue")
      
    },
    {
      path: "/mypage",
      name: "mypage",
      beforeEnter : onlyAuthUser,
      component: () => import(/* webpackChunkName: "mypage" */ "./views/Mypage.vue")
    }
  ]
});
