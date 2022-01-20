import React, {useState} from 'react';
import BigList from 'react-native-big-list';
import {ScrollView, Text, View, Pressable, TextInput} from 'react-native';
import {Header, Menu, Product, FloatingButton} from '../../Component';
import {metric, icon} from '../../Theme';

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
  const [isMenu, setIsMenu] = useState('All');

  return (
    <View style={Styles.mainView}>
      <ScrollView>
        <Header navigation={navigation} />
        <View style={Styles.subHeader}>
          <Text style={Styles.textSubHead}>Find Your Car</Text>
          <View
            style={{
              height: '30%',
              flexDirection: 'row',
            }}>
            <Menu
              navigation={navigation}
              title={'All'}
              select={true}
              nameIcon={'car-outline'}
              isMenu={isMenu}
              setIsMenu={setIsMenu}
            />
            <Menu
              navigation={navigation}
              title={'Wagon'}
              select={false}
              nameIcon={'car'}
              isMenu={isMenu}
              setIsMenu={setIsMenu}
            />
            <Menu
              navigation={navigation}
              title={'Sedan'}
              select={false}
              isMenu={isMenu}
              nameIcon={'car-sport'}
              setIsMenu={setIsMenu}
            />
          </View>
          <TextInput
            placeholder="Search"
            style={{
              height: '30%',
              width: '100%',
              borderRadius: 10,
              backgroundColor: 'white',
              marginTop: '2%',
              padding: 10,
            }}
            // onChangeText={onChangeText}
            // value={text}
          />
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
          {/* {isMenu == true ? (
          <View style={Styles.floatingMenu}>
            <icon.Ionicons
              style={{flex: 1, textAlign: 'center'}}
              color={'#ecf0f1'}
              name={'add'}
              size={20}
            />
            <icon.Ionicons
              style={{flex: 1, textAlign: 'center'}}
              color={'#ecf0f1'}
              name={'add'}
              size={20}
            />
          </View>
        ) : null} */}

          {/* <TextInput
              style={{
                height: '80%',
                width: '95%',
                borderRadius: 50,
                backgroundColor: 'white',
                margin: 12,
                padding: 10,
              }}
              onChangeText={onChangeText}
              value={text}
            /> */}

          <Pressable
            onPress={() => setIsMenu(!isMenu)}
            style={Styles.floatingView}>
            <icon.Ionicons color={'#ecf0f1'} name={'add'} size={20} />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
