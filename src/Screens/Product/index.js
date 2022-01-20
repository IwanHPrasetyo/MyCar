import React from 'react';
import {ScrollView, Text, View} from 'react-native';
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
          backgroundColor: 'pink',
          elevation: 2,
        }}></View>
      <View
        style={{
          height: metric.screenHeight * 0.435,
          backgroundColor: 'yellow',
        }}></View>
    </View>
    // </ScrollView>
  );
};

export default Product;
