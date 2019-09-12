import React from 'react'
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';

import { httpClient } from '../HttpClient/HttpClient'
import { Card } from "react-native-elements"
import Swiper from 'react-native-swiper'



class MainPageForYou extends React.Component {
    state = { data: [] };
    componentDidMount(){
        const dataMainPageCampaigns =[]
        httpClient
        .get('/web/Product/GetMainPageCampaigns')
        .then(res => {
            res.data.result.map((data)=>{
              const value = data.price.price.toFixed(2);
              dataMainPageCampaigns.push({id:data.id, name:data.name, imageUrl:data.image, price:value})
             });
             this.setState({
                data : dataMainPageCampaigns
             })
            });
    }

    render() {
       
        return (
            <View style={styles.subTopContainer}>
                <View style={styles.container}>
                    <Text style={styles.textLeft}>Kampanyalar</Text>
                    <Text style={styles.textRight}>TÜMÜNÜ GÖR</Text>
                </View>
                <View style={{flex:1}}>
                    <Swiper     style={styles.wrapper} 
                                height={240}
                                showsPagination={false}
                                loop={false}
                               // containerStyle={{marginHorizontal:50}}
                                onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                             /* dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                              activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                              paginationStyle={{
                                bottom: -23, left: null, right: 10
                              }} loop*/
                              >
                        {this.state.data.map((slide, index) => {
                            return (
                                <View key={index} style={styles.slide}> 
                                    <Image style={styles.image} source={{uri: slide.imageUrl}} />
                                    <Text style={{ fontSize:16, fontWeight:"600" }}>{slide.name}</Text>
                                    <Text style={{ fontSize:14, fontWeight:"800", color:'dimgray'}}>{'₺'+slide.price}</Text>
                                </View>
                            );
                        })}
                    </Swiper>
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
    subTopContainer:{
        flex:1,
        marginTop:10,
        backgroundColor:'#fff',
        paddingVertical:10
      },
    textLeft:{
        fontSize:18,
        fontWeight:'600'
    }, 
    textRight:{
        color:'orange',
        fontWeight:'300',
        fontSize:15
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        flex: 1
    },
    wrapper: {
        paddingHorizontal:10
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
  },
});

export default MainPageForYou;