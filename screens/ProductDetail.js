import React, { useState } from 'react';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  Text,
  Dimensions,
  Platform,
  Image,
  SafeAreaView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProductDetail() {
  const route = useRoute();
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const [isFavorited, setIsFavorited] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePress = () => {
    setIsFavorited(!isFavorited);
    Toast.show({
      type: 'success',
      text1: isFavorited
        ? 'Bạn đã xoá sản phẩm khỏi mục yêu thích'
        : 'Bạn đã thêm sản phẩm vào mục yêu thích',
      visibilityTime: 3000,
      position: 'bottom',
    });
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SafeAreaView style={{
      paddingTop: Platform.OS === "android" ? 40 : 0,
      flex: 1,
      backgroundColor: '#F8F8F8',
    }}>
      <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
      }}>
        <View
          style={{
            paddingTop: 40,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#F0F0F0',
            paddingBottom: 10,
          }}>
          <View
            style={{
              padding: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Pressable onPress={handleGoBack}>
              <Ionicons name="arrow-back-sharp" size={32} color="tomato" />
            </Pressable>
          </View>
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 7,
              backgroundColor: '#F0F0F0',
              borderRadius: 3,
              flex: 1,
              height: 38,
            }}>
            <AntDesign
              style={{ paddingLeft: 10 }}
              name="search1"
              size={22}
              color="black"
            />
            <TextInput
              style={{ width: '100%', paddingLeft: 5 }}
              placeholder={route?.params?.title?.length > 25 ? route?.params?.title?.substring(0, 25) + '...' : route?.params?.title}
              placeholderTextColor="red"
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Cart', { isNavigation: false })}>
            <AntDesign
              style={{
                marginRight: 10,
              }}
              name="shoppingcart"
              size={28}
              color="tomato"
            />
          </Pressable>
          <Pressable>
            <MaterialCommunityIcons style={{
              marginRight: 10,
            }} name="share-outline" size={38} color="tomato" />
          </Pressable>
          <Pressable>
            <Entypo name="dots-three-vertical" size={24} color="tomato" />
          </Pressable>
        </View>
      </View>
      <ScrollView style={{
        paddingTop: 50
      }}>
        <View style={{ flex: 1 }}>
          <SliderBox
            images={route.params.carouselImages}
            autoPlay
            circleLoop
            dotColor={'#13274F'}
            inactiveDotColor="#90A4AE"
            ImageComponentStyle={{ width: '100%', height: width, resizeMode: 'contain' }}
          />
        </View>
        <View style={{ backgroundColor: 'white', padding: 10 }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 10,
          }}>
            <Text style={{
              fontSize: 15,
              textDecorationLine: 'underline',
              color: 'red',
              fontWeight: 'bold',
              marginBottom: -5,
            }}>đ</Text>
            <Text style={{
              fontSize: 20,
              color: 'red',
              fontWeight: 'bold',
            }}>{Math.floor(route?.params?.price).toLocaleString('vi-VN')}</Text>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: -1,
            }}>
              <Text style={{
                marginLeft: 10,
                marginBottom: -2,
                fontSize: 15,
                textDecorationLine: 'line-through',
                color: 'gainsboro',
              }}>đ</Text>
              <Text style={{
                fontSize: 15,
                color: 'gainsboro',
                textDecorationLine: 'line-through',
              }}>{Math.floor(route?.params?.oldPrice).toLocaleString('vi-VN')}</Text>
            </View>
            {route?.params?.discount !== "" && (
              <View style={{
                width: 40,
                height: 20,
                marginLeft: 8,
                backgroundColor: 'yellow',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                marginBottom: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Text style={{
                  fontSize: 15,
                  color: 'red',
                }}>-{route?.params?.discount}%</Text>
              </View>
            )}
          </View>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            width: 110,
            height: 20,
            borderWidth: 1,
            borderColor: '#22d3ee',
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
            borderBottomLeftRadius: 3,
            borderBottomRightRadius: 3,
          }}>
            <Text style={{
              color: '#22d3ee',
              fontSize: 13
            }}> Miễn phí trả hàng</Text>
          </View>
          <View style={{
            paddingTop: 10,
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <Text style={{
                fontSize: 12,
                fontFamily: 'arial',
              }}>
                <Text style={{ borderRadius: 10, backgroundColor: '#f43f5e', paddingHorizontal: 5, paddingVertical: 2, color: 'white', fontWeight: 'bold' }}>Mall</Text> {route?.params?.title}
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Pressable style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <Entypo name="star" size={12} color="#F1C40F" />
              <Text style={{ fontSize: 15 }}>4.9 / 5</Text>
            </Pressable>
            <Text style={{ color: '#f0f0f0' }}>  | </Text>
            <Text style={{ fontSize: 15 }}> Đã bán {route?.params?.statistic} </Text>
            <View style={{
              flex: 1,
              marginLeft: 150,
            }}>
              <Pressable onPress={handlePress}>
                <AntDesign name={isFavorited ? "heart" : "hearto"} size={24} color={isFavorited ? "red" : "black"} />
              </Pressable>
            </View>
            <Pressable style={{
              marginRight: 10,
            }}>
              <AntDesign name="message1" size={23} color="mediumblue" />
            </Pressable>
          </View>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'gainsboro', width: '100%' }} />
        <View style={{
          paddingHorizontal: 10,
          backgroundColor: 'white',
          width: "100%",
          height: 47,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 18, height: 18, borderRadius: 20, overflow: 'hidden', alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
              <MaterialIcons name="currency-exchange" size={12} color="white" />
            </View>
            <Text style={{ fontSize: 10, paddingLeft: 8 }}>Đổi ý miễn phí 15 ngày</Text>
          </Pressable>
          <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}>
            <View>
              <MaterialCommunityIcons name="brightness-percent" size={20} color="red" />
            </View>
            <Text style={{ fontSize: 10, paddingLeft: 8 }}>Chính hãng 100%</Text>
          </Pressable>
          <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
            <View>
              <MaterialCommunityIcons name="truck-fast-outline" size={20} color="red" />
            </View>
            <Text style={{ fontSize: 10, paddingLeft: 8 }}>Giao hàng miễn phí</Text>
          </Pressable>
        </View>
        <View style={{
          paddingTop: 10,
        }}>
          <View style={{
            backgroundColor: 'white'
          }}>
            <Pressable style={{
              flexDirection: 'row',
              marginTop: 15,
              alignItems: 'center',
              marginBottom: 15,
            }}>
              <Text style={{
                fontSize: 14,
                marginLeft: 10,
              }}>Voucher của Shop</Text>
              <View style={{
                marginLeft: 110,
                backgroundColor: 'orange',
                paddingVertical: 1,
                paddingHorizontal: 4,
                borderRadius: 1,
                borderWidth: 1,
                borderColor: '#FF5722',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}>
                <Text style={{
                  fontSize: 12,
                  color: '#FFFFFF',
                }}>Giảm đ20k</Text>
              </View>
              <View style={{
                marginLeft: 10,
                backgroundColor: 'orange',
                paddingVertical: 1,
                paddingHorizontal: 4,
                borderRadius: 1,
                borderWidth: 1,
                borderColor: '#FF5722',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}>
                <Text style={{
                  fontSize: 12,
                  color: '#FFFFFF',
                }}>Giảm đ60k</Text>
              </View>
              <View style={{
                marginLeft: 5
              }}>
                <AntDesign name="right" size={18} color="black" />
              </View>
            </Pressable>
          </View>
        </View>
        <View style={{
          paddingTop: 10,
        }}>
          <View style={{
            backgroundColor: 'white'
          }}>
            <Pressable style={{
              flexDirection: 'row',
              marginTop: 15,
              marginBottom: 15,
            }}>
              <Text style={{
                fontSize: 14,
                marginLeft: 10,
              }}>SPayLater</Text>
              <Text style={{
                fontSize: 12,
                marginLeft: 210,
                color: 'tomato'
              }}>Mua trước trả sau</Text>
              <View style={{
                marginLeft: 5
              }}>
                <AntDesign name="right" size={18} color="black" />
              </View>
            </Pressable>
          </View>
        </View>
        <View style={{
          paddingTop: 10,
        }}>
          <View style={{
            backgroundColor: 'white',
            padding: 10,

          }}>
            <Pressable >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ position: 'relative', justifyContent: 'center' }}>
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'white',
                      borderWidth: 1,
                      borderColor: 'gainsboro'
                    }}>
                    <Image
                      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png' }}
                      style={{ width: 30, height: 30, borderRadius: 10 }}
                      resizeMode="contain"
                    />
                  </View>
                  <View
                    style={{
                      backgroundColor: 'red',
                      borderRadius: 1,
                      width: 60,
                      height: 15,
                      alignItems: 'center',
                      position: 'absolute',
                      bottom: -3,
                    }}>
                    <Text style={{ color: 'white', fontSize: 10 }}>Shopee Mall</Text>
                  </View>
                </View>
                <View style={{
                  paddingLeft: 10
                }}>
                  <Text style={{ fontSize: 13 }}>ADIDAS Official Store</Text>
                  <Text style={{ fontSize: 11 }}>Online 1 phút trước</Text>
                </View>
                <View style={{
                  marginLeft: 110
                }}>
                  <View style={{
                    borderColor: 'red',
                    backgroundColor: 'white',
                    borderWidth: 1, // Độ rộng của border
                    borderRadius: 1, // Độ cong của border
                    width: 80,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={{ color: 'red' }}>Xem Shop</Text>
                  </View>
                </View>
              </View>
              <View style={{
                paddingTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                <Text style={{fontSize: 11, color: 'red'}}> 19,9k</Text>
                <Text style={{fontSize: 11, paddingLeft: 5}}> Sản phẩm</Text>
                <Text style={{fontSize: 11, color: 'red', paddingLeft: 10}}> 4.8</Text>
                <Text style={{fontSize: 11, paddingLeft: 5}}> Đánh giá</Text>
                <Text style={{fontSize: 11, color: 'red', paddingLeft: 10}}> 100% </Text>
                <Text style={{fontSize: 11, paddingLeft: 5}}> Phản hồi Chat</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={{
          paddingTop: 10,
          paddingBottom: 50,
        }}>
          <View style={{
            backgroundColor: 'white',
            paddingLeft: 10,
            paddingTop: 10,
          }}>
            <Text style={{
              fontWeight: 'bold',
              marginBottom: 15,
              fontSize: 14,
            }}>Mô tả sản phẩm</Text>
            {route?.params?.describe?.slice(0, isExpanded ? route?.params?.describe?.length : 5).map((description, index) => (
              <Text
                key={index}
                style={{
                  marginTop: 10,
                  fontSize: 13,
                  marginBottom: 10,
                }}
              >
                {description}
              </Text>
            ))}
            {route?.params?.describe?.length > 5 && (
              <Pressable onPress={handleToggleExpand}>
                <Text style={{
                  fontSize: 15,
                  color: 'blue',
                }}>
                  {isExpanded ? 'Thu gọn' : 'Xem thêm'}
                </Text>
              </Pressable>
            )}
          </View>
        </View>
      </ScrollView>
      <View style={{
      }}>
        <Toast style={{
          width: '100%',
        }} ref={(ref) => Toast.setRef(ref)} />
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 0,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#E0E0E0',
      }}>
        <Pressable style={{
          alignItems: 'center',
          marginRight: 20,
          marginLeft: 10,
          marginTop: 5,
        }}>
          <AntDesign name="message1" size={24} color="red" />
          <Text style={{
            color: 'black',
            fontSize: 12,
            marginTop: 5,
          }}>Chat ngay</Text>
        </Pressable>

        <Pressable style={{
          alignItems: 'center',
          borderLeftWidth: 1,
          borderLeftColor: 'gainsboro',
          paddingLeft: 8,
          marginRight: 10,
        }}>
          <MaterialIcons name="add-shopping-cart" size={24} color="red" />
          <Text style={{
            color: 'black',
            fontSize: 12,
            marginTop: 5,
          }}>Thêm vào giỏ hàng</Text>
        </Pressable>

        <Pressable style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'red',
          paddingVertical: 10,
          paddingHorizontal: 20,
          marginLeft: 10,
          marginRight: -20, // thêm điều chỉnh này để kéo dài bên phải thêm 10
        }}>
          <Text style={{
            color: 'white',
            fontSize: 14,
          }}>Mua với voucher</Text>
          <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
            <Text style={{
              fontSize: 15,
              textDecorationLine: 'underline',
              color: 'white',
              fontWeight: 'bold',
              marginBottom: -5,
            }}>đ</Text>
            <Text style={{
              fontSize: 15,
              color: 'white',
            }}>{Math.floor(route?.params?.price).toLocaleString('vi-VN')}</Text>
          </View>
        </Pressable>
      </View>

    </SafeAreaView>
  );
}
