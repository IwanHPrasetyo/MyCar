import React from 'react';
import {StyleSheet} from 'react-native';
import {metric} from '../../Theme';

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: metric.screenWidth,
    backgroundColor: 'white',
  },
  viewImage: {
    height: metric.screenHeight * 0.435,
    width: '100%',
    justifyContent: 'center',
  },
  imageBg: {height: '85%', width: '100%'},
  textSubHead: {
    fontSize: 20,
    alignSelf: 'flex-start',
    fontFamily: 'NexaXBold',
    color: 'white',
  },
  textTitlePrice: {
    fontSize: 12,
    fontFamily: 'NexaXBold',
    color: 'white',
    textAlign: 'center',
  },
  textTitleSps: {
    fontSize: 18,
    marginTop: '10%',
    fontFamily: 'NexaXBold',
    color: '#fa8231',
    textAlign: 'center',
  },
  textPrice: {
    fontSize: 20,
    fontFamily: 'NexaXBold',
    color: 'white',
    textAlign: 'center',
  },
  footerView: {
    height: metric.screenHeight * 0.435,
    backgroundColor: '#ffa801',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseCard: {
    height: '45%',
    flexDirection: 'row',
    width: '100%',
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
  },
  card: {
    height: '100%',
    width: '30%',
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  basePrice: {
    height: '35%',
    flexDirection: 'row',
    width: '100%',
    marginTop: 5,
    justifyContent: 'center',
  },
  subPrice: {flex: 1, justifyContent: 'center'},
  buttonEdit: {
    height: '50%',
    width: '100%',
    borderRadius: 50,
    backgroundColor: '#fa8231',
    elevation: 1,
    justifyContent: 'center',
  },
});

export default Styles;
