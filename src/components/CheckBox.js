/** react */
import React from 'react';
/** react-native */
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
/** External Packages */
import { RFValue } from 'react-native-responsive-fontsize';
import NIcon from 'react-native-vector-icons/Ionicons';
NIcon.loadFont();

const CheckBox = props => {
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

export default CheckBox;

const styles = StyleSheet.create({
    filterListWrapper: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
      },
      filterListIcon: {
        fontSize: 30,
        color: '#666666',
      },
      filterListText: {
        fontSize: RFValue(14),
        fontWeight: 'bold',
      },
});
