import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';

import Banner from '../Components/Home/Banner'
import MainPageForYou from '../Components/Home/MainPageForYou'
import MainPageCampaigns from '../Components/Home/MainPageCampaigns'

import store from '../redux/store'
import { Provider } from 'react-redux'

const initialState ={
  durum:'false'
}


class Home extends React.Component {  
    render() {
      
        return (
          <ScrollView>
            <View style={styles.container}>
              <Provider store={store}>
                  <Banner />
                  <MainPageCampaigns />
                  <MainPageForYou />
              </Provider>         
            </View>
          </ScrollView>
            
        )
    }
}

const styles= StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#F0F0F0'
  }
});

export default Home;