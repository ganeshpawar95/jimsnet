//import liraries
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    Keyboard,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { width, height, totalSize } from 'react-native-dimension';
import { ActionButton } from '../../../components/index'
import AIcon from 'react-native-vector-icons/AntDesign';
AIcon.loadFont;
import NIcon from 'react-native-vector-icons/Ionicons';
NIcon.loadFont();

// create a component
const ServiceSecondScreen = ({ navigation }) => {
    const DATA = [
        {
            imageurl: 'https://app.internal.jims.net/uploads/images/1_not-fms/mowing.png',
            title: 'Jims MOWING',
            check: true,
        },
        {
            imageurl: 'https://app.internal.jims.net/uploads/images/2_not-fms/dogwash.png',
            title: 'Jims DOG WASH',
            check: false,
        },
        {
            imageurl: 'https://app.internal.jims.net/uploads/images/4_not-fms/fencing.png',
            title: 'Jims FENCING',
            check: true,
        },
        {
            imageurl: 'https://app.internal.jims.net/uploads/images/5_not-fms/cleaning.png',
            title: 'Jims CLEANING',
            check: true,
        },
        {
            imageurl: 'https://app.internal.jims.net/uploads/images/7_not-fms/handyman.png',
            title: 'Jims HANDYMAN',
            check: false,
        },
        {
            imageurl: 'https://app.internal.jims.net/uploads/images/7_not-fms/handyman.png',
            title: 'Blind Cleaning & Repairs',
            check: false,

        },
    ];
    const [loading, setLoading] = useState(false);
    const [update, setUpdate] = useState(false);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Select Services - 2/4",
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

    const RequestCard = props => {

        return (
            <TouchableOpacity onPress={props.onPress} style={styles.RequestTouchableStyle}>
                <View style={styles.RequestListWrapper}>
                    {/* <AIcon
                        name="check"
                        size={30}
                        color="#4285f4"
                    /> */}
                    <NIcon
                        size={30}
                        color={props.filter ? "#4285f4" : '#666666'}
                        name={props.filter ? 'checkbox' : 'square-outline'}

                        style={styles.filterListIcon}
                    />
                    <Text
                        ellipsizeMode="tail"
                        numberOfLines={1}
                        style={[styles.requestTextStyle, { color: props.color }]}
                    >
                        {props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {loading && <ActivityIndicator size="large" />}
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={loading}
                        onRefresh={() => {
                            setUpdate(!update);
                        }}
                    />
                }
            >
                <FlatList
                    style={styles.FlatListStyle}
                    numColumns={2}
                    data={DATA}
                    renderItem={({ item }) => (
                        <RequestCard
                            title={item.title}
                            filter={item.check}
                        />
                    )}
                />
                <ActionButton
                    title="Next"
                />
            </ScrollView>
        </SafeAreaView>
    );
};
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff'
    },
    FlatListStyle: {
        marginTop: height(5),
        marginBottom:height(10),
    },
    TtileStyle: {
        fontSize: RFValue(22, 580),
        textAlign: 'center',
        padding: 5,
        paddingHorizontal: 15,
    },
    filterListWrapper: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    RequestListWrapper: {
        backgroundColor: '#d2d2d2',
        // backgroundColor:'#0155a5',
        margin: 7,
        minHeight: 80,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    requestTextStyle: {
        fontSize: RFValue(12, 580),
        color: '#333',
        fontWeight: "bold",
    },
    RequestTouchableStyle: {
        flex: 1,
    },
    iconMarginBottom: {
        marginLeft: 10
    }

});
//make this component availabole to the app
export default ServiceSecondScreen;

