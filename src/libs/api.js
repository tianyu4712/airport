/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
var md5 = require('md5');

let parkNumber =  "p190719151450"
let key   =  "42005bdc5bfab8f8cdc9d23cf7f16585"
// 47.92.114.108:8088
var keyp = key+parkNumber
console.log("key======"+key)
console.log("parkNumber======"+parkNumber)
console.log("key+parkNumber======"+keyp)
let sign = md5(keyp)
console.log("md5======"+sign)
axios.defaults.headers.common["sign"] = sign;
let instanceAxios = axios.create({})
console.log(qs)
// let baseUrl = 'http://ai.bluecardsoft.com.cn'
let baseUrl = 'http://47.92.114.108:8088'

// parkNumber：p190719151450
// key：42005bdc5bfab8f8cdc9d23cf7f16585
// 测试云地址：ai.bluecardsoft.com.cn（IP：47.92.106.54）

// 接口规范 
// 所有请求/返回数据格式采用 UTF-8 格式; 
// 所有请求采用 HTTP 协议，POST 请求方式; 
// 所有请求数据依据标准格式加密:md5(key+parkNumber) ,key 由蓝卡开发者分配,
// 每 次请求时需要在请求头中加入一个字段 sign,sign 字段的值即 md5 加密后的密文,返回 数据无需加密,
// 注意:加密后的密文采用 32 位小写格式;

//test
export const testPost = params => {
  return instanceAxios.post(`${baseUrl}/bcopenapi/out/getChargebf`, params).then(res => res.data);
};

// 4.4.请求算费
export const getChargebf = params => {
  return instanceAxios.post(`${baseUrl}/bcopenapi/out/getChargebf`, params).then(res => res.data);
};

// 4.4.请求算费
export const sendPayRes = params => {
  return instanceAxios.post(`${baseUrl}/bcopenapi/out/sendPayRes`, params).then(res => res.data);
};

//获取微信相关
export const getJsSDK = params => {
  return instanceAxios.post(`${baseUrl}/bcopenapi/out/getChargebf`, params).then(res => res.data);
};