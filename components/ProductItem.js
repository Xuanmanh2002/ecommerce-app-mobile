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
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const ProductItem = ({ item }) => {
    const exchangeRate = 24000;
    const priceInVND = item.price * exchangeRate;
    return (
        <Pressable
            style={{
                marginTop: 10,
                marginLeft: 8,
                flex: 1,
                borderWidth: 1,
                borderColor: '#d1d5db',
            }}>
            <Image
                style={{ width: 150, height: 150, resizeMode: "contain", filter: 'grayscale(100%)' }}
                source={{ uri: item?.image }}
            />
            <Text numberOfLines={2} style={{ width: 150, marginTop: 10, marginLeft: 8, }}>
            [Mã {item?.id}] {item?.title}
            </Text>
            <View style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                width: 100,
                height: 20,
                marginLeft: 8,
                borderWidth: 1,
                borderColor: '#fdba74',
                marginBottom: 8
            }}>
                <Text style={{ fontSize: 11, color: '#fdba74' }}>Mua để nhận quà</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
                marginLeft: 8 // Thêm marginLeft để căn chỉnh vị trí của giá tiền và icon
            }}>
                <Text style={{ fontSize: 15, color: 'tomato', marginRight: 8 }}>{Math.floor(priceInVND.toFixed(0)).toLocaleString('vi-VN')} VNĐ</Text>
                <Pressable style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <AntDesign name="shoppingcart" size={24} color="white" />
                </Pressable>
            </View>
        </Pressable>
    )
}

export default ProductItem
