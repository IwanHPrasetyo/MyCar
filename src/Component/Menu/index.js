import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {icon} from '../../Theme';
import Styles from './styles';

const Menu = ({navigation, title, select, nameIcon}) => {
  return (
    <Pressable style={Styles.mainView}>
      <icon.Ionicons
        style={{marginRight: 5}}
        color={'#ecf0f1'}
        name={nameIcon}
        size={20}
      />
      <Text style={Styles.textMenu}>{title}</Text>
    </Pressable>
  );
};

export {Menu};
