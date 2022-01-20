import {StyleSheet} from 'react-native';
import {metric} from '../../Theme';

const Styles = StyleSheet.create({
  mainView: {
    height: metric.screenHeight * 0.09,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    flex: 1,
    padding: 12,
    fontSize: 20,
    fontFamily: 'NexaXBold',
  },
  iconHead: {
    marginRight: 10,
  },
  iconHeadLeft: {
    marginLeft: 10,
  },
});

export default Styles;
