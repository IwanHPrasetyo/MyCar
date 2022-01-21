import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {Header} from '../../Component';
import {metric} from '../../Theme';
import Styles from './styles';

const Product = ({navigation}) => {
  return (
    <ScrollView>
      <View style={Styles.mainView}>
        <Header navigation={navigation} type={2} />
        <View
          style={{
            height: metric.screenHeight * 0.435,
            width: '100%',
            // alignSelf: 'center',
            // backgroundColor: 'red',
            justifyContent: 'center',
          }}>
          <ImageBackground
            style={{height: '85%', width: '100%'}}
            resizeMode="cover"
            source={{
              uri: 'https://www.goo-net.com/carphoto/10101015_201808.jpg',
            }}
          />
        </View>
        <View
          style={{
            height: metric.screenHeight * 0.435,
            backgroundColor: '#ffa801',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}></View>
      </View>
    </ScrollView>
  );
};

export default Product;
