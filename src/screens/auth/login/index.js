//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
    MainLogo,
    HeaderImage,
    InputBox,
    ActionButton,
    CheckBox
} from '../../../components/index';
import { width, height, totalSize } from 'react-native-dimension';
// create a component
const LoginScreen = ({ props, navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: props => <HeaderImage {...props} />,
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTitleAlign: 'center',
            headerBackVisible: false,
        });
    }, [navigation]);
    return (
        <SafeAreaView>
            <ScrollView >
                <View style={styles.container}>
                    <View style={styles.loginviewWrapper}>
                        <View style={styles.loginheader}>
                            <Text style={styles.textheaderStyles}>Jim's Customer Login</Text>
                        </View>
                        <InputBox placeholder="enter you email" />
                        <InputBox placeholder="enter you password" />
                        <CheckBox
                            title="Remember my login"
                            filter={true}
                        />
                        <View style={styles.loginfooter}>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("forgot-password")
                                }
                            >
                            <Text style={styles.forgotPassword}>Forgot Password?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("signup")
                                }
                            >
                            <Text style={styles.createAccount}>Create New Account</Text>
                            </TouchableOpacity>
                        </View>
                        <ActionButton
                            title="Login"
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
        color: 'white'
    },
    loginheader: {
        backgroundColor: '#3f4fd6',
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
    }
});

//make this component available to the app
export default LoginScreen;
