//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, RefreshControl, SafeAreaView, ImageBackground, ScrollView, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import ServiceCard from '../../components/ServiceCard';
import { width, height, totalSize } from 'react-native-dimension';
// create a component
const ServiceScreen = ({ navigation }) => {
    const title = "Which  service";
    const DATA = [
        {
            imageurl: 'https://app.internal.jims.net/uploads/images/1_not-fms/mowing.png',
            title: 'Jims MOWING',
        },
        {
            imageurl: 'https://app.internal.jims.net/uploads/images/2_not-fms/dogwash.png',
            title: 'Jims DOG WASH',
        },
        {
            imageurl: 'https://app.internal.jims.net/uploads/images/4_not-fms/fencing.png',
            title: 'Jims FENCING',
        },
        {
            imageurl: 'https://app.internal.jims.net/uploads/images/5_not-fms/cleaning.png',
            title: 'Jims CLEANING',
        },
        {
            imageurl: 'https://app.internal.jims.net/uploads/images/7_not-fms/handyman.png',
            title: 'Jims HANDYMAN',
        },
        {
            imageurl: 'https://app.internal.jims.net/uploads/images/17_not-fms/termiteandpestcontrol.png',
            title: 'Jims TERMITE & PEST CONTROL',
        },
        {
            imageurl: 'https://app.internal.jims.net/uploads/images/9_not-fms/antennas.png',
            title: 'Jims ANTENNAS',
        },
        {
            imageurl: 'https://app.internal.jims.net/uploads/images/26_not-fms/bathresurfacing.png',
            title: 'Jims BATH RESURFACING',
        },
        {
            imageurl: 'https://app.internal.jims.net/uploads/images/23_not-fms/bincleaning.png',
            title: 'Jims BIN CLEANING',
        },





    ];
    const [loading, setLoading] = useState(false);
    const [update, setUpdate] = useState(false);
    return (

        <SafeAreaView style={styles.container}>
            {loading && <ActivityIndicator size="large" />}
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={loading}
                        onRefresh={() => {
                            setUpdate(!update);
                        }}
                    />
                }
            >
                <ImageBackground
                    source={require('../../assets/png/Group35.png')}
                    resizeMode="cover"
                    style={{ width: width(100), height: height(100), flex: 1 }}
                >
                    <View style={styles.TestWapers}>
                        <Text style={styles.TtileStyle}>Which <Text style={styles.servicetext}> service</Text> </Text>
                        <Text style={styles.TtileStyle}>do you</Text>
                        <Text style={styles.SecondsTlyes}>need?</Text>
                    </View>
                    <FlatList
                        numColumns={2}
                        data={DATA}
                        style={{margin:27}}
                        renderItem={({ item }) => (
                            <ServiceCard
                                navigation={navigation}
                                imageurl={item.imageurl}
                                title={item.title}
                            />
                        )}
                    />
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>


    );
};
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 10,
        // backgroundColor: '#f1fdfe'
        // backgroundColor: '#cff3f8',
    },
    TtileStyle: {
        fontSize: RFValue(18, 580),
        // textAlign: 'center',
        padding: 5,
        paddingHorizontal: 15,
    },
    servicetext: {
        color: '#ff8589',
        fontSize: RFValue(18, 580),
        padding: 5,
        paddingHorizontal: 15,
    },
    SecondsTlyes: {
        fontSize: RFValue(18, 580),
        padding: 5,
        paddingHorizontal: 15,
        color: '#80deea'
    },
    TestWapers: {
        marginTop: height(5),
        marginBottom: height(10),
        marginLeft: 15,
    }
});
//make this component availabole to the app
export default ServiceScreen;
