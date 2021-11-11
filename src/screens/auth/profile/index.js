//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AIcon from 'react-native-vector-icons/AntDesign';
AIcon.loadFont;
import {
    MainLogo,
    HeaderImage,
    InputBox,
    ActionButton,
    CheckBox
} from '../../../components/index';
import { width, height, totalSize } from 'react-native-dimension';
// create a component

const ProfileScreen = ({ props, navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Profile",
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <View style={styles.iconMarginBottom}>
                        <AIcon name="leftcircleo" size={30} color="#000" />
                    </View>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);
    return (
        <SafeAreaView>
            <ScrollView >
                <View style={styles.container}>
                    <View style={styles.loginviewWrapper}>
                        <View style={styles.loginheader}>
                            <Text style={styles.textheaderStyles}>Jim's Group Customer Edit Profile </Text>
                            {/* <Text style={styles.textheaderStyles}></Text> */}
                        </View>
                        <InputBox
                            placeholder="User Name"
                        />
                        <InputBox
                            placeholder="Email"
                        />
                        <InputBox
                            placeholder="Address"
                            multiline={true}
                            numberOfLines={4}

                        />
                        <View style={styles.loginfooter}>

                            <ActionButton
                                title="Update"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    loginviewWrapper: {
        height: height(70),
        margin: 15,
        marginTop: height(10),
        borderRadius: 10,
        // padding: 10,
        backgroundColor: '#ffffff',
    },
    textheaderStyles: {
        fontSize: RFValue(16),
        // color: 'white',
        fontWeight: 'bold'
    },
    loginheader: {
        // backgroundColor: '#3f4fd6',
        padding: 10,
        marginBottom: height(5),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginfooter: {
        marginTop: height(5),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    forgotPassword: {
        fontSize: RFValue(15),
        color: '#428bca',
        marginBottom: 10
    },
    createAccount: {
        fontSize: RFValue(15),
        color: '#428bca'
    },
    loginword: {
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    iconMarginBottom: {
        marginLeft: 10
    },
});

//make this component available to the app
export default ProfileScreen;

