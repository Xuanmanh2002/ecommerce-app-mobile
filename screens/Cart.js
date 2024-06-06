import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  ToastAndroid,
  SafeAreaView,
  Platform,
  Pressable,
  Image,
  Dimensions,
  Button,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
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

  const limitText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };

  const [selectedValue, setSelectedValue] = useState('option1');

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
          paddingBottom: 5,
          paddingTop: 50,
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
        paddingTop: 80,
      }}>
        <ScrollView>
          <View style={{
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            borderColor: 'white',
            borderWidth: 1,
            marginHorizontal: 10,
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <View style={{
                flexDirection: 'row',
              }}>
                <View style={{
                  borderRadius: 3,
                  width: 20,
                  height: 20,
                  backgroundColor: 'white',
                  borderColor: 'black',
                  borderWidth: 1,
                }}></View>
                <Pressable style={{
                  flexDirection: 'row',
                  paddingLeft: 20,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Feather name="inbox" size={15} color="black" />
                  <Text style={{ paddingLeft: 5, fontWeight: 'bold', fontSize: 14 }}>Máy đo nồng độ oxy trong máu</Text>
                  <AntDesign style={{ marginLeft: 3 }} name="right" size={12} color="gray" />
                </Pressable>
              </View>
              <Pressable>
                <Text style={{ marginRight: 3, fontSize: 14, color: 'gray' }}>Sửa</Text>
              </Pressable>
            </View>
            <View style={{
              paddingTop: 20,
              alignItems: 'center',
              flexDirection: 'row'
            }}>
              <View style={{
                borderRadius: 3,
                width: 20,
                height: 20,
                backgroundColor: 'white',
                borderColor: 'black',
                borderWidth: 1,
                marginBottom: 10, // Khoảng cách giữa View này và Pressable
              }}></View>
              <View style={{
                paddingLeft: 10,
                flex: 1,
              }}>
                <Pressable style={{
                  flexDirection: 'row'

                }}>
                  <View style={{
                    width: 100,
                    height: 100,
                    overflow: 'hidden',
                  }}>
                    <Image
                      source={{ uri: 'https://down-vn.img.susercontent.com/file/sg-11134201-22120-5r7geo1arskv2f' }}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 10,
                      }}
                      resizeMode="cover"
                    />
                  </View>
                  <Text style={{ fontSize: 14, paddingLeft: 10 }}>
                    {limitText('[Mã CLS2404A giảm 30k đơn 150k] 【Hàng Có Sẵn】 Giỏ Đựng Đồ Giặt Quần Áo Bẩn Có Thể Gập Lại', 30)}
                  </Text>
                  <View style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                  <Picker
                    selectedValue={selectedValue}
                    style={{
                      height: 50,
                      width: 200,
                    }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                    <Picker.Item label="Option 1" value="option1" />
                    <Picker.Item label="Option 2" value="option2" />
                    <Picker.Item label="Option 3" value="option3" />
                    <Picker.Item label="Option 4" value="option4" />
                    <Picker.Item label="Option 5" value="option5" />
                  </Picker>
                </View>
                </Pressable>
              </View>
            </View>
          </View>
  

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

