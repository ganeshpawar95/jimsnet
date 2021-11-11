//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
// create a component
const InputBox = ({
    onChangeText,
    value,
    placeholder,
    secureTextEntry,
    inputAccessoryViewID,
    keyboardType,
    rightIcon,
    onIconPress,
    ...props
}) => {
    return (
        <View >
            <TextInput
                value={value}
                style={styles.TextInputStyle}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#78746D"
                autoCapitalize="none"
                {...props}
                secureTextEntry={secureTextEntry}
                inputAccessoryViewID={inputAccessoryViewID}
                keyboardType={keyboardType ? keyboardType : 'default'}
            />
            {rightIcon && (
                <Icon
                    name={rightIcon}
                    style={styles.iconStyle}
                    onPress={onIconPress}
                />
            )}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    TextInputStyle: {
        // height: 45,
        minHeight:45,
        margin: 12,
        borderWidth: 1,
        borderColor: '#BEBAB3',
        padding: 10,
        borderRadius: 12,
        color: '#000',
    },
    iconStyle: {
        fontSize: 25,
        color: '#78746D',
        position: 'absolute',
        right: 25,
        top: 20,
    },

});

//make this component available to the app
export default InputBox;
