import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import { httpClient } from '../HttpClient/HttpClient'
import Banner from '../Components/Banner'
import MainPageForYou from '../Components/MainPageForYou'
import MainPageCampaigns from '../Components/MainPageCampaigns'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
      
        return (
          <ScrollView>
            <View style={styles.container}>
                  <Banner />
                  <MainPageCampaigns />
                  <MainPageForYou />
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