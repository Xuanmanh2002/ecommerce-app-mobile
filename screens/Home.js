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
import { useNavigation } from '@react-navigation/native';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import axios from "axios";



export default function Home() {
  const navigation = useNavigation();
  const list = [
  ];

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
        "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lu5tq9eklmpaf4",
        "https://cf.shopee.vn/file/vn-50009109-4e849705f16bb65ccb2f651dcdf8c656_xxhdpi",
      ],
      discount: "10",
      statistic: "972",
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
    },
  ];

  const offers = [
  ];

  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://fakestoreapi.com/products");
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.log("Thông báo lỗi", error);
  //     }
  //   }

  //   fetchData();
  // }, [])
  return (
    <>
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
                  placeholder="Bạn muốn tìm gì?"
                  placeholderTextColor="tomato"
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
          <View
            style={{
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
            <View style={{
              marginTop: 10,
            }}>
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
    </>
  )
}
