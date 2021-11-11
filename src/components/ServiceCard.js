//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { RFValue } from 'react-native-responsive-fontsize';
import { width, height, totalSize } from 'react-native-dimension';

const ServiceCard = ({
    imageurl,
    title,
    navigation,
    ...props
}
) => {
    const [source, setSource] = useState(require('../assets/YourLocalExpert.png'))
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() =>
                navigation.navigate("service-second")
            }
        >
            <View style={styles.ServiceListWrapper}>
                <FastImage
                    style={styles.headerImage}
                    source={{ uri: imageurl }}
                    resizeMode={FastImage.resizeMode.cover}
                    onError={() => {
                        setSource(require('../assets/YourLocalExpert.png'));
                    }}
                />
                <Text ellipsizeMode="tail" numberOfLines={1} style={styles.TitleStyle}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
};
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ServiceListWrapper: {
        width: width(35.5),
        backgroundColor: '#f8feff',
        margin: 7,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        elevation: 5,
        shadowColor: '#52006A',
        // borderWidth:1,
        // borderColor:'#0155a5'

    },
    headerImage: {
        width: 60,
        height: 60,
        marginBottom: 5
    },
    TitleStyle: {
        fontSize: RFValue(14),
        fontWeight: 'bold',
    }
});
export default ServiceCard;
