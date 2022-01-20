import React from 'react';
import BigList from 'react-native-big-list';
import {ScrollView, Text, View, Pressable} from 'react-native';
import {Header, Menu, Product} from '../../Component';
import {metric} from '../../Theme';

import Styles from './styles';

const data = [
  {
    model: 'TOYOTA CAMRY',
    version: 'X',
    value: 1,
    image: 'https://www.goo-net.com/carphoto/10101015_201808.jpg',
  },
  {
    model: 'TOYOTA CAMRY',
    version: 'G',
    value: 2,
    image: 'http://www.goo-net.com/carphoto/10101015_201808a.jpg',
  },
  {
    model: 'TOYOTA CAMRY',
    version: 'WS',
    value: 3,
    image: 'http://www.goo-net.com/carphoto/10101015_201808c.jpg',
  },
  {
    model: 'TOYOTA CAMRY',
    version: 'G LEATHER PACKAGE',
    value: 4,
    image: 'http://www.goo-net.com/carphoto/10101015_201109.jpg',
  },
  {
    model: 'TOYOTA CAMRY',
    version: 'WS LEATHER PACKAGE',
    value: 5,
    image: 'http://www.goo-net.com/carphoto/10101015_200707.jpg',
  },
];

const Dashboard = ({navigation}) => {
  return (
    <View style={Styles.mainView}>
      <Header navigation={navigation} />
      <View style={Styles.subHeader}>
        <Text style={Styles.textSubHead}>Find Your Car</Text>
        <View
          style={{
            height: '50%',
            flexDirection: 'row',
          }}>
          <Menu
            navigation={navigation}
            title={'Sedan'}
            select={1}
            nameIcon={'car-sport'}
          />
          <Menu
            navigation={navigation}
            title={'Wagon'}
            select={1}
            nameIcon={'car'}
          />
        </View>
      </View>
      <View style={Styles.bodyView}>
        <BigList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item, index}) => (
            <Product navigation={navigation} item={item} />
          )}
          // renderEmpty={renderEmpty}
          // renderHeader={<Product />}
          // renderFooter={renderFooter}
          numColumns={2}
          itemHeight={metric.screenHeight * 0.3} // Required (default 0)
          headerHeight={90} // Required to show header
          footerHeight={100} // Required to show footer
        />
      </View>
    </View>
  );
};

export default Dashboard;
