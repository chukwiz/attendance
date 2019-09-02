import React from 'react';
import {StyleSheet,TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class MenuButton extends React.Component{
    render(){
        return(
            <TouchableOpacity>
            <Ionicons
                name="md-menu"
                color="#fff"
                size={24}
                style={styles.menuIcon}
                onPress={() => this.props.navigation.toggleDrawer()}
            />
    </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    menuIcon:{
        zIndex:9,
        alignSelf:"center",
        marginStart:15

    }
}) 