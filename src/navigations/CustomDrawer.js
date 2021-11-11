//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import { width, height, totalSize } from 'react-native-dimension';
import { RFValue } from 'react-native-responsive-fontsize';
import { Avatar } from 'react-native-paper';
import AIcon from 'react-native-vector-icons/AntDesign';
AIcon.loadFont();
// create a component

const ManuFunction = ({
    IconManu,
    title,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={styles.ManuList}
            onPress={onPress}
        >
            {IconManu}
            <Text style={styles.menuTitleStyle}>{title}</Text>
        </TouchableOpacity>
    )
}
function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props} style={styles.container}>
            <View style={styles.DrawerListWarper}>
                <Avatar.Image size={80}
                    source={require('../assets/download1.png')}
                />
                <Text style={styles.HeaderTitleStyle}> User Name</Text>
            </View>
            <ManuFunction
                onPress={() =>
                    props.navigation.navigate("request")
                }
                title="Home"
                IconManu={<AIcon
                    name="home"
                    color="black"
                    size={30}
                />
                }
            />

            <ManuFunction
                onPress={() =>
                    props.navigation.navigate("request")
                }
                title="Request A Quote"
                IconManu={<AIcon
                    name="contacts"
                    color="black"
                    size={30}
                />
                }
            />

            <ManuFunction
                onPress={() =>
                    props.navigation.navigate("profle")
                }
                title="Profile"
                IconManu={<AIcon
                    name="profile"
                    color="black"
                    size={30}
                />
                }
            />

            <ManuFunction
                onPress={() =>
                    props.navigation.navigate("request")
                }
                title="Log out"
                IconManu={<AIcon
                    name="logout"
                    color="black"
                    size={30}
                />
                }
            />

        </DrawerContentScrollView>
    );
};
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1fdfe',
    },
    DrawerListWarper: {
        alignItems: 'center',
        marginTop: height(5),
        marginBottom: height(5)
    },
    HeaderTitleStyle: {
        fontSize: RFValue(15),
        fontWeight: "bold"
    },
    ManuList: {
        flexDirection: 'row',
        // margin: 10,
        marginTop: height(2),
        marginLeft: width(4),
        // padding: 10,
        alignItems: 'center',
        // marginLeft:
    },
    menuTitleStyle: {
        fontSize: RFValue(15),
        fontWeight: "bold",
        marginLeft: 10
    }
});

//make this component available to the app
export default CustomDrawer;
