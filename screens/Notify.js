import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ToastAndroid,
    SafeAreaView,
    Platform,
    Pressable,
    Image,
    Dimensions,
    Button,
} from 'react-native'
import React, { useState } from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import axios from "axios";



export default function Notify() {
    const screenWidth = Dimensions.get('window').width;
    const shadowStyle = {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    };
    const navigation = useNavigation();
    const list = [
    ];

    const images = [
        "https://img.etimg.com/thumb/msid-93051525,width-1070,height-580,imgsize-2243475,overlay-economictimes/photo.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/PD23/Launches/Updated_ingress1242x550_3.gif",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/BB/JULY/1242x550_Header-BB-Jul23.jpg",
    ];

    const deals = [
    ];

    const offers = [
    ];
    return (
        <SafeAreaView
            style={{
                paddingTop: Platform.OS === "android" ? 40 : 0,
                flex: 1,
                backgroundColor: "#F8F8F8",
            }}>
            <View style={{ top: 0, left: 0 }}>
                <View style={{ padding: 30, position: 'relative', flex: 1, ...shadowStyle }}>
                    <View
                        style={{
                            paddingTop: 5,
                            position: 'absolute',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: screenWidth - 30 + 20,
                            paddingLeft: 5,
                        }}>
                        <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                            <TextInput
                                style={{ width: '100%', fontSize: 20, textAlign: 'center' }}
                                placeholder="Thông báo"
                                placeholderTextColor="black"
                            />
                        </Pressable>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart', { isNavigation: false })}>
                            <AntDesign style={{ marginRight: 10 }} name="shoppingcart" size={28} color="tomato" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name="message1" size={24} color="tomato" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 3, borderBottomWidth: 13, borderBottomColor: 'lightgray', width: '100%' }} />
            </View>
        </SafeAreaView>
    )
}
