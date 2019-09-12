import React from 'react';
import { AsyncStorage } from 'react-native';
import axios from 'axios'

import Main from './src/Navigation/AppNavigator'

class App extends React.Component {
  constructor(props) {
      super(props);
    // İlk token kontrolü token yok ise token üretilip localstorage a yazılır.
      const jwtToken = AsyncStorage.getItem("token")
        if(jwtToken==null){
            axios.post('https://auth.api.lcpizza.com.tr/api/auth/AuthService', {
              Username: 'robuser@clockwork.com.tr',
              Password: '7656BAF3F15A6504BBF3CEE829092DFA'
            } , {
              headers: {
                  'Content-Type': 'application/json',
              }
            })
            .then(function (response) {
              AsyncStorage.setItem('token', response.data.access_token);
            })
            .catch(function (error) {
              alert("Sunucu ile bağlantı kurulamadı");
            });
       }
    
  }
  render() {
      return (
        <Main />
      )
  }
}

export default App;