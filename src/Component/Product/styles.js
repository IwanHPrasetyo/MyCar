import React from 'react';
import {StyleSheet} from 'react-native';
import {metric} from '../../Theme';

const Styles = StyleSheet.create({
  mainView: {
    height: '100%',
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subView: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  imageView: {width: '90%', height: '40%'},
  textModel: {
    height: '50%',
    fontSize: 14,
    color: '#34495e',
    fontFamily: 'NexaXBold',
  },
  textVersion: {
    height: '50%',
    fontSize: 10,
    color: '#34495e',
    fontFamily: 'NexaRegular',
  },
  textPrice: {
    fontSize: 10,
    marginLeft: 10,
    color: '#34495e',
    fontFamily: 'NexaRegular',
  },
  flag: {
    height: metric.screenHeight * 0.04,
    width: metric.screenHeight * 0.04,
  },
  iconLike: {
    position: 'absolute',
    right: '4%',
    top: '4%',
    borderRadius: 80,
    padding: 2,
    backgroundColor: '#dfe4ea',
  },
  viewDescription: {
    height: '60%',
    width: '100%',
    padding: 10,
  },
  viewTitle: {
    height: '50%',
    width: '100%',
    justifyContent: 'center',
  },
  viewPrice: {
    height: '50%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Styles;
