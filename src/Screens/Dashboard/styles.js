import {StyleSheet} from 'react-native';
import {metric} from '../../Theme';

const Styles = StyleSheet.create({
  mainView: {
    height: metric.screenHeight,
    width: metric.screenWidth,
    backgroundColor: '#dff9fb',
  },
  subHeader: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    height: metric.screenHeight * 0.15,
  },
  textSubHead: {
    height: '50%',
    fontSize: 30,
    fontFamily: 'NexaXBold',
  },

  bodyView: {
    height: metric.screenHeight * 0.76,
    padding: 10,
  },
});

export default Styles;
