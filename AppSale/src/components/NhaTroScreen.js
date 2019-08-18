import React, { Component } from 'react';
import {
    Image,
    Text,
    View, TextInput, TouchableOpacity, KeyboardAvoidingView,
    Alert,
    ScrollView,
    Dimensions
} from 'react-native';
import { scale, verticalScale } from '../control/Scale';
import CusHeader from './HeaderFooter/CusHeader';
import CusFooter from './HeaderFooter/CusFooter';


export default class NhaTroScreen extends Component {
    constructor(props) {
        super(props)

    }

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CusHeader title={'Nhà Trọ'}/>
                <ScrollView>
                    <Text>Màn Hình Nhà Trọ</Text>
                </ScrollView>
                <CusFooter />
            </View>
        );
    }
}

