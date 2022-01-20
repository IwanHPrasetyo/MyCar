import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {icon} from '../../Theme';
import Styles from './styles';

const Menu = ({navigation, title, select, nameIcon}) => {
  return (
    <Pressable
      style={[
        Styles.mainView,
        {backgroundColor: select == true ? '#ffa801' : 'white'},
      ]}>
      <icon.Ionicons
        style={{marginRight: 5}}
        color={select == true ? '#ecf0f1' : '#747d8c'}
        name={nameIcon}
        size={20}
      />
      <Text
        style={[
          Styles.textMenu,
          {color: select == true ? '#ecf0f1' : '#747d8c'},
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

export {Menu};
