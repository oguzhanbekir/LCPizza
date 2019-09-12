import React, { Component } from 'react';

import axios from 'axios'
import join from 'url-join'
import { AsyncStorage } from 'react-native';

var isBasoluteURLRegex = /^(?:\w+:)\/\//;


axios.interceptors.request.use(async (config)=>{
  if(!isBasoluteURLRegex.test(config.url)){
    const AUTH_TOKEN = await AsyncStorage.getItem("token")
    if(AUTH_TOKEN!=null){
      config.headers = { 'Authorization': 'Bearer '+AUTH_TOKEN }
    }
    config.url = join('http://api.littlecaesars.uat.web.clckwrk.im/api',config.url);
}
return config;
}, function (error) {
    // Do something with request error
    return alert(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {

    if (401 === error.response.status) {
      //anasayfa yönlendirilmesi yapılacak
    } else {

    }
    console.log(Promise.reject(error))
    return Promise.reject(error);
  });

export const httpClient = axios;