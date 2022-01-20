import {StyleSheet} from 'react-native';
import {metric} from '../../Theme';

const Styles = StyleSheet.create({
  mainView: {
    height: metric.screenHeight,
    width: metric.screenWidth,
  },
  subHeader: {
    padding: 10,
    justifyContent: 'center',
    height: metric.screenHeight * 0.08,
  },
  textSubHead: {
    fontSize: 25,
    fontFamily: 'NexaXBold',
  },
  bodyView: {
    height: metric.screenHeight * 0.83,
    backgroundColor: 'red',
  },
});

export default Styles;
