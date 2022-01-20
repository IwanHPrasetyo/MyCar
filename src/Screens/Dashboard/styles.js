import {StyleSheet} from 'react-native';
import {metric} from '../../Theme';

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: metric.screenWidth,
    backgroundColor: '#dff9fb',
  },
  subHeader: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    height: metric.screenHeight * 0.2,
  },
  textSubHead: {
    height: '30%',
    fontSize: 30,
    fontFamily: 'NexaXBold',
  },
  bodyView: {
    height: metric.screenHeight * 0.67,
    paddingHorizontal: 10,
    paddingHorizontal: 10,
  },
  floatingView: {
    position: 'absolute',
    bottom: '15%',
    right: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    height: metric.screenHeight * 0.09,
    width: metric.screenHeight * 0.09,
    borderRadius: 100,
    backgroundColor: '#ffa801',
  },
  floatingMenu: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: '15%',
    right: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    height: metric.screenHeight * 0.09,
    width: '78%',
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    backgroundColor: '#ffa801',
  },
});

export default Styles;
