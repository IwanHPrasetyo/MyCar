import React, {useState} from 'react';
import {ImageBackground, Pressable, ScrollView, Text, View} from 'react-native';
import {Header} from '../../Component';
import {metric, icon} from '../../Theme';
import Styles from './styles';

const Product = ({route, navigation}) => {
  const {item} = route.params;
  const [product, setProduct] = useState(item);

  let detail = JSON.stringify(item);
  console.log(item.image);

  return (
    <ScrollView>
      <View style={Styles.mainView}>
        <Header navigation={navigation} type={2} />
        <View style={Styles.viewImage}>
          <ImageBackground
            style={Styles.imageBg}
            resizeMode="cover"
            source={{
              uri: `${product.image}`,
            }}
          />
        </View>
        <View style={Styles.footerView}>
          <Text style={Styles.textSubHead}>
            {product.model + ' ' + product.versi}
          </Text>
          <View style={Styles.baseCard}>
            <View
              style={[
                Styles.card,
                {
                  marginRight: '3%',
                },
              ]}>
              <icon.MaterialCommunityIcons
                color={'#fa8231'}
                name={'car-settings'}
                size={30}
              />
              <Text style={Styles.textTitleSps}>{product.body}</Text>
            </View>
            <View
              style={[
                Styles.card,
                {
                  marginRight: '3%',
                },
              ]}>
              <icon.MaterialCommunityIcons
                color={'#fa8231'}
                name={'car-door'}
                size={30}
              />
              <Text style={Styles.textTitleSps}>{product.pintu}</Text>
            </View>
            <View style={Styles.card}>
              <icon.MaterialCommunityIcons
                color={'#fa8231'}
                name={'fuel'}
                size={30}
              />
              <Text style={Styles.textTitleSps}>
                {product.bahanbakar + ' (L)'}
              </Text>
            </View>
          </View>
          <View style={Styles.basePrice}>
            <View style={Styles.subPrice}>
              <Text style={Styles.textTitlePrice}>price</Text>
              <Text style={Styles.textPrice}>{'¥ ' + product.msrp}</Text>
            </View>
            <View style={Styles.subPrice}>
              <Pressable style={Styles.buttonEdit}>
                <Text style={Styles.textPrice}>Edit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Product;
