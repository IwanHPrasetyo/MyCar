import React from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './styles';

const Product = ({navigation, item}) => {
  return (
    <View style={Styles.mainView}>
      <View
        style={{
          height: '100%',
          width: '100%',
          borderRadius: 10,
          backgroundColor: 'white',
          alignItems: 'center',
        }}>
        <Image
          style={{width: '90%', height: '40%'}}
          resizeMode="cover"
          source={{
            uri: `${item.image}`,
          }}
        />
      </View>
    </View>
  );
};
export {Product};
