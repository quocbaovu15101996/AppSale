import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HomeRouters from './routers/HomeRouters';

export default class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <HomeRouters />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});