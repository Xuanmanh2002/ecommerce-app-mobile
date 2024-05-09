import React, { useState } from 'react';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  Text,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  Platform
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SliderBox } from "react-native-image-slider-box";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProductDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const handleGoBack = () => {
    navigation.goBack();
  };


  return (
    <>
      <SafeAreaView style={{
        paddingTop: Platform.OS === "android" ? 40 : 0,
        flex: 1,
        backgroundColor: 'white',
      }}>
        <View
          style={{
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
            <TouchableOpacity onPress={handleGoBack}>
              <Ionicons name="arrow-back-sharp" size={32} color="tomato" />
            </TouchableOpacity>
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
              style={{ width: '100%' }}
              placeholder={route?.params?.title?.length > 25 ? route?.params?.title?.substring(0, 25) + '...' : route?.params?.title}
              placeholderTextColor="red"
            />
          </Pressable>
          <TouchableOpacity onPress={() => navigation.navigate('Cart', { isNavigation: false })}>
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
            <MaterialCommunityIcons style={{
              marginRight: 10,
            }} name="share-outline" size={38} color="tomato" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={24} color="tomato" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            contentContainerStyle={{ flexGrow: 1 }}>
            {route.params.carouselImages.map((item, index) => (
              <View style={{ width, height: width }} key={index}>
                <ImageBackground
                  style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                  source={{ uri: item }}
                />
              </View>
            ))}
          </ScrollView>
          <View style={{
            margin: 10,
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 15,
              textDecorationLine: 'underline',
              color: 'red',
              fontWeight: 'bold',
              marginBottom: -5,
            }}>đ</Text>
            <Text style={{
              fontSize: 25,
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
                color: 'lightgray',
              }}>đ</Text>
              <Text style={{
                fontSize: 20,
                color: 'lightgray',
                textDecorationLine: 'line-through',
              }}>{Math.floor(route?.params?.oldPrice).toLocaleString('vi-VN')}</Text>
            </View>
            {route?.params?.discount !== "" && (
              <View style={{
                width: 60,
                height: 30,
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
                  fontSize: 23,
                  color: 'red',
                }}>-{route?.params?.discount}%</Text>
              </View>
            )}
          </View>
          <View style={{
            marginLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            width: 125,
            height: 30,
            borderWidth: 1,
            borderColor: '#22d3ee',
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
            borderBottomLeftRadius: 3,
            borderBottomRightRadius: 3,
          }}>
            <Text style={{
              color: '#22d3ee'
            }}> Miễn phí trả hàng</Text>
          </View>
          <View style={{
            margin: 10,
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <Text style={{
                fontSize: 15,
                fontFamily: 'Time New Romans',
              }}>
                <Text style={{ borderRadius: 10, backgroundColor: '#f43f5e', paddingHorizontal: 5, paddingVertical: 2, color: 'white', fontWeight: 'bold' }}>Mall</Text> {route?.params?.title}
              </Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Entypo name="star" size={20} color="#F1C40F" />
            <Text style={{ fontSize: 18}}>4.9 / 5</Text>
            <Text style={{ color: '#f0f0f0'}}>  | </Text>
            <Text style={{ fontSize: 18}}> Đã bán {route?.params?.statistic} </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ProductDetail;