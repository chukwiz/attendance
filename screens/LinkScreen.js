import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuButton from '../components/MenuButton';
import {createStackNavigator,createAppContainer} from 'react-navigation';

class LinkScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Link',
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
      <Text style={styles.text}>Link</Text>
    </View>
  );
}
}

export default Link = createAppContainer(createStackNavigator({Link:LinkScreen}));

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
