import React from 'react'
import { View, StyleSheet, ToastAndroid } from 'react-native';

import { httpClient } from '../HttpClient/HttpClient'
import { SliderBox } from 'react-native-image-slider-box';


class Products extends React.Component {
    state = { images: [] };
      componentDidMount(){
          //Uygulamanın ana sayfasındaki banner
        const imageUrl =[]
        const promise = httpClient
        .get('/web/Cms/Banner?Name=Promo')
        .then(res => {
            res.data.result.map((data)=>{
                imageUrl.push(data.imageMobile)
             });
             this.setState({
                images: imageUrl
                 });
                 ToastAndroid.show("as",ToastAndroid.LONG)
            }); 

    }
    
render() {
   
        return (
            <View style={styles.container}>
                <SliderBox 
                    images={this.state.images}
                    sliderBoxHeight={350} />
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1
    }
});

export default Products;