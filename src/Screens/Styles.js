import {StyleSheet} from 'react-native';
import {metric} from '../Theme';

const Styles = StyleSheet.create({
  mainView: {height: metric.screenHeight, backgroundColor: '#ffa801'},
  bodyView: {flex: 1.2},
  titleBox: {
    height: metric.screenHeight * 0.06,
    width: metric.screenWidth * 0.4,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: metric.screenHeight * 0.04,
  },
  mainImage: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  textTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  textFooter: {
    fontSize: 30,
    width: '80%',
    textAlign: 'center',
    marginTop: '18%',
    color: '#2c3e50',
    fontWeight: 'bold',
  },
  text2Footer: {
    fontSize: 12,
    width: '80%',
    textAlign: 'center',
    color: '#bdc3c7',
  },
  textButton: {
    fontSize: 16,
    color: '#dff9fb',
    fontWeight: 'bold',
  },
  buttonFooter: {
    height: '15%',
    width: '50%',
    marginTop: '10%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fa8231',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 170,
    borderTopRightRadius: 170,
  },
});

export default Styles;
