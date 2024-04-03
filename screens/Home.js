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
import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;



export default function Home() {
  const navigation = useNavigation();
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
              backgroundColor: 'tomato',
              padding: 30,
            }}>
            <View
              style={{
                paddingTop: 5,
                position: 'absolute',
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                paddingRight: 1,
                width: screenWidth - 30 + 20,
              }}
            >
              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginHorizontal: 7,
                  gap: 10,
                  backgroundColor: "white",
                  borderRadius: 3,
                  width: screenWidth - 30 + 120,
                  height: 38,
                  flex: 1,
                }}
              >
                <AntDesign
                  style={{ paddingLeft: 10 }}
                  name="search1"
                  size={22}
                  color="black"
                />
                <TextInput style={{ width: '100%' }} placeholder="Bạn muốn tìm gì?" />
              </Pressable>
              <TouchableOpacity onPress={() => navigation.navigate('Cart', { isNavigation: false })}>
                <AntDesign style={{
                  marginRight: 10
                }} name="shoppingcart" size={28} color="white" />
              </TouchableOpacity>
              <AntDesign name="message1" size={24} color="white" />
            </View>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              marginTop: 10,
            }}>
            <View style={{
              backgroundColor: 'white',
              width: "100%",
              height: 50,
              justifyContent: 'center',
              marginLeft: 10
            }}>
              <Text style={{ color: 'tomato', fontSize: 20, fontWeight: 'bold' }}>GỢI Ý HÔM NAY</Text>
            </View>


            <View style={{
              marginTop: 10,
            }}>
              <View style={{ marginHorizontal: 8, }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ marginRight: 7, flex: 1, backgroundColor: 'white' }}>
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
                  </View>

                  <View style={{ marginLeft: 7, flex: 1, backgroundColor: 'white' }}>
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
