import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {icon} from '../../Theme';
import Styles from './styles';

const StartUp = ({navigation}) => {
  return (
    <View style={Styles.mainView}>
      <View style={Styles.bodyView}>
        <View style={Styles.titleBox}>
          <icon.FontAwesome5 name="car-side" />
          <Text style={Styles.textTitle}>My Car</Text>
        </View>
        <Image
          style={Styles.mainImage}
          source={require('../../Assets/Images/toyota.png')}
        />
      </View>
      <View style={Styles.footer}>
        <Text style={Styles.textFooter}>Everything about your car</Text>
        <Text style={Styles.text2Footer}>
          Everything is easier when you can do everything in your hands
        </Text>
        <Pressable style={Styles.buttonFooter}>
          <Text style={Styles.textButton}>Let's Start</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default StartUp;
