//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import {
    InputBox,
    ActionButton,
} from '../../../components/index';
import { RFValue } from 'react-native-responsive-fontsize';
import { width, height, totalSize } from 'react-native-dimension';
import AIcon from 'react-native-vector-icons/AntDesign';
AIcon.loadFont;
// create a component
const ForgotPasswordScreen = ({
    navigation,
}) => {
    
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle:"Forgot Password",
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
                            <Text style={styles.textheaderStyles}>Forgot Your Jim's Group Password?</Text>
                        </View>
                        <View style={styles.forgotTextStyle}>
                            <Text style={styles.textforgotStyle}>Please enter your registered email below and submit your request. We will send you an email to reset your password.</Text>
                        </View>
                        <InputBox
                            placeholder="Email Address (e.g. abc@test.com)"
                        />
                        <ActionButton
                            title="submit"
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
        padding: 10,
        backgroundColor: '#ffffff',
    },
    textheaderStyles: {
        fontSize: RFValue(16),
        fontWeight: 'bold'
    },
    loginheader: {
        padding: 10,
        marginBottom: height(5),
        alignItems: 'center',
        justifyContent: 'center'
    },
    forgotTextStyle: {
        // marginHorizontal:8,
        paddingLeft: 10,
        paddingBottom: 10,
    },
    textforgotStyle: {
        fontSize: RFValue(16),
        // fontWeight: 'bold'
    }
});

//make this component available to the app
export default ForgotPasswordScreen;
