import React from 'react';
import {Dimensions,Platform,StyleSheet,Text,View,TouchableOpacity,Image,ScrollView} from 'react-native';

export default class MenuDrawer extends React.Component{

    navLink(nav, text){
        return(
            <TouchableOpacity style={{height:50}} onPress = {() => {this.props.navigation.navigate(nav)}} >
                <Text style = {styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }
    render(){
        return(
            <View style={styles.container}>
            <ScrollView style={styles.scroller}>
                <View style={styles.topLinks}>
                    <View style={styles.profile}>
                        <View style={styles.imgView}>
                            <Image style={styles.image} source={require('../assets/resume.jpg')} />
                        </View>
                        <View style={styles.profileText}>
                            <Text style={styles.name}>Wisdom Chukwuma</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomLinks}>
                    {this.navLink('Home','Home')}
                    {this.navLink('Links','Link')}
                    {this.navLink('settings','Settings')}
                </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Text style={styles.description}>Early</Text>
                    <Text style={styles.version}>v1.0</Text>
                </View>
                
            </View>
        )
    }
}

styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#46225ee3",
    },
    topLinks:{
        height:150,
        backgroundColor:"#46225ee3",
    },
    bottomLinks:{
        flex:1,
        backgroundColor:"#fff",
        paddingTop:10,
        paddingBottom:"100%",
    },
    image:{
        height:70,
        width:70,
        borderRadius:50,
    },
    profile:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        paddingTop:25,
        borderBottomWidth:1,
        borderBottomColor:"#777",
    },
    imgView:{
        flex:1,
        paddingLeft:30,
        paddingLeft:30,
    },
    profileText:{
        flex:3,
        flexDirection:"column",
        justifyContent:"center"
    },
    name:{
        fontSize:18,
        paddingBottom:5,
        color:"#fff",
        textAlign:"center",
    },
    link:{
        flex:1,
        fontSize:16,
        padding:6,
        paddingLeft:24,
        margin:5,
        textAlign:"left",
    },
    activeLink:{
        flex:1,
        fontSize:16,
        padding:6,
        paddingLeft:24,
        margin:5,
        textAlign:"left",
        color:"#fff",
        backgroundColor:"black",
    },
    footer:{
        // flex:1,
        height:50,
        flexDirection:"row",
        borderTopWidth:1,
        borderTopColor:"#dadada",
        backgroundColor:"#fff",
        // position: "absolute",
        // bottom: 0,
        // left: 0,
        // width: "100%",
    },
    description:{
        flex:1,
        marginLeft:30,
        fontSize:16,
        color:"#747474"
    },
    version:{
        flex:1,
        textAlign:"right",
        marginRight:20,
        color:"#7e7878",
    },
    scroller:{
        flex:1
    }
})