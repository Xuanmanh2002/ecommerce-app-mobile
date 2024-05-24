import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  ToastAndroid,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Image,
  Dimensions,
  Button,
  Alert // Thêm import này
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import axios from "axios";

export default function Login() {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [showPassword, setShowPassword] = useState(false);

  const [gender, setGender] = useState(null); // Sửa thành null hoặc false tùy thuộc vào cách bạn xử lý giá trị giới tính

  const placeholder = {
    label: 'Chọn giới tính',
    value: null,
    color: '#9EA0A4',
  };

  const options = [
    { label: 'Nam', value: 1 },
    { label: 'Nữ', value: 0 },
  ];

  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const handleRegister = () => {
    const user = {
      phoneNumber: phoneNumber,
      fullName: fullName,
      password: password,
      email: email,
      gender: gender,
    };

    axios
      .post("http:///192.168.1.187:8000/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Đăng ký thành công",
          "Bạn đã đăng ký thành công"
        );
        setPhoneNumber("");
        setFullName("");
        setPassword("");
        setEmail("");
        setGender(null); 
      })
      .catch((error) => {
        Alert.alert(
          "Lỗi đăng ký",
          "Đã xảy ra lỗi khi đăng ký"
        );
        console.log("Đăng ký thất bại", error);
      });
  };

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 40 : 0,
        flex: 1,
        backgroundColor: "white",
      }}>
      <ScrollView>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 20,
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
        }}>
          <Pressable onPress={() => navigation.navigate('Login', { isNavigation: false })}>
            <Ionicons name="arrow-back-outline" size={30} color="tomato" />
          </Pressable>
          <Text style={{
            fontSize: 20,
            textAlign: 'center',
            flex: 1,
          }}>Đăng ký</Text>
          <Pressable onPress={() => navigation.navigate('Register', { isNavigation: false })}>
            <AntDesign name="questioncircleo" size={25} color="tomato" />
          </Pressable>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              width: screenWidth * 0.16,
              height: screenHeight * 0.13,
              resizeMode: "contain",
            }}
            source={require("../assets/shopeeicon.png")}
          />
        </View>
        <View style={{
          paddingLeft: 10,
          paddingRight: 10,
        }}>
          <Pressable style={{
            paddingTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
          }}>
            <Feather name="phone" size={24} color="black" />
            <TextInput
             value={phoneNumber}
             onChangeText={(text) => setPhoneNumber(text)}
              style={{
                flex: 1,
                backgroundColor: 'white',
                padding: 10,
                marginLeft: 10,
              }}
              placeholder="Nhập số điện thoại"
              keyboardType="phone-pad"
            />
          </Pressable>
          <Pressable style={{
            paddingTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
          }}>
            <MaterialCommunityIcons name="account-outline" size={24} color="black" />
            <TextInput
            value={fullName}
            onChangeText={(text) => setFullName(text)}
              style={{
                flex: 1,
                backgroundColor: 'white',
                padding: 10,
                marginLeft: 10,
              }}
              placeholder="Nhập họ tên"
              keyboardType="default"
            />
          </Pressable>
          <Pressable style={{
            paddingTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
          }}>
            <AntDesign name="lock" size={24} color="black" />
            <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
              style={{
                flex: 1,
                backgroundColor: 'white',
                padding: 10,
                marginLeft: 10,
              }}
              placeholder="Mật khẩu"
              secureTextEntry={!showPassword}
            />
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              style={{ padding: 10 }}
            >
              <AntDesign name={showPassword ? "eye" : "eyeo"} size={24} color="black" />
            </Pressable>
          </Pressable>
          <Pressable style={{
            paddingTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
          }}>
            <Entypo name="email" size={24} color="black" />
            <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
              style={{
                flex: 1,
                backgroundColor: 'white',
                padding: 10,
                marginLeft: 10,
              }}
              placeholder="Nhập email"
              keyboardType="email-address"
            />
          </Pressable>
          <Pressable style={{
            paddingTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
          }}>
            <FontAwesome name="intersex" size={24} color="black" />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <RNPickerSelect
                placeholder={placeholder}
                items={options}
                onValueChange={(value) => setGender(value)}
                style={{
                  inputIOS: {
                    backgroundColor: 'white',
                    padding: 10,
                  },
                  inputAndroid: {
                    backgroundColor: 'white',
                    padding: 10,
                  },
                }}
                value={gender}
              />
            </View>
          </Pressable>
        </View>
        <View style={{
          marginTop: 20,
          flex: 1,
          paddingHorizontal: 20,
        }}>
          <Pressable onPress={handleRegister} style={{ paddingTop: 10, paddingBottom: 20, backgroundColor: 'gainsboro', borderRadius: 2, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'silver', textAlign: 'center' }}>Đăng ký</Text>
          </Pressable>
          <Text style={{ marginTop: 20, color: 'silver', fontSize: 15, textAlign: 'center' }}>Hoặc</Text>

          <View style={{ marginTop: 30 }}>
            <Pressable onPress={() => navigation.navigate('Register', { isNavigation: false })} style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 5,
              padding: 10,
            }}>
              <Image
                style={{
                  width: screenWidth * 0.1,
                  height: screenHeight * 0.03,
                  resizeMode: "contain",
                }}
                source={require("../assets/Google.webp")}
              />
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 15, textAlign: 'center' }}>Đăng ký với Google</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Register', { isNavigation: false })} style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 5,
              padding: 10,
            }}>
              <Image
                style={{
                  width: screenWidth * 0.1,
                  height: screenHeight * 0.025,
                  resizeMode: "contain",
                }}
                source={require("../assets/facebook.png")}
              />
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 15, textAlign: 'center' }}>Đăng ký với Facebook</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Register', { isNavigation: false })} style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 5,
              padding: 10,
              marginBottom: 50,
            }}>
              <Image
                style={{
                  width: screenWidth * 0.1,
                  height: screenHeight * 0.028,
                  resizeMode: "contain",
                }}
                source={require("../assets/apple.png")}
              />
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 15, textAlign: 'center' }}>Đăng ký với Apple</Text>
              </View>
            </Pressable>

          </View>
        </View>
      </ScrollView>
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <View style={{ backgroundColor: 'gainsboro', paddingTop: 10, paddingBottom: 50, borderRadius: 2, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ marginRight: 5 }}>Bạn đã có tài khoản?</Text>
            <Pressable onPress={() => navigation.navigate('Login', { isNavigation: true })}>
              <Text style={{ color: 'deepskyblue' }}>Đăng nhập ngay</Text>
            </Pressable>
          </View>
        </View>
      </View>

    </SafeAreaView>
  );
};
