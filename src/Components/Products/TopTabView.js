import * as React from 'react';
import { View, StyleSheet, Dimensions, Fragment  } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';

import ListView from './ProductListView'

const FirstRoute = () => (
  <ListView />
);
 
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

 class TopTabView extends React.Component {
    state = {
      index: 0,
      routes: [
        { key: 'campaigns', title: 'KAMPANYALAR' },
        { key: 'pizzas', title: 'PIZZALAR' },
        { key: 'byproducts', title: 'YAN ÜRÜNLER' },
      ],
    };
    
   
    render() {
      
      return (
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            campaigns: FirstRoute,
            pizzas: SecondRoute,
            byproducts: ThirdRoute,
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
          renderTabBar={(props) =>
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: 'white' }}
              style={{backgroundColor: "black"}}
            />
          }
        />
      );
    }
  }
   
  const styles = StyleSheet.create({
    container: {
      backgroundColor:'red'
    },
    scene: {
      flex: 1,
    },
  });

  export default TopTabView;