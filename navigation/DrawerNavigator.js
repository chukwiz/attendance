import React from 'react';
import {Dimensions} from 'react-native';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import Link from '../screens/LinkScreen';
import Settings from '../screens/SettingsScreen';
import Home from '../screens/HomeScreen';
import MenuDrawer from '../components/MenuDrawer';
import TabNavigation from '../navigation/TabNavigation';

const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
    drawerWidth:WIDTH*0.8,
    contentComponent:({navigation}) => {
        return(
            <MenuDrawer navigation={navigation} />
        )
    },
    hideStatusBar: true,
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
}



const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen:TabNavigation,
          
    },
    Links:{
        screen:Link
    },
    settings:{
        screen:Settings
    }
},
// {contentOptions:{
//     activeBackgroundColor:"#000",
//     activeTintColor:"#fff",
// }}

DrawerConfig,

  )

export default createAppContainer(DrawerNavigator);