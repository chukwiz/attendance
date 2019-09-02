import React from 'react';
import {View,Text,StyleSheet,Dimensions} from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Ionicons';
import {NavigationEvents,withNavigationFocus} from 'react-navigation';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export default class CameraScreen extends React.Component{
    
    state = {
        hasCameraPermission:null,
        type:Camera.Constants.Type.front,
        isFocused:true,
        loaded: true,
    };

    async componentDidMount(){
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission:status === 'granted'});
    }
        
    backCamera = () => {
        this.setState({
            type:this.state.type === Camera.Constants.Type.front ? Camera.Constants.Type.back:Camera.Constants.Type.front
        })
    }

 
    

    render(){
        const { loaded } = this.state;

        const {hasCameraPermission} = this.state;
        
        if(hasCameraPermission === null){
            return <View/>;
        }
        else if(hasCameraPermission === false){
            return(
                <Text>No Access to Camera</Text>
            )
        }
        else{
            return(
                <View style={{flex:1}}>
                {/* <NavigationEvents
          onWillFocus={payload => {
            alert("will focus", payload);
          }}
        /> */}
        <NavigationEvents
          onWillFocus={payload => this.setState({loaded: true})}
          onDidBlur={payload => this.setState({loaded: false})}/>

{loaded && ( <Camera style={styles.preview} type={this.state.type}>
                        <View style = {styles.camView}>
                            <TouchableOpacity styles = {styles.backCam} onPress={this.backCamera}>
                                <Icon name="md-reverse-camera" style={styles.reverseCamera} size={25} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </Camera>
)}
                </View>
            )
        }
        
    }
}

const styles = StyleSheet.create({
    camView:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"transparent",
        alignSelf:"flex-end",
        position:"absolute",
        top:30,
        right:20,
    },
    backCam:{
        flex:0.1,
    },
    reverseCamera:{
        color:"#fff",
        fontWeight:"bold",
    },
    preview:{
        height: HEIGHT,
        width: WIDTH,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    }
})

// import { NavigationEvents } from 'react-navigation';
// state = { loaded: true }
// render() {
//     const { loaded } = this.state;
//     return (
//       <View style={styles.container}>
//         <NavigationEvents
//           onWillFocus={payload => this.setState({loaded: true})}
//           onDidBlur={payload => this.setState({loaded: false})}/>
//       <View style={styles.cameraArea}>
//         {loaded && (
//           <Camera
//             type={Camera.Constants.Type.back}
//             ref={ref => {
//               this.camera = ref;
//             }}
//           />
//           )}

//         </View>