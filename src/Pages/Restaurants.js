import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';



class Restaurants extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                  <MapView
                  style={styles.container}
                   
                    showsUserLocation={true}
                />
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
    }
});

export default Restaurants;