import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'
import MenuButton from '../components/MenuButton';
import {createStackNavigator,createAppContainer} from 'react-navigation';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'Wisdom',
      lastName:'Chukwuma',
      calls: [
        {id:1,  name: "Mark Doe",    status:"active", image:"https://bootdey.com/img/Content/avatar/avatar7.png"},
        {id:2,  name: "Clark Man",   status:"active", image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
        {id:3,  name: "Jaden Boor",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
        {id:4,  name: "Srick Tree",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
      ]
    };
  }
  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerLeft: <MenuButton navigation = {navigation} />,
    headerStyle: {
      backgroundColor: '#4f1772',
    },
    headerTintColor: '#fff',
  });
renderItem = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={styles.row}>
        <Image source={{ uri: item.image }} style={styles.pic} />
        <View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
            <Text style={styles.mblTxt}>Mobile</Text>
          </View>
          <View style={styles.msgContainer}>
            <Text style={styles.msgTxt}>{item.status}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
      <Icon size={30} name="md-school" color="#222" style={styles.schoolIcon} />
      <View>
      <Text style={styles.welcomeTxt}>Welcome, {this.state.firstName}</Text>
      <Text style={styles.introTxt}>These are your courses for the day</Text>
      </View>
      </View>
      <View style={{ flex: 1 }} >
        <FlatList 
          extraData={this.state}
          data={this.state.calls}
          keyExtractor = {(item) => {
            return item.id;
          }}
          renderItem={this.renderItem}/>
      </View>
      
    </View>
  );
}
}

export default Home = createAppContainer(createStackNavigator({Home:HomeScreen}));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:30
  },
row: {
  flexDirection: 'row',
  alignItems: 'center',
  borderColor: '#DCDCDC',
  backgroundColor: '#fff',
  borderBottomWidth: 1,
  padding: 10,
},
pic: {
  borderRadius: 30,
  width: 60,
  height: 60,
},
nameContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: 280,
},
nameTxt: {
  marginLeft: 15,
  fontWeight: '400',
  color: '#222',
  fontSize: 18,
  width:170,
},
mblTxt: {
  fontWeight: '200',
  color: '#777',
  fontSize: 13,
},
msgContainer: {
  flexDirection: 'row',
  alignItems: 'center',
},
msgTxt: {
  fontWeight: '400',
  color: '#008B8B',
  fontSize: 12,
  marginLeft: 15,
},
welcomeTxt:{
  marginLeft:40,
  color:"#777",
  fontWeight:'400',
  fontSize:22,
  color:"#222",
  marginBottom:3,
},
introTxt:{
  marginLeft:40,
  fontSize:14,
  alignSelf:"center",
},
welcome:{
  alignContent:"center",
  marginBottom:10,
  borderBottomWidth: 1,
  borderColor:"#dcdcdc",
  flexDirection:"row",
},
schoolIcon:{
  alignSelf:"center",
}
});