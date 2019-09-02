import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuButton from '../components/MenuButton';
import {createStackNavigator,createAppContainer} from 'react-navigation';

class SettingsScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Settings',
    headerLeft: <MenuButton navigation = {navigation} />,
    headerStyle: {
      backgroundColor: '#4f1772',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });
  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
    </View>
  );
}
}

export default Settings = createAppContainer(createStackNavigator({Settings:SettingsScreen}));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:30
  }
});
