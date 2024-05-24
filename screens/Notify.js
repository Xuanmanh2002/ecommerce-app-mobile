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
} from 'react-native';
import React, { useState } from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function Notify() {
    const screenWidth = Dimensions.get('window').width;
    const navigation = useNavigation();
    return (
        <View
            style={{
                paddingTop: Platform.OS === "android" ? 40 : 0,
                flex: 1,
                backgroundColor: "#F8F8F8",
            }}>
            <View style={{ top: 0, left: 0 }}>
                <View style={{
                    padding: 32
                }}>
                    <View
                        style={{
                            paddingTop: 15,
                            position: 'absolute',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5,
                            paddingRight: 1,
                            width: screenWidth - 30 + 20,
                            paddingLeft: 85,
                            borderBottomColor: 'lightgray',
                            paddingBottom: 15
                        }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                            <Text
                                style={{ width: '100%', fontSize: 20, textAlign: 'center' }}

                            >Thông báo</Text>
                        </View>
                        <Pressable onPress={() => navigation.navigate('Cart', { isNavigation: false })}>
                            <AntDesign style={{ marginRight: 15 }} name="shoppingcart" size={28} color="tomato" />
                        </Pressable>
                        <Pressable>
                            <AntDesign name="message1" size={24} color="tomato" />
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={{ borderBottomWidth: 10, borderBottomColor: 'lightgray', width: '100%' }} />

            <View style={{ marginTop: 10 }}>
                <View style={{
                    padding: 10,
                    backgroundColor: 'white'
                }}>
                    <Pressable style={{
                        borderBottomWidth: 1,
                        borderBottomColor: '#d3d3d3',
                        paddingBottom: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            backgroundColor: '#ffffff',
                            borderWidth: 2,
                            borderColor: '#d3d3d3',
                        }}>
                            <AntDesign name="tago" size={20} color="orange" />
                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            paddingLeft: 10,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <View>
                                <Text>Khuyến mãi</Text>
                                <Text style={{
                                    color: '#C0C0C0', fontSize: 12, width: 330
                                }}>Mã sẽ hết hạn vào 19-05-2024...</Text>
                            </View>
                            <AntDesign name="right" size={17} color="#696969" />
                        </View>
                    </Pressable>
                    <Pressable style={{
                        paddingTop: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#d3d3d3',
                        paddingBottom: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            backgroundColor: '#ffffff',
                            borderWidth: 2,
                            borderColor: '#d3d3d3',
                        }}>
                            <Ionicons name="wallet-outline" size={20} color="tomato" />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View>
                                <Text>Thông tin Tài chính</Text>
                                <Text style={{ color: '#C0C0C0', fontSize: 12, width: 300 }}>Có SPayLater chốt đơn thoả thích dịp ahahahahahah......</Text>
                            </View>
                            <View style={{ backgroundColor: 'red', borderRadius: 50, width: 20, height: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
                                <Text style={{ color: 'white', fontSize: 10 }}>2</Text>
                            </View>
                            <AntDesign name="right" size={17} color="#696969" />
                        </View>
                    </Pressable>

                    <Pressable style={{
                        paddingTop: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#d3d3d3',
                        paddingBottom: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            backgroundColor: '#ffffff',
                            borderWidth: 2,
                            borderColor: '#d3d3d3',
                        }}>
                            <Ionicons name="bag-outline" size={18} color="tomato" />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View>
                                <Text>Cập nhật Shopee</Text>
                                <Text style={{ color: '#C0C0C0', fontSize: 12, width: 300 }}>Để được hỗ trợ nhanh chóng và thuận tiện...</Text>
                            </View>
                            <View style={{ backgroundColor: 'red', borderRadius: 50, width: 20, height: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
                                <Text style={{ color: 'white', fontSize: 10 }}>6</Text>
                            </View>
                            <AntDesign name="right" size={17} color="#696969" />
                        </View>
                    </Pressable>

                    <Pressable style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            backgroundColor: '#ffffff',
                            borderWidth: 2,
                            borderColor: '#d3d3d3',
                        }}>
                            <Feather name="gift" size={18} color="tomato" />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View>
                                <Text>Giải thưởng shopee</Text>
                                <Text style={{ color: '#C0C0C0', fontSize: 12, width: 300 }}>bfìibnrnrnrj và 1 người bạn đã tưới nước 35...</Text>
                            </View>
                            <AntDesign name="right" size={17} color="#696969" />
                        </View>
                    </Pressable>
                </View>
                <View style={{
                    backgroundColor: 'gainsboro',
                    width: "100%",
                    height: 40,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                }}>
                    <Text style={{ color: 'dimgray', fontSize: 13 }}>Cập nhật đơn hàng</Text>
                    <Pressable>
                        <Text style={{ color: 'gray', fontSize: 13 }}>Đọc tất cả</Text>
                    </Pressable>
                </View>
                <View style={{ marginTop: 30, paddingBottom: 40 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                        <Image
                            source={{ uri: 'https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/4e653cf704e352fd.png' }}
                            style={{ width: 80, height: 80 }}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 70 }}>
                        <Pressable style={{
                            borderWidth: 1,
                            borderColor: 'tomato',
                            width: 100,
                            height: 27,
                            borderRadius: 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={{ color: 'tomato', fontSize: 13 }}>Mua sắm ngay</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={{
                    backgroundColor: 'gainsboro',
                    width: "100%",
                    height: 300,
                    paddingHorizontal: 10,
                }} />

            </View>
        </View>
    );
}
