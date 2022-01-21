import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {icon} from '../../Theme';
import Styles from './styles';

const Product = ({navigation, item}) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Product', {
          item: item,
        })
      }
      style={Styles.mainView}>
      <View style={Styles.subView}>
        <Image
          style={Styles.imageView}
          resizeMode="cover"
          source={{
            uri: `${item.image}`,
          }}
        />
        <icon.Ionicons
          style={Styles.iconLike}
          size={20}
          name="heart"
          color="#eb3b5a"
        />
        <View style={Styles.viewDescription}>
          <View style={Styles.viewTitle}>
            <Text numberOfLines={2} style={Styles.textModel}>
              {item.model}
            </Text>
            <Text numberOfLines={2} style={Styles.textVersion}>
              {item.versi}
            </Text>
          </View>
          <View style={Styles.viewPrice}>
            <Image
              style={Styles.flag}
              resizeMode="cover"
              source={{
                uri: `https://cdn-icons-png.flaticon.com/128/197/197604.png`,
              }}
            />
            <Text numberOfLines={1} style={Styles.textPrice}>
              {'¥ ' + item.msrp}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
export {Product};
