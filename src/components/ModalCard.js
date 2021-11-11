//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';

// create a component
const ModalCard = ({
    visiblemodal,
    onRequestClose,
    content,
}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visiblemodal}
            onRequestClose={onRequestClose}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {content}
                </View>
            </View>
        </Modal>
    );
};

// define your styles
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        padding: 10,
        width: '80%',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
//make this component available to the app
export default ModalCard;
