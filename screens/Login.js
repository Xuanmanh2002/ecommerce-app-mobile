import React, { useState, useEffect } from 'react';
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
    Alert // Added import
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    // useEffect(() => {
    //     const checkLoginStatus = async () => {
    //         try {
    //             const token = await AsyncStorage.getItem("authToken");

    //             if (token) {
    //                 navigation.replace("Main");
    //             }
    //         } catch (err) {
    //             console.log("error message", err);
    //         }
    //     };
    //     checkLoginStatus();
    // }, []);

    const handleLogin = () => {
        const user = {
            email: email,
            password: password,
        };

        axios
            .post("http://192.168.1.187:8000/login", user)
            .then((response) => {
                console.log(response);
                const token = response.data.token;
                AsyncStorage.setItem("authToken", token);
                navigation.replace("Home"); 
            })
            .catch((error) => {
                Alert.alert("Lỗi đăng nhập", "Email hoặc mật khẩu không đúng"); 
                console.log(error);
            });
    };
    return (
        <SafeAreaView
            style={{
                paddingTop: Platform.OS === "android" ? 40 : 0,
                flex: 1,
                backgroundColor: "white",
            }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: 20,
                borderBottomColor: '#ccc',
                borderBottomWidth: 1,
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Register', { isNavigation: false })}>
                    <Ionicons name="arrow-back-outline" size={30} color="tomato" />
                </TouchableOpacity>
                <Text style={{
                    fontSize: 20,
                    textAlign: 'center',
                    flex: 1,
                }}>Đăng nhập</Text>
                <TouchableOpacity>
                    <FontAwesome5 style={{
                        marginRight: 10
                    }} name="store" size={23} color="tomato" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register', { isNavigation: false })}>
                    <AntDesign name="questioncircleo" size={25} color="tomato" />
                </TouchableOpacity>
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
                    <MaterialCommunityIcons name="account-outline" size={24} color="black" />
                    <TextInput
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        style={{
                            flex: 1,
                            backgroundColor: 'white',
                            padding: 10,
                            marginLeft: 10,
                        }}
                        placeholder="Email/Số điện thoại/Tên đăng nhập"
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
                    <Text style={{ color: 'deepskyblue' }}>|</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Home', { isNavigation: false })} style={{ width: screenWidth / 2 - 150, paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', borderRadius: 5, alignItems: 'center' }}>
                        <Text style={{ color: 'deepskyblue' }}>Quên?</Text>
                    </TouchableOpacity>
                </Pressable>
            </View>
            <View style={{
                marginTop: 20,
                flex: 1,
                paddingHorizontal: 20,
            }}>
                <TouchableOpacity onPress={handleLogin} style={{ paddingTop: 10, paddingBottom: 20, backgroundColor: 'gainsboro', borderRadius: 2, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'silver', textAlign: 'center' }}>Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register', { isNavigation: false })} style={{ paddingLeft: 225, }}>
                    <Text style={{ marginTop: 20, color: 'deepskyblue', fontSize: 15 }}>Đăng nhập bằng SMS</Text>
                </TouchableOpacity>

                <Text style={{ marginTop: 20, color: 'silver', fontSize: 15, textAlign: 'center' }}>Hoặc</Text>

                <View style={{ marginTop: 30 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register', { isNavigation: false })} style={{
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
                            <Text style={{ color: 'black', fontSize: 15, textAlign: 'center' }}>Tiếp tục với Google</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Register', { isNavigation: false })} style={{
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
                            <Text style={{ color: 'black', fontSize: 15, textAlign: 'center' }}>Tiếp tục với Facebook</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Register', { isNavigation: false })} style={{
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
                                height: screenHeight * 0.028,
                                resizeMode: "contain",
                            }}
                            source={require("../assets/apple.png")}
                        />
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ color: 'black', fontSize: 15, textAlign: 'center' }}>Tiếp tục với Apple</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                <View style={{ backgroundColor: 'gainsboro', paddingTop: 10, paddingBottom: 50, borderRadius: 2, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ marginRight: 5 }}>Bạn chưa có tài khoản?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register', { isNavigation: true })}>
                            <Text style={{ color: 'deepskyblue' }}>Đăng ký ngay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
};
