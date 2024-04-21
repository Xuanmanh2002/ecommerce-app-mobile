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
    const exchangeRate = 23000;
    // Chuyển đổi giá từ USD sang VNĐ
    const priceInVND = item.price * exchangeRate;
    return (
        <TouchableOpacity style={{ overflow: 'hidden', borderRadius: 10, marginRight: 7, marginBottom: 10, flex: 1, backgroundColor: 'white' }}>
            <Image
                style={{ width: 150, height: 150, resizeMode: "contain", filter: 'grayscale(100%)' }}
                source={{ uri: item?.image }}
            />
            <Text style={{ marginTop: 10, marginLeft: 8, fontSize: 17 }} numberOfLines={2}>{item?.title.substring(0, 10)}</Text>
            <View style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'tomato',
                width: 80,
                height: 30,
                marginLeft: 8,
                borderWidth: 1,
                borderColor: 'transparent',
                borderTopLeftRadius: 4,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 4,
                marginBottom: 8
            }}>
                <Text style={{ fontSize: 15, color: 'white' }}>Mua để nhận quà</Text>
            </View>
            <Text style={{ fontSize: 15, color: 'tomato' }}>{Math.floor(priceInVND.toFixed(0)).toLocaleString('vi-VN')} VNĐ</Text>
            <AntDesign name="shoppingcart" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default ProductItem
