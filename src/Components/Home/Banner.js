import React from 'react'
import { Text, View, StyleSheet, ToastAndroid, TouchableOpacity } from 'react-native';

import { httpClient } from '../../HttpClient/HttpClient'
import { SliderBox } from 'react-native-image-slider-box';

import { connect } from 'react-redux'

class Banner extends React.Component {
    state = { images: [] };
      componentDidMount(){
          //Uygulamanın ana sayfasındaki banner
        const imageUrl =[]
        httpClient
        .get('/web/Cms/Banner?Name=Promo')
        .then(res => {
            res.data.result.map((data)=>{
                imageUrl.push(data.imageMobile)
             });
             this.setState({
                images: imageUrl
                 });
            }); 

    }
    
render() {
   
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=> { this.props.degistir() }}><Text>asdasd</Text></TouchableOpacity>
                <Text>{this.props.durum}</Text>
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

const mapStateToProps = (state) => {
    return {
        durum: state.durum
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        degistir:() => dispatch({type:'LOAD_HOME', payload:'false'})
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(Banner);