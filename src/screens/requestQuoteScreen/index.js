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
import InputBox from '../../components/InputBox';
import ActionButton from '../../components/ActionButton';
import ModalCard from '../../components/ModalCard';

import AIcon from 'react-native-vector-icons/AntDesign';
AIcon.loadFont;
import NIcon from 'react-native-vector-icons/Ionicons';
NIcon.loadFont();
// create a component
const RequestQuoteScreen = ({ navigation }) => {
    const title = "SELECT THE JIM’S SERVICE YOU NEED";
    const Filters = "Sort"
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
            imageurl: 'https://app.internal.jims.net/uploads/images/7_not-fms/handyman.png',
            title: 'Blind Cleaning & Repairs',
        },


        
    ];
    const [loading, setLoading] = useState(false);
    const [update, setUpdate] = useState(false);
    const [showFilter, setshowFilter] = useState(false)
    const [popular, setpopular] = useState(false);
    const [allFilter, setAllFilter] = useState(true);

    const [responseArray, setResponseArray] = useState();
    const [tmp, setTmp] = useState();
    const [searchText, setSearchText] = useState('');

    React.useLayoutEffect(() => {
        navigation.setOptions({
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
            //   headerRight: () => <HeaderRight nav={navigation} />,
        });
    }, [navigation]);
    const onRequestClose = () => {
        setshowFilter(!showFilter);
    }
    const ApplyFilter = () => {
        let tArray = [];
        if (allFilter) {
            setTmp(responseArray);
        } else {
            // for (let i = 0; i < responseArray.length; i++) {
            //     if (popular) {
            //         if (responseArray[i].type === 'popular') {
            //             tArray.push(responseArray[i]);
            //         }
            //     }
            // }
            // setTmp(tArray);
        }
        setshowFilter(false);
    };
    const FilterList = props => {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.filterListWrapper}>
                    <View style={styles.filterListIcon}>
                        <NIcon
                            name={props.filter ? 'checkbox' : 'square-outline'}
                            style={styles.filterListIcon}
                        />
                    </View>
                    <View style={styles.filterListText}>
                        <Text style={[styles.filterListText, { color: props.color }]}>
                            {props.title}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    const RequestCard = props => {
        return (
            <TouchableOpacity onPress={props.onPress} style={styles.RequestTouchableStyle}>
                <View style={styles.RequestListWrapper}>
                    <View style={styles.requestTextStyle}>
                        <Text style={[styles.requestTextStyle, { color: props.color }]}>
                            {props.title}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    const Content = props => {
        return (
            <>
                <Text style={styles.ModalHeaddingStyle}>{Filters}</Text>
                <FilterList
                    title="A-Z"
                    color={'#000'}
                    filter={DATA}
                //   onPress={() => {
                //     setAllFilter(!allFilter);
                //     setAdjectiveFilter(false);
                //     setNounFilter(false);
                //     setAdverbFilter(false);
                //     setVerbFilter(false);
                //   }}
                />
                <FilterList
                    title="Popular"
                    color={'#a9d18e'}
                    filter={DATA}
                //   onPress={() => {
                //     setAdjectiveFilter(!adjectiveFilter);
                //     setAllFilter(false);
                //   }}
                />
                <ActionButton
                    title="Done"
                    onPress={() => {
                        ApplyFilter();
                    }}
                />
            </>
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
                <InputBox
                    placeholder="Search for Mowing, Cleaning, Fencing, etc"
                    rightIcon="menu-outline"
                    onIconPress={() => {
                        Keyboard.dismiss();
                        setshowFilter(true);
                    }}
                />
                <FlatList
                    numColumns={2}
                    data={DATA}
                    renderItem={({ item }) => (
                        <RequestCard
                            // imageurl={item.imageurl}
                            title={item.title}
                        />
                    )}
                />
                <ModalCard
                    visiblemodal={showFilter}
                    onRequestClose={onRequestClose}
                    content={<Content />}
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
        margin: 7,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    filterListIcon: {
        fontSize: 30,
        color: '#666666',
    },
    filterListText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    requestTextStyle: {
        fontSize: RFValue(15, 580),
        color: '#333',
        fontWeight: "bold",
    },
    ModalHeaddingStyle: {
        fontSize: RFValue(18, 580),
        textAlign: 'center',
        fontWeight: "bold",
        paddingHorizontal: 15,
    },
    RequestTouchableStyle:{
        flex:1
    }

});
//make this component availabole to the app
export default RequestQuoteScreen;
