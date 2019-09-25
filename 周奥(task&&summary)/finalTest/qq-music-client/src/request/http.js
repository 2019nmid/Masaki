// /**
//  * 简单封装axios
//  */
// // import axios from 'axios';
// import QS from 'qs';
// // import store from '../store/index'

// // 环境的切换
// if (process.env.NODE_ENV == 'development') {
//     axios.defaults.baseURL = 'http://localhost:3000/api/';
// } else if (process.env.NODE_ENV == 'debug') {
//     axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {
//     axios.defaults.baseURL = 'http://localhost:3000/api/';
// }

// // 请求超时时间
// axios.defaults.timeout = 10000;

// // post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)


// //get请求
// export function get(url) {
//     this.axios.get(url).then(body => {
//         console.log( body.data)
//         return body.data
        
//     }).catch(body => {
//         return body
//     })
// }

// //post请求
// export function post(url) {
//     this.axios.post(url).then(body => {
//         return body.data
//     }).catch(body => {
//         return body
//     })
// }

// //get请求    
// export function get(url, params){    
//     return new Promise((resolve, reject) =>{        
//         axios.get(url, {            
//             params: params        
//         })        
//         .then(res => {            
//             resolve(res.data);        
//         })        
//         .catch(err => {            
//             reject(err.data)        
//         })    
//     });
// }

// //post请求
// export function post(url, params) {    
//     return new Promise((resolve, reject) => {         
//         axios.post(url, QS.stringify(params))        
//         .then(res => {            
//             resolve(res.data);        
//         })        
//         .catch(err => {            
//             reject(err.data)        
//         })    
//     });
// }