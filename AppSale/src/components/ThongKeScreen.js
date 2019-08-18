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
const win = Dimensions.get('window');

export default class ThongKeScreen extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        // firebase
        //     .firestore()
        //     .collection("CongViec")
        //     .add({
        //         name: 'ABC',
        //     })
        //     .then(() => {
        //         alert("Thêm thành công");
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CusHeader title={'Thống Kê'} />
                <ScrollView>
                    <Text>Màn Hình Thống Kê</Text>
                </ScrollView>
                <CusFooter />
            </View>
        );
    }
    .0
}
