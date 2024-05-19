import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Platform,
    Pressable,
    Image,
    Dimensions,
} from 'react-native'
import React, { useState, useEffect, useCallback, useContext } from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ProductItem from "../components/ProductItem";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import axios from "axios";
import { value } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';



export default function ShoppingMall() {
    const navigation = useNavigation();

    const images = [
        "https://cf.shopee.vn/file/vn-50009109-53226b3229b5929212a702d966c211c6_xxhdpi",
        "https://cf.shopee.vn/file/vn-50009109-9f55e03457f53c21641e034794aa44a0_xxhdpi",
        "https://cf.shopee.vn/file/vn-50009109-1ba43290f7c65109a0832438454960bb_xxhdpi",
        "https://cf.shopee.vn/file/vn-50009109-1ba43290f7c65109a0832438454960bb_xxhdpi",
    ];

    const deals = [
        {
            id: "01",
            title: "Kem Nền Mịn Nhẹ Kiềm Dầu Fit Me Maybelline Matte Poreless Foundation 30ml",
            oldPrice: 288000,
            price: 288000 * (1 - 10 / 100), // Giảm giá 10%
            image: "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-ltg8irqlp7r7d0",
            carouselImages: [
                "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lu5tq8vzcudlf1",
                "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lu5tq8y7azw3dc",
                "https://down-vn.img.susercontent.com/file/vn-1113420   1-7r98o-lu5tq9eklmpaf4",
                "https://cf.shopee.vn/file/vn-50009109-4e849705f16bb65ccb2f651dcdf8c656_xxhdpi",
            ],
            discount: "10",
            statistic: "972",
            describe: [
                "Kem Nền Mịn Nhẹ Kiềm Dầu Chống Nắng 16h Fit Me Maybelline New York Matte Poreless Foundation 30ml",
                "Kem Nền Mịn Nhẹ, Kiềm Dầu Maybelline Fit Me 30ml Fit Me gây tiếng vang trong giới làm đẹp toàn thế giới và được mệnh danh là kem nền 'quốc dân' khi có mặt tại Việt Nam",
                "Kem nền Fit Me gây ấn tượng với khả năng kiềm dầu cho lớp nền mịn lì tự nhiên, đồng thời che phủ tốt mọi khuyết điểm trên bề mặt da và che phủ hoàn hảo lỗ chân lông. Dòng kem nền Fit Me có 12 tông màu phù hợp, tiệp mọi tông da phụ nữ Việt Nam.",
                "Kem nền Fit Me gây ấn tượng với khả năng kiềm dầu cho lớp nền mịn lì tự nhiên, đồng thời che phủ tốt mọi khuyết điểm trên bề mặt da và che phủ hoàn hảo lỗ chân lông. Dòng kem nền Fit Me có 12 tông màu phù hợp, tiệp mọi tông da phụ nữ Việt Nam. ",
                "Kem nền lý tưởng dành cho da thường, da hỗn hợp thiên dầu &amp; da dầu.",
            ],
        },
        {
            id: "02",
            title: "Quần dài thể thao nam thời trang đường phố Âu Mỹ",
            oldPrice: 253000,
            price: 253000 * (1 - 30 / 100), // Giảm giá 15%
            image: "https://down-vn.img.susercontent.com/file/cn-11134211-7r98o-lq4kq08kumgl20",
            carouselImages: [
                "https://down-vn.img.susercontent.com/file/sg-11134201-7qvg3-lj52qhim5qddad",
                "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lj4xu6midncm7b",
                "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lj4xu6mif1x220",
                "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lj4xu6mic8s617",
            ],
            discount: "30",
            statistic: "121",
            describe: [
                "Chào mừng đến với cửa hàng của chúng tôi",
                "Kích thước và mô hình của sản phẩm được thể hiện trong hình. Vui lòng đọc kỹ.",
                "Do đo lường thủ công, lỗi có thể là 1-2 cm",
                "Lợi ích, xin vui lòng lưu ý",
                "Theo dõi cửa hàng của chúng tôi để nhận phiếu giảm giá cửa hàng",
            ],
        },
        {
            id: "03",
            title: "Áo Thun Nam Nữ Sturgis Phối Chỉ Line, Áo Phông Unisex Cotton Phong Cách Hàn Quốc - AT02 𝐅𝐫𝐞𝐝𝐨 𝐌𝐞𝐧𝐰𝐞𝐚𝐫",
            oldPrice: 300000,
            price: 300000 * (1 - 0 / 100), // Giảm giá 15%
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqg35oaiakvrb5",
            carouselImages: [
                "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqg35oai96bbdd",
                "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqg35oai7rqvcc",
                "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqg35oaij0af01",
                "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqg35oaiesl3a8",
            ],
            discount: "",
            statistic: "249",
            describe: [
                "- Chất liệu: 100% Cotton dày dặn,co giãn tốt, bền màu",
                "- Màu sắc : Đỏ, Đen, Trắng",
                "- Size (3 size): M - L - XL",
                "- Kiểu dáng: Form Oversize (chuẩn form châu á)",
            ],
        },

        {
            id: "04",
            title: "WORTHBUYGiỏ khung sắt WORTHBUT đựng quần áo bẩn / đồ dùng bằng cotton lanh chống thấm nước tiện dụng",
            oldPrice: 152000,
            price: 152000 * (1 - 15 / 100), // Giảm giá 15%
            image: "https://down-vn.img.susercontent.com/file/cn-11134211-7r98o-llbh1sllbpqsc3",
            carouselImages: [
                "https://down-vn.img.susercontent.com/file/sg-11134201-23030-vsesd2x5nfov09",
                "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lu5tq8y7azw3dc",
                "https://down-vn.img.susercontent.com/file/sg-11134201-23020-2blxhwlvzwnv04",
                "https://down-vn.img.susercontent.com/file/sg-11134201-23020-xy458v9dcynv01",
            ],
            discount: "15",
            statistic: "1700",
            describe: [
                "Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày",
                "Sản phẩm: giỏ giặt",
                "Màu sắc: Nhiều màu",
                "Chất Liệu: cotton và vải lanh",
                "Kích thước: 30 * 23 * 43cm",
            ],
        },
        {
            id: "05",
            title: "Quần Dài Ống Rộng Kẻ Sọc Thời Trang Nam Tính",
            oldPrice: 300000,
            price: 300000 * (1 - 15 / 100), // Giảm giá 15%
            image: "https://down-vn.img.susercontent.com/file/sg-11134201-7qvdz-ljmfkpqtam3a13",
            carouselImages: [
                "https://down-vn.img.susercontent.com/file/sg-11134201-7qve1-ljksspd875dx43",
                "https://down-vn.img.susercontent.com/file/sg-11134201-7qvdp-ljkssq5t5j1w80",
                "https://down-vn.img.susercontent.com/file/sg-11134201-7qvf5-ljkssprxlmevf8",
                "https://down-vn.img.susercontent.com/file/sg-11134201-7qvec-ljkssr33olt78c",
            ],
            discount: "15",
            statistic: "24",
            describe: [
                "Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày",
                "Sản phẩm: giỏ giặt",
                "Màu sắc: Nhiều màu",
                "Chất Liệu: cotton và vải lanh",
                "Kích thước: 30 * 23 * 43cm",
            ],
        },

    ];

    const offers = [
    ];

    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);
    // const [addresses, setAddresses] = useState([]);
    const [category, setCategory] = useState("Thể thao & du lịch");
    // const { userId, setUserId } = useContext(UserType);
    // const [selectedAddress, setSelectedAdress] = useState("");
    // console.log(selectedAddress)
    const [items, setItems] = useState([
        {
            image: "https://down-vn.img.susercontent.com/file/8e71245b9659ea72c1b4e737be5cf42e_tn&quot",
            label: "Trang Sức ",
            value: "jewelery",
        },
        {
            image: "https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn&quot",
            label: "Thiết Bị Điện Tử",
            value: "electronics",

        },
        {
            image: "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn&quot",
            label: "Thời Trang Nam",
            value: "Men's clothing",
        },
        {
            image: "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn&quot;",
            label: "Thời Trang Nữ",
            value: "women's clothing",
        },
    ]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                setProducts(response.data);
            } catch (error) {
                console.log("thông báo lỗi api", error);
            }
        };

        fetchData();
    }, []);
    console.log("products", products)
    return (
        <View
            style={{
                paddingTop: Platform.OS === "android" ? 40 : 0,
                flex: 1,
                backgroundColor: "#F8F8F8",
            }}>
            <View style={{ top: 0, left: 0 }}>
                <View
                    style={{
                        padding: 32,
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
                        height: 150,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <Image
                            source={{
                                uri: "https://cf.shopee.vn/file/vn-50009109-9ea240aa6ff8a00436e926e9eac2206c_xhdpi"
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
                                {items.map((value, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={{
                                            width: 90,
                                            marginHorizontal: 5,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            paddingBottom: 10
                                        }}
                                        onPress={() => {
                                            setCategory(value.value);
                                            setOpen(false);
                                        }}
                                    >
                                        <Image
                                            style={{ width: 50, height: 50, resizeMode: "contain" }}
                                            source={{ uri: value.image }}
                                        />
                                        <Text
                                            style={{
                                                textAlign: "center",
                                                fontSize: 12,
                                                fontWeight: "500",
                                                marginTop: 5,
                                                width: 70,
                                                lineHeight: 18,
                                            }}
                                            numberOfLines={2}
                                        >
                                            {value.label}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </ScrollView>

                        <View>
                            <TouchableOpacity style={{
                                paddingHorizontal: 10,
                                paddingBottom: 10,
                                backgroundColor: 'white',
                                width: "100%",
                                height: 150,
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                                <Image
                                    source={{
                                        uri: "https://cf.shopee.vn/file/vn-50009109-4e849705f16bb65ccb2f651dcdf8c656_xhdpi"
                                    }}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        resizeMode: 'cover',
                                        borderRadius: 10
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <ScrollView horizontal={true}>
                            {products?.map((item, index) => (
                                <ProductItem item={item} key={index} />
                            ))}
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
                            <Text style={{ marginLeft: 12, color: 'red', fontSize: 17, fontWeight: 'bold' }}>GỢI Ý HÔM NAY</Text>
                        </View>
                        <View style={{ marginHorizontal: 8, marginBottom: 20 }}>
                            {deals.reduce((rows, item, idx) => {
                                if (idx % 2 === 0) {
                                    rows.push([item]);
                                } else {
                                    rows[rows.length - 1].push(item);
                                }
                                return rows;
                            }, []).map((row, rowIndex) => (
                                <View key={rowIndex} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    {row.map((item, itemIndex) => (
                                        <TouchableOpacity
                                            onPress={() =>
                                                navigation.navigate("ProductDetail", {
                                                    id: item.id,
                                                    title: item?.title,
                                                    price: item?.price,
                                                    carouselImages: item.carouselImages,
                                                    oldPrice: item.oldPrice,
                                                    discount: item.discount,
                                                    statistic: item.statistic,
                                                    describe: item.describe,
                                                    item: item,
                                                })
                                            }
                                            style={{
                                                marginRight: 7,
                                                marginBottom: 10,
                                                flex: 1,
                                                backgroundColor: 'white'
                                            }}
                                        >
                                            <Image
                                                style={{ marginTop: 10, width: 190, height: 190 }}
                                                source={{ uri: item.image }}
                                            />
                                            <Text style={{ marginTop: 10, marginLeft: 8, fontSize: 17 }} numberOfLines={2}>{item.title.substring(0, 50)}</Text>
                                            {item.discount !== "" && (
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
                                                    <Text style={{ fontSize: 15, color: 'white' }}>{item.discount}% Giảm</Text>
                                                </View>
                                            )}

                                            <View style={{
                                                marginTop: 'auto',
                                                marginLeft: 10,
                                                marginBottom: 10,
                                                flexDirection: 'row'
                                            }}>
                                                <Text style={{ fontSize: 15, color: 'tomato' }}>{Math.floor(item.price).toLocaleString('vi-VN')} VNĐ</Text>
                                                <Text style={{ fontSize: 13, color: 'black', marginLeft: 10 }}>Đã bán {item.statistic}</Text>
                                            </View>
                                        </TouchableOpacity>

                                    ))}
                                    {row.length === 1 && (
                                        <TouchableOpacity style={{ marginRight: 7, marginBottom: 10, flex: 1, backgroundColor: '#F8F8F8' }}>
                                        </TouchableOpacity>
                                    )}
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}
