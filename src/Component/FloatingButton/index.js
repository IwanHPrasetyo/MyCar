import React from 'react';
import {Text, View, Pressable} from 'react-native';

const FloatingButton = ({}) => {
  return (
    <Pressable
      style={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        height: 50,
        width: 50,
        borderRadius: 100,
        backgroundColor: 'pink',
      }}
    />
  );
};
export {FloatingButton};
