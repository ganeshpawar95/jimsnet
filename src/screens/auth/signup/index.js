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

const SignupScreen = ({ props, navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Create Account",
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
                            <Text style={styles.textheaderStyles}>Jim's Group Customer Account</Text>
                            <Text style={styles.textheaderStyles}>Signup</Text>
                        </View>
                        <InputBox
                            placeholder="Enter You User Name"
                        />
                        <InputBox
                            placeholder="Enter You Email"
                        />
                        <InputBox
                            placeholder="Enter You Password"
                            secureTextEntry={true}
                        />
                        <View style={styles.loginfooter}>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("login")
                                }
                            >
                                <Text style={styles.forgotPassword}>already have an account on Jim's? <Text style={styles.loginword}>Login</Text> </Text>
                            </TouchableOpacity>
                        </View>
                        <ActionButton
                            title="Signup"
                        />
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
    loginword:{
        fontWeight:'bold',
        textDecorationLine:'underline'
    }
});

//make this component available to the app
export default SignupScreen;
