import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {Header} from '../../Component';
import {metric} from '../../Theme';
import Styles from './styles';

const Product = ({navigation}) => {
  return (
    // <ScrollView>
    <View style={Styles.mainView}>
      <Header />
      <View
        style={{
          height: metric.screenHeight * 0.435,
          width: '90%',
          alignSelf: 'center',
          borderRadius: 10,
          backgroundColor: 'white',
          elevation: 2,
          justifyContent: 'center',
        }}>
        <ImageBackground
          style={{height: '80%', width: '100%'}}
          resizeMode="cover"
          source={{
            uri: 'https://www.goo-net.com/carphoto/10101015_201808.jpg',
          }}
        />
      </View>
      <View
        style={{
          height: metric.screenHeight * 0.435,
          // backgroundColor: 'yellow',
        }}></View>
    </View>
    // </ScrollView>
  );
};

export default Product;
