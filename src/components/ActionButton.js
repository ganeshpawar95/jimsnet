/** react */
import React from 'react';
/** react-native */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
/** External Packages */
import {RFValue} from 'react-native-responsive-fontsize';

const ActionButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled ? props.disabled : false}>
      <View style={styles.Button}>
        <Text style={styles.ButtonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  Button: {
    backgroundColor: '#475AEA',
    borderRadius: 10,
    alignSelf: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 60,
    paddingRight: 60,
    marginTop: 10,
  },
  ButtonText: {
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: '500',
    textTransform:'uppercase',
    textAlign: 'center',
    fontSize: RFValue(14),
  },
});
