import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {icon} from '../../Theme';
import Styles from './styles';

const Menu = ({
  navigation,
  title,
  select,
  nameIcon,
  setIsMenu,
  isMenu,
  getAll,
}) => {
  return (
    <Pressable
      onPress={() => {
        setIsMenu(title), getAll(title);
      }}
      style={[
        Styles.mainView,
        {backgroundColor: isMenu == title ? '#ffa801' : 'white'},
      ]}>
      <icon.Ionicons
        style={{marginRight: 5}}
        color={isMenu == title ? '#ecf0f1' : '#747d8c'}
        name={nameIcon}
        size={20}
      />
      <Text
        style={[
          Styles.textMenu,
          {color: isMenu == title ? '#ecf0f1' : '#747d8c'},
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

export {Menu};
