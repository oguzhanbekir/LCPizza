import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';

import Home from '../Pages/Home'
import Basket from '../Pages/Basket'
import Products from '../Pages/Products'
import PaymentType from '../Pages/PaymentType'
import Settings from '../Pages/Settings'

const headerStyleHome = 'ANASAYFA'
const headerStyleProducts = 'ÜRÜNLER'
const headerStyleBasket = 'SEPETİM'
const headerStylePaymentType = 'TESLİMAT TİPİ'


const HomeTab = createStackNavigator(
  {
    Home,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
      
      },
      headerTintColor: '#000',
      title: headerStyleHome,  
    },
  }
);

const ProductsTab = createStackNavigator(
  {
    Products,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        
      },
      title: headerStyleProducts,   
    },
  }
);

const BasketTab = createStackNavigator(
  {
    Basket,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        
      },
      title: headerStyleBasket,   
    },
  }
);

const PaymentTypeTab = createStackNavigator(
  {
    PaymentType,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        
      },
      title: headerStylePaymentType,   
    },
  }
);
 
const SettingsTab = createStackNavigator(
  {
    Settings,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
      
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings Tab',
     
    },
  }
);

const MainApp = createBottomTabNavigator(
  {
    Home: {
      screen: HomeTab,
      navigationOptions : {
        title:"ANASAYFA",
      },
    },
    Products: {
      screen: ProductsTab,
      navigationOptions : {
        title:"ÜRÜNLER",
      }, 
    },
    Basket: {
      screen: BasketTab,
      navigationOptions : {
        title:"SEPETİM",
      }, 
    },
    PaymentType: {
      screen: PaymentTypeTab,
      navigationOptions : {
        title:"TESLİMAT TİPİ",
      },
    },
    Settings: {
      screen: SettingsTab,
      navigationOptions : {
        title:"DAHA FAZLA",
      },
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;


        const items= {
          "Home" : "home",
          "Products" : "pie-chart",
          "Basket" : "shopping-basket",
          "PaymentType" : "shop",
          "Settings" :"menu"
        };
        const itemsType= {
          "Anasayfa" : "entypo",
          "Products" : "feather",
          "Basket" : "entypo",
          "PaymentType" : "entypo",
          "Settings" :"feather"
        };

        return <Icon color={tintColor} name={items[routeName]} type={itemsType[routeName]}/>

      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
      inactiveTintColor :'gray',
      scrollEnabled: true,
      labelStyle: {
        fontSize: 10,
      },
    },
  }
);

const Main = createAppContainer(MainApp);
export default Main;