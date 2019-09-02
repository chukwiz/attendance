import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from "react-navigation";
import Icon from '@expo/vector-icons/MaterialIcons'
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/Camera/Camera';
import Profile from '../screens/Profile';

const TabNavigator = createMaterialBottomTabNavigator(
    {
      Home: { 
          screen: HomeScreen,
        },
      Camera: { 
        screen: CameraScreen,
      },
      Profile: {screen: Profile,}
    },
    {
        initialRouteName:'Camera',
        showIcon: true,
        activeColor:"#46225ee3",
        inactiveColor:"#c3c5c7",
        shifting:true,
        animationEnabled:true,
        showLabel:false,
        barStyle: { backgroundColor: '#fff' },
        defaultNavigationOptions:({navigation}) => {
            return{
                tabBarIcon:({tintColor}) => {
                    const{routeName} = navigation.state
                    let myIcon;

                    if(routeName === 'Home'){
                        myIcon = 'home'
                    }else if(routeName === 'Camera'){
                        myIcon = 'camera'
                    }else if(routeName === 'Profile'){
                        myIcon = 'person'
                    }
                    return(
                        <Icon name = {myIcon} size = {25} color = {tintColor} />
                    )
                },
                
            }
        }
    },
  );

  export default createAppContainer(TabNavigator);

    
