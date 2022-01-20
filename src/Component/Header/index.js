import React from 'react';
import {Text, View} from 'react-native';
import {icon} from '../../Theme';
import Styles from './styles';

const Header = navigation => {
  return (
    <View style={Styles.mainView}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <icon.FontAwesome5
          style={Styles.iconHeadLeft}
          size={20}
          name="car-side"
          color="#ffa801"
        />
        <Text style={Styles.textTitle}>MyCar</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <icon.Ionicons
          style={Styles.iconHead}
          size={20}
          name="mail"
          color="#3498db"
        />
        <icon.MaterialCommunityIcons
          style={Styles.iconHead}
          size={20}
          name="bell"
        />
      </View>
    </View>
  );
};

export {Header};
