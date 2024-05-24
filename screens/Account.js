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
} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";
import { PreventRemoveContext, useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function Account() {
    const navigation = useNavigation();
    return (
        <View style={{
            paddingTop: Platform.OS === "android" ? 40 : 0,
            flex: 1,
            backgroundColor: "#F8F8F8",
        }}>
            <View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1,
            }}>
                <View style={{
                    paddingBottom: 20,
                    paddingTop: 60,
                    backgroundColor: 'tomato',

                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Pressable style={{
                                backgroundColor: 'white',
                                width: 150,
                                height: 30,
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderTopRightRadius: 100,
                                borderBottomRightRadius: 100,
                                paddingHorizontal: 5,
                            }}>

                                <MaterialCommunityIcons style={{ marginLeft: 5 }} name="storefront-outline" size={24} color="black" />
                                <Text style={{ marginLeft: 10, fontSize: 13 }}>Bắt đầu bán</Text>
                                <AntDesign style={{ marginLeft: 5 }} name="right" size={17} color="#696969" />
                            </Pressable>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Pressable>
                                <SimpleLineIcons name="settings" size={24} color="white" style={{ marginRight: 15 }} />
                            </Pressable>
                            <Pressable
                                onPress={() =>
                                    navigation.navigate('Cart', { isNavigation: false })
                                }>
                                <AntDesign
                                    name="shoppingcart"
                                    size={28}
                                    color="white"
                                    style={{ marginRight: 15 }}
                                />
                            </Pressable>
                            <Pressable>
                                <AntDesign name="message1" size={24} color="white" style={{ marginRight: 15 }} />
                            </Pressable>
                        </View>
                    </View>
                    <View style={{
                        marginLeft: 15,
                        marginTop: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Pressable style={{ position: 'relative' }}>
                            <Image
                                source={{ uri: 'https://i.pinimg.com/236x/78/01/52/7801521d734cb0e284734c4295e6947c.jpg' }}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 100,
                                }}
                            />
                            <MaterialIcons
                                name="edit"
                                size={12}
                                color="black"
                                style={{
                                    position: 'absolute',
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: 'white',
                                    borderRadius: 9,
                                    padding: 2,
                                }}
                            />
                        </Pressable>
                        <View style={{
                            marginLeft: 15,
                            justifyContent: 'center'
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Pressable>
                                    <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Jennie Kim</Text>
                                </Pressable>
                                <Pressable style={{
                                    marginLeft: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 50,
                                    height: 19,
                                    borderWidth: 1,
                                    borderColor: 'white',
                                    borderRadius: 8,
                                    backgroundColor: 'white'
                                }}>
                                    <Text style={{ color: 'black', fontSize: 12 }}>Bạc</Text>
                                    <AntDesign style={{ marginLeft: 5 }} name="right" size={11} color="gainsboro" />
                                </Pressable>
                            </View>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Pressable>
                                    <Text style={{ color: 'white' }}>1 Người theo dõi</Text>
                                </Pressable>
                                <Pressable style={{ marginLeft: 10 }}>
                                    <Text style={{ color: 'white' }}>4 Đang theo dõi</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 10,
                        backgroundColor: 'white',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <Pressable>
                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Đơn mua</Text>
                            </Pressable>
                            <Pressable style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Text style={{ fontSize: 12 }}>Xem lịch sử mua hàng</Text>
                                <AntDesign style={{ marginLeft: 5, marginRight: 10, }} name="right" size={14} color="gainsboro" />
                            </Pressable>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            paddingTop: 20,
                            paddingLeft: 10,
                            alignItems: 'center'
                        }}>
                            <Pressable style={{ alignItems: 'center' }}>
                                <AntDesign name="wallet" size={24} color="black" />
                                <Text style={{ fontSize: 12 }}>Chờ xác nhận</Text>
                            </Pressable>
                            <Pressable style={{ alignItems: 'center', paddingLeft: 30 }}>
                                <AntDesign name="inbox" size={24} color="black" />
                                <Text style={{ fontSize: 12 }}>Chờ lấy hàng</Text>
                            </Pressable>
                            <Pressable style={{ alignItems: 'center', paddingLeft: 30 }}>
                                <Feather name="truck" size={24} color="black" />
                                <Text style={{ fontSize: 12 }}>Chờ giao hàng</Text>
                            </Pressable>
                            <Pressable style={{ alignItems: 'center', paddingLeft: 30 }}>
                                <View style={{
                                    width: 25,
                                    height: 25,
                                    borderRadius: 12.5,
                                    backgroundColor: 'white',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderWidth: 1.6,
                                    borderColor: 'black',
                                }}>
                                    <EvilIcons name="star" size={23} color="black" />
                                </View>
                                <Text style={{ fontSize: 12 }}>Đánh giá</Text>
                            </Pressable>
                        </View>
                        <View style={{
                            paddingTop: 15,
                            paddingBottom: 5,
                            paddingRight: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <Pressable style={{
                                paddingLeft: 10,
                                flexDirection: 'row',
                                width: 190,
                                height: 35,
                                backgroundColor: 'white',
                                borderWidth: 1,
                                borderColor: 'gainsboro',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <Text style={{ fontSize: 12 }}>Đơn nạp thẻ và Dịch vụ</Text>
                                <AntDesign style={{ marginLeft: 5, marginRight: 10, }} name="right" size={14} color="gainsboro" />
                            </Pressable>
                            <Pressable style={{
                                paddingLeft: 10,
                                flexDirection: 'row',
                                width: 190,
                                height: 35,
                                backgroundColor: 'white',
                                borderWidth: 1,
                                borderColor: 'gainsboro',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <Text style={{ fontSize: 12 }}>Đơn ShopeeFood</Text>
                                <AntDesign style={{ marginLeft: 5, marginRight: 10, }} name="right" size={14} color="gainsboro" />
                            </Pressable>

                        </View>
                    </View>
                    <View style={{
                        paddingTop: 10,
                    }}>
                        <View style={{
                            padding: 10,
                            backgroundColor: 'white'
                        }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Tiện ích của tôi</Text>
                            <View style={{
                                flexDirection: 'row',
                                paddingTop: 20,
                                paddingLeft: 10,
                                alignItems: 'center'
                            }}>
                                <Pressable style={{ alignItems: 'center', marginRight: 25, marginTop: -26 }}>
                                    <Ionicons name="wallet-outline" size={24} color="black" />
                                    <Text style={{ fontSize: 12 }}>Ví ShopeePay</Text>
                                </Pressable>
                                <View style={{ marginRight: 25 }}>
                                    <Pressable style={{ alignItems: 'center' }}>
                                        <AntDesign name="wallet" size={24} color="black" />
                                        <Text style={{ fontSize: 12 }}>SPayLater</Text>
                                    </Pressable>
                                    <View style={{
                                        marginTop: 5,
                                        width: 90,
                                        height: 20,
                                        backgroundColor: 'white',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderWidth: 1,
                                        borderColor: 'tomato',
                                    }}>
                                        <Text style={{ fontSize: 12, color: 'tomato' }}>Kích hoạt ngay</Text>
                                    </View>
                                </View>
                                <Pressable style={{ alignItems: 'center', marginRight: 25 }}>
                                    <View style={{
                                        width: 25,
                                        height: 25,
                                        borderRadius: 12.5,
                                        backgroundColor: 'white',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderWidth: 1.6,
                                        borderColor: 'black',
                                    }}>
                                        <MaterialIcons name="attach-money" size={22} color="black" />
                                    </View>
                                    <Text style={{ fontSize: 12 }}>Shopee Xu</Text>
                                    <View style={{
                                        marginTop: 5,
                                        justifyContent: 'center',
                                    }}>
                                        <Text style={{ fontSize: 12, color: 'tomato' }}>300 Xu</Text>
                                    </View>
                                </Pressable>
                                <Pressable style={{ alignItems: 'center', marginRight: 10 }}>
                                    <Ionicons name="ticket-outline" size={24} color="black" />
                                    <Text style={{ fontSize: 12 }}>Kho voucher</Text>
                                    <View style={{
                                        marginTop: 5,
                                        justifyContent: 'center',
                                    }}>
                                        <Text style={{ fontSize: 12, color: 'tomato' }}>50+ Voucher</Text>
                                    </View>
                                </Pressable>
                            </View>

                        </View>
                    </View>
                    <View style={{
                        marginTop: 10,
                    }}>
                        <View style={{
                            paddingTop: 10,
                            paddingBottom: 10,
                            backgroundColor: 'white'
                        }}>
                            <Text style={{ paddingLeft: 10, fontSize: 14, fontWeight: 'bold' }}>Dịch vụ tài chính</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingLeft: 20, paddingRight: 10 }}>
                                <Pressable style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Ionicons name="shield-checkmark-outline" size={24} color="tomato" />
                                    <Text style={{ marginLeft: 5 }}> Bảo hiểm của tôi</Text>
                                </Pressable>
                                <Pressable style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'tomato', fontSize: 12 }}>Khám phá ngay!</Text>
                                    <AntDesign style={{ marginLeft: 5 }} name="right" size={11} color="gainsboro" />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        marginTop: 10,
                    }}>
                        <View style={{
                            paddingTop: 10,
                            paddingBottom: 10,
                            backgroundColor: 'white',
                            paddingRight: 10,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Pressable>
                                    <Text style={{ paddingLeft: 10, fontSize: 14, fontWeight: 'bold' }}>Tiện ích khác</Text>
                                </Pressable>
                                <Pressable style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{ paddingLeft: 10, fontSize: 12 }}>Xem tất cả</Text>
                                    <AntDesign style={{ marginLeft: 5 }} name="right" size={11} color="gainsboro" />
                                </Pressable>
                            </View>
                            <View style={{
                                paddingLeft: 10,
                                paddingTop: 15,
                                paddingBottom: 5,
                                paddingRight: 10,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <Pressable style={{
                                    paddingLeft: 10,
                                    flexDirection: 'row',
                                    width: 190,
                                    height: 35,
                                    backgroundColor: 'white',
                                    borderWidth: 1,
                                    borderColor: 'gainsboro',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{ fontSize: 12 }}>Khách hàng thân thiết</Text>
                                </Pressable>
                                <Pressable style={{
                                    paddingLeft: 10,
                                    flexDirection: 'row',
                                    width: 190,
                                    height: 35,
                                    backgroundColor: 'white',
                                    borderWidth: 1,
                                    borderColor: 'gainsboro',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{ fontSize: 12 }}>Mua lại</Text>
                                </Pressable>

                            </View>
                        </View>

                    </View>
                    <View style={{
                        marginTop: 10,
                    }}>
                        <View style={{
                            paddingTop: 10,
                            paddingBottom: 10,
                            backgroundColor: 'white'
                        }}>
                            <Text style={{ paddingLeft: 10, fontSize: 14, fontWeight: 'bold' }}>Dịch vụ tài chính</Text>
                        </View>

                    </View>
                </ScrollView>
            </View>

        </View>
    )
}
