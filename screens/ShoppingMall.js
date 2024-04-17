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
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import axios from "axios";



export default function ShoppingMall() {
    const navigation = useNavigation();
    const list = [
        {
            id: "0",
            image: "https://img.pikbest.com/png-images/football-icon_5881725.png!sw800",
            name: "Thể thao & du lịch",
        },
        {
            id: "1",
            image:
                "https://img.pikbest.com/element_our/20230426/bg/67fa1d15a769a.png!sw800",
            name: "Ô tô - xe máy - xe đạp",
        },
        {
            id: "3",
            image:
                "https://cdn-icons-png.flaticon.com/512/1152/1152198.png",
            name: "Bách hóa online",
        },
        {
            id: "4",
            image:
                "https://cdn.tgdd.vn/ValueIcons/_Icon__No%CC%82%CC%80i_Co%CC%9Bm_MIni-removebg-preview.png",
            name: "Nhà Cửa & Đời Sống",
        },
        {
            id: "5",
            image:
                "https://cdn-icons-png.flaticon.com/512/2798/2798003.png",
            name: "Sắc đẹp",
        },
        {
            id: "6",
            image: "https://cdn-icons-png.flaticon.com/512/428/428001.png",
            name: "Máy tính & Laptop",
        },
        {
            id: "7",
            image: "https://cdn-icons-png.flaticon.com/512/1376/1376388.png",
            name: "Voucher & Dịch vụ",
        },
        {
            id: "8",
            image: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-digital-camera-png-image_13143250.png",
            name: "Máy ảnh - Máy Quay Phim",
        },
        {
            id: "9",
            image: "https://e7.pngegg.com/pngimages/289/1/png-clipart-dresses-red-hanger.png",
            name: "Thời Trang Nữ",
        },
        {
            id: "10",
            image: "https://cdn-icons-png.flaticon.com/512/3566/3566722.png",
            name: "Túi Ví Nữ",
        },
        {
            id: "11",
            image: "https://png.pngtree.com/png-vector/20230822/ourmid/pngtree-woman-holding-baby-is-a-mother-icon-on-flat-colored-background-vector-png-image_6853121.png",
            name: "Mẹ & Bé",
        },
        {
            id: "12",
            image: "https://png.pngtree.com/png-vector/20240322/ourmid/pngtree-pair-of-dog-bowls-with-dry-food-and-water-bowl-cartoon-png-image_12199337.png",
            name: "Thú cưng",
        },
        {
            id: "13",
            image: "https://png.pngtree.com/png-vector/20230105/ourmid/pngtree-book-icon-vector-image-png-image_6552370.png",
            name: "Nhà sách online",
        },
        {
            id: "14",
            image: "https://purepng.com/public/uploads/large/purepng.com-apple-iphone-xappleapple-iphonephonesmartphonemobile-devicetouch-screeniphone-xiphone-10electronicsobjects-2515306895701eqxj.png",
            name: "Điện Thoại và Phụ Kiện",
        },
        {
            id: "15",
            image: "https://product.hstatic.net/1000112469/product/ptb376_31e23a7356944623806b56f6f4318287_grande.png",
            name: "Phụ Kiện & Trang Sức Nữ",
        },
        {
            id: "16",
            image: "https://cdn.pnj.io/images/detailed/167/sp-wci00000829-dong-ho-citizen-nam-nh9130-84l-day-kim-loai-40-mm-1.png",
            name: "Đồng Hồ",
        },
        {
            id: "17",
            image: "https://png.pngtree.com/png-vector/20230408/ourmid/pngtree-led-tv-television-screen-vector-png-image_6673700.png",
            name: "Thiết Bị Điện Tử",
        },
        {
            id: "18",
            image: "https://png.pngtree.com/png-clipart/20230417/original/pngtree-mens-leather-shoes-brown-transparent-png-image_9062868.png",
            name: "Giày Dép Nam",
        },
        {
            id: "19",
            image: "https://static.vecteezy.com/system/resources/previews/024/589/109/non_2x/teddy-bear-with-ai-generated-free-png.png",
            name: "Đồ chơi",
        },
        {
            id: "20",
            image: "https://png.pngtree.com/png-vector/20240123/ourmid/pngtree-realistic-white-polo-shirt-mockup-png-file-png-image_11464698.png",
            name: "Thời Trang Nam",
        },
        {
            id: "21",
            image: "https://khothietke.net/wp-content/uploads/2021/05/PNGKhothietke.net-02883.png",
            name: "Giày Dép Nữ",
        },
        {
            id: "22",
            image: "https://khothietke.net/wp-content/uploads/2021/04/PNGKhothietke.net-02227.png",
            name: "Thiết bị da dụng",
        },
        {
            id: "23",
            image: "https://product.hstatic.net/200000271685/product/3_2f75f78bf54747e3814c884ecbffb645.png",
            name: "Giặt giũ & Chăm sóc nhà cửa",
        },
        {
            id: "24",
            image: "https://bizweb.dktcdn.net/100/383/994/products/khau-trang-5d-trang.png?v=1687155655500",
            name: "Sức Khỏe",
        },
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
        <>
            <SafeAreaView
                style={{
                    paddingTop: Platform.OS === "android" ? 40 : 0,
                    flex: 1,
                    backgroundColor: "#F8F8F8",
                }}>
                <View style={{ top: 0, left: 0 }}>
                    <View
                        style={{
                            padding: 28,
                        }}>
                        <View
                            style={{
                                paddingTop: 5,
                                position: 'absolute',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 5,
                                paddingRight: 1,
                                width: screenWidth - 30 + 20,
                                paddingLeft: 5,
                            }}>
                            <Pressable
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginHorizontal: 7,
                                    gap: 10,
                                    backgroundColor: '#F0F0F0',
                                    borderRadius: 3,
                                    width: screenWidth - 30 + 120,
                                    height: 38,
                                    flex: 1,
                                }}>
                                <AntDesign
                                    style={{ paddingLeft: 10 }}
                                    name="search1"
                                    size={22}
                                    color="black"
                                />
                                <TextInput
                                    style={{ width: '100%' }}
                                    placeholder="Shoppe Mall"
                                    placeholderTextColor="red"
                                />
                            </Pressable>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('Cart', { isNavigation: false })
                                }>
                                <AntDesign
                                    style={{
                                        marginRight: 10,
                                    }}
                                    name="shoppingcart"
                                    size={28}
                                    color="tomato"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <AntDesign name="message1" size={24} color="tomato" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <SliderBox
                        images={images}
                        autoPlay
                        circleLoop
                        dotColor={'#13274F'}
                        inactiveDotColor="#90A4AE"
                        ImageComponentStyle={{ width: '100%' }}>
                    </SliderBox>
                    <View>
                        <View style={{
                            paddingHorizontal: 10,
                            backgroundColor: 'white',
                            width: "100%",
                            height: 47,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: 18, height: 18, borderRadius: 20, overflow: 'hidden', alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
                                    <AntDesign name="back" size={14} color="white" />
                                </View>
                                <Text style={{ fontSize: 10, paddingLeft: 10 }}>Miễn phí trả hàng</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
                                <View>
                                    <Ionicons name="shield-checkmark-sharp" size={18} color="red" />
                                </View>
                                <Text style={{ fontSize: 10, paddingLeft: 10 }}>Chính hãng 100%</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
                                <View>
                                    <MaterialCommunityIcons name="truck-fast-outline" size={20} color="red" />
                                </View>
                                <Text style={{ fontSize: 10, paddingLeft: 10 }}>Giao hàng miễn phí</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{
                            paddingTop: 10,
                            paddingHorizontal: 10,
                            paddingBottom: 10,
                            backgroundColor: 'white',
                            width: "100%",
                            height: 150, // Đặt chiều cao mới ở đây, ví dụ: 150 pixels
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <Image
                                source={{
                                    uri: "https://magiamgia.com/wp-content/uploads/2023/07/Shopee-sale-15.7-1.jpg"
                                }}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    resizeMode: 'cover',
                                    borderRadius: 10
                                }}
                            />
                            <FontAwesome name="arrow-circle-right" size={24} color="white" style={{ position: 'absolute', right: 30, top: '60%', transform: [{ translateY: -12 }] }} />
                        </TouchableOpacity>

                        <View style={{
                            marginTop: 10,
                            backgroundColor: 'white'
                        }}>
                            <View style={{
                                width: "100%",
                                height: 47,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between', // Thay đổi justifyContent thành 'space-between' để căn các phần tử về hai bên của view
                                paddingHorizontal: 10, // Thêm padding để tạo khoảng cách giữa các phần tử và biên của view
                            }}>
                                <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>Danh mục</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: 'lightgray', fontSize: 17 }}>
                                        Tìm hiểu ngay
                                        <AntDesign name="right" size={17} color="lightgray" style={{ marginLeft: 5 }} />
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <View style={{ flexDirection: 'row' }}>
                                    {list.map((item, index) => (
                                        <TouchableOpacity
                                            key={index}
                                            style={{
                                                width: 90, // Độ rộng của TouchableOpacity
                                                marginHorizontal: 5, // Khoảng cách giữa các TouchableOpacity
                                                justifyContent: "center",
                                                alignItems: "center",
                                                paddingBottom: 10
                                            }}
                                        >
                                            <Image
                                                style={{ width: 50, height: 50, resizeMode: "contain" }}
                                                source={{ uri: item.image }}
                                            />

                                            <Text
                                                style={{
                                                    textAlign: "center",
                                                    fontSize: 12,
                                                    fontWeight: "500",
                                                    marginTop: 5,
                                                    width: 70, // Độ rộng của văn bản
                                                    lineHeight: 18, // Chiều cao dòng của văn bản
                                                }}
                                                numberOfLines={2} // Giới hạn số dòng hiển thị là 2
                                            >
                                                {item.name}
                                            </Text>

                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{
                            marginTop: 10,
                        }}>
                            <View style={{
                                backgroundColor: 'white',
                                width: "100%",
                                height: 47,
                                justifyContent: 'center',
                            }}>
                                <Text style={{ marginLeft: 12, color: 'tomato', fontSize: 17, fontWeight: 'bold' }}>GỢI Ý HÔM NAY</Text>
                            </View>
                            <View style={{ marginHorizontal: 8, }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ marginRight: 7, flex: 1, backgroundColor: 'white' }}>
                                        <Image
                                            style={{ marginTop: 10, width: 190, height: 190 }}
                                            source={require("../assets/giay-cho-cho.jpg")}
                                        />
                                        <Text style={{ marginTop: 10, marginLeft: 8, fontSize: 17 }} numberOfLines={2}>Giày đi bộ cho chó lớn bảo vệ chân</Text>
                                        <View style={{
                                            marginTop: 10,
                                            flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: 'tomato',
                                            width: 74,
                                            height: 30,
                                            marginLeft: 8,
                                            borderWidth: 1, // Độ dày của đường viền
                                            borderColor: 'transparent', // Màu của đường viền (trong trường hợp này, là màu của nền để tạo ra hiệu ứng răng cưa)
                                            borderTopLeftRadius: 4, // Bán kính của các góc
                                            borderTopRightRadius: 10,
                                            borderBottomLeftRadius: 10,
                                            borderBottomRightRadius: 4
                                        }}>
                                            <Text style={{
                                                fontSize: 15,
                                                color: 'white'
                                            }}>11% Giảm</Text>
                                        </View>
                                        <View style={{
                                            marginTop: 10,
                                            marginLeft: 10
                                        }}>
                                            <Text style={{ fontSize: 17, color: 'tomato' }}>94.000 đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginLeft: 7, flex: 1, backgroundColor: 'white' }}>
                                        <Image
                                            style={{ marginTop: 10, width: 190, height: 190 }}
                                            source={require("../assets/giay-cho-cho.jpg")}
                                        />
                                        <Text style={{ marginTop: 10, marginLeft: 8, fontSize: 17 }} numberOfLines={2}>Giày đi bộ cho chó lớn bảo vệ chân</Text>
                                        <View style={{
                                            marginTop: 10,
                                            flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: 'tomato',
                                            width: 74,
                                            height: 30,
                                            marginLeft: 8,
                                            borderWidth: 1, // Độ dày của đường viền
                                            borderColor: 'transparent', // Màu của đường viền (trong trường hợp này, là màu của nền để tạo ra hiệu ứng răng cưa)
                                            borderTopLeftRadius: 4, // Bán kính của các góc
                                            borderTopRightRadius: 10,
                                            borderBottomLeftRadius: 10,
                                            borderBottomRightRadius: 4
                                        }}>
                                            <Text style={{
                                                fontSize: 15,
                                                color: 'white'
                                            }}>11% Giảm</Text>
                                        </View>
                                        <View style={{
                                            marginTop: 10,
                                            marginLeft: 10
                                        }}>
                                            <Text style={{ fontSize: 17, color: 'tomato' }}>94.000 đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{
                                marginTop: 10,
                            }}>
                                <View style={{ marginHorizontal: 8, }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity style={{ marginRight: 7, flex: 1, backgroundColor: 'white' }}>
                                            <Image
                                                style={{ marginTop: 10, width: 190, height: 190 }}
                                                source={require("../assets/giay-cho-cho.jpg")}
                                            />
                                            <Text style={{ marginTop: 10, marginLeft: 8, fontSize: 17 }} numberOfLines={2}>Giày đi bộ cho chó lớn bảo vệ chân</Text>
                                            <View style={{
                                                marginTop: 10,
                                                flex: 1,
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: 'tomato',
                                                width: 74,
                                                height: 30,
                                                marginLeft: 8,
                                                borderWidth: 1, // Độ dày của đường viền
                                                borderColor: 'transparent', // Màu của đường viền (trong trường hợp này, là màu của nền để tạo ra hiệu ứng răng cưa)
                                                borderTopLeftRadius: 4, // Bán kính của các góc
                                                borderTopRightRadius: 10,
                                                borderBottomLeftRadius: 10,
                                                borderBottomRightRadius: 4
                                            }}>
                                                <Text style={{
                                                    fontSize: 15,
                                                    color: 'white'
                                                }}>11% Giảm</Text>
                                            </View>
                                            <View style={{
                                                marginTop: 10,
                                                marginLeft: 10
                                            }}>
                                                <Text style={{ fontSize: 17, color: 'tomato' }}>94.000 đ</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ marginLeft: 7, flex: 1, backgroundColor: 'white' }}>
                                            <Image
                                                style={{ marginTop: 10, width: 190, height: 190 }}
                                                source={require("../assets/giay-cho-cho.jpg")}
                                            />
                                            <Text style={{ marginTop: 10, marginLeft: 8, fontSize: 17 }} numberOfLines={2}>Giày đi bộ cho chó lớn bảo vệ chân</Text>
                                            <View style={{
                                                marginTop: 10,
                                                flex: 1,
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: 'tomato',
                                                width: 74,
                                                height: 30,
                                                marginLeft: 8,
                                                borderWidth: 1, // Độ dày của đường viền
                                                borderColor: 'transparent', // Màu của đường viền (trong trường hợp này, là màu của nền để tạo ra hiệu ứng răng cưa)
                                                borderTopLeftRadius: 4, // Bán kính của các góc
                                                borderTopRightRadius: 10,
                                                borderBottomLeftRadius: 10,
                                                borderBottomRightRadius: 4
                                            }}>
                                                <Text style={{
                                                    fontSize: 15,
                                                    color: 'white'
                                                }}>11% Giảm</Text>
                                            </View>
                                            <View style={{
                                                marginTop: 10,
                                                marginLeft: 10
                                            }}>
                                                <Text style={{ fontSize: 17, color: 'tomato' }}>94.000 đ</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{
                                    marginTop: 10,
                                }}>
                                    <View style={{ marginHorizontal: 8, }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity style={{ marginRight: 7, flex: 1, backgroundColor: 'white' }}>
                                                <Image
                                                    style={{ marginTop: 10, width: 190, height: 190 }}
                                                    source={require("../assets/giay-cho-cho.jpg")}
                                                />
                                                <Text style={{ marginTop: 10, marginLeft: 8, fontSize: 17 }} numberOfLines={2}>Giày đi bộ cho chó lớn bảo vệ chân</Text>
                                                <View style={{
                                                    marginTop: 10,
                                                    flex: 1,
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    backgroundColor: 'tomato',
                                                    width: 74,
                                                    height: 30,
                                                    marginLeft: 8,
                                                    borderWidth: 1, // Độ dày của đường viền
                                                    borderColor: 'transparent', // Màu của đường viền (trong trường hợp này, là màu của nền để tạo ra hiệu ứng răng cưa)
                                                    borderTopLeftRadius: 4, // Bán kính của các góc
                                                    borderTopRightRadius: 10,
                                                    borderBottomLeftRadius: 10,
                                                    borderBottomRightRadius: 4
                                                }}>
                                                    <Text style={{
                                                        fontSize: 15,
                                                        color: 'white'
                                                    }}>11% Giảm</Text>
                                                </View>
                                                <View style={{
                                                    marginTop: 10,
                                                    marginLeft: 10
                                                }}>
                                                    <Text style={{ fontSize: 17, color: 'tomato' }}>94.000 đ</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ marginLeft: 7, flex: 1, backgroundColor: 'white' }}>
                                                <Image
                                                    style={{ marginTop: 10, width: 190, height: 190 }}
                                                    source={require("../assets/giay-cho-cho.jpg")}
                                                />
                                                <Text style={{ marginTop: 10, marginLeft: 8, fontSize: 17 }} numberOfLines={2}>Giày đi bộ cho chó lớn bảo vệ chân</Text>
                                                <View style={{
                                                    marginTop: 10,
                                                    flex: 1,
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    backgroundColor: 'tomato',
                                                    width: 74,
                                                    height: 30,
                                                    marginLeft: 8,
                                                    borderWidth: 1, // Độ dày của đường viền
                                                    borderColor: 'transparent', // Màu của đường viền (trong trường hợp này, là màu của nền để tạo ra hiệu ứng răng cưa)
                                                    borderTopLeftRadius: 4, // Bán kính của các góc
                                                    borderTopRightRadius: 10,
                                                    borderBottomLeftRadius: 10,
                                                    borderBottomRightRadius: 4
                                                }}>
                                                    <Text style={{
                                                        fontSize: 15,
                                                        color: 'white'
                                                    }}>11% Giảm</Text>
                                                </View>
                                                <View style={{
                                                    marginTop: 10,
                                                    marginLeft: 10
                                                }}>
                                                    <Text style={{ fontSize: 17, color: 'tomato' }}>94.000 đ</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{
                                        marginTop: 10,
                                    }}>
                                        <View style={{ marginHorizontal: 8, }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <TouchableOpacity style={{ marginRight: 7, flex: 1, backgroundColor: 'white' }}>
                                                    <Image
                                                        style={{ marginTop: 10, width: 190, height: 190 }}
                                                        source={require("../assets/giay-cho-cho.jpg")}
                                                    />
                                                    <Text style={{ marginTop: 10, marginLeft: 8, fontSize: 17 }} numberOfLines={2}>Giày đi bộ cho chó lớn bảo vệ chân</Text>
                                                    <View style={{
                                                        marginTop: 10,
                                                        flex: 1,
                                                        flexDirection: 'row',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: 'tomato',
                                                        width: 74,
                                                        height: 30,
                                                        marginLeft: 8,
                                                        borderWidth: 1, // Độ dày của đường viền
                                                        borderColor: 'transparent', // Màu của đường viền (trong trường hợp này, là màu của nền để tạo ra hiệu ứng răng cưa)
                                                        borderTopLeftRadius: 4, // Bán kính của các góc
                                                        borderTopRightRadius: 10,
                                                        borderBottomLeftRadius: 10,
                                                        borderBottomRightRadius: 4
                                                    }}>
                                                        <Text style={{
                                                            fontSize: 15,
                                                            color: 'white'
                                                        }}>11% Giảm</Text>
                                                    </View>
                                                    <View style={{
                                                        marginTop: 10,
                                                        marginLeft: 10
                                                    }}>
                                                        <Text style={{ fontSize: 17, color: 'tomato' }}>94.000 đ</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{ marginLeft: 7, flex: 1, backgroundColor: 'white' }}>
                                                    <Image
                                                        style={{ marginTop: 10, width: 190, height: 190 }}
                                                        source={require("../assets/giay-cho-cho.jpg")}
                                                    />
                                                    <Text style={{ marginTop: 10, marginLeft: 8, fontSize: 17 }} numberOfLines={2}>Giày đi bộ cho chó lớn bảo vệ chân</Text>
                                                    <View style={{
                                                        marginTop: 10,
                                                        flex: 1,
                                                        flexDirection: 'row',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: 'tomato',
                                                        width: 74,
                                                        height: 30,
                                                        marginLeft: 8,
                                                        borderWidth: 1, // Độ dày của đường viền
                                                        borderColor: 'transparent', // Màu của đường viền (trong trường hợp này, là màu của nền để tạo ra hiệu ứng răng cưa)
                                                        borderTopLeftRadius: 4, // Bán kính của các góc
                                                        borderTopRightRadius: 10,
                                                        borderBottomLeftRadius: 10,
                                                        borderBottomRightRadius: 4
                                                    }}>
                                                        <Text style={{
                                                            fontSize: 15,
                                                            color: 'white'
                                                        }}>11% Giảm</Text>
                                                    </View>
                                                    <View style={{
                                                        marginTop: 10,
                                                        marginLeft: 10
                                                    }}>
                                                        <Text style={{ fontSize: 17, color: 'tomato' }}>94.000 đ</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}
