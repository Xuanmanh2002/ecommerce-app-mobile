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
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function Cart() {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const products = [
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
  return (
    <SafeAreaView
      style={{
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
          paddingBottom: 10,
          paddingTop: 40,
          backgroundColor: 'white'
        }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingRight: 1,
              width: screenWidth - 30 + 20,
              paddingLeft: 15,
              borderBottomColor: 'lightgray',
              paddingBottom: 15
            }}
          >
            <Pressable onPress={handleGoBack}>
              <Ionicons name="arrow-back-sharp" size={24} color="tomato" />
            </Pressable>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1, paddingLeft: 30 }}>
              <Text style={{ fontSize: 20, textAlign: 'center' }}>Giỏ hàng</Text>
              <Text style={{ marginLeft: 5, fontSize: 13 }}>(1)</Text>
            </View>

            <Text style={{ marginRight: 10, fontSize: 17 }}>Sửa</Text>

            <Pressable>
              <AntDesign name="message1" size={24} color="tomato" />
            </Pressable>
          </View>

        </View>
        <View>

        </View>
      </View>
      <View style={{
        paddingTop: 120,
      }}>
        <ScrollView>
          <View>
            
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

