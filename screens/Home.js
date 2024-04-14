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
import React, {useState} from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;



export default function Home() {
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

  const [products, setProducts] = useState([]);

  
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
              <Text style={{ marginLeft: 12, color: 'tomato', fontSize: 18, fontWeight: 'bold' }}>GỢI Ý HÔM NAY</Text>
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
