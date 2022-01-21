import React, {useEffect, useState} from 'react';
import BigList from 'react-native-big-list';
import {
  ScrollView,
  Text,
  View,
  Pressable,
  TextInput,
  StatusBar,
} from 'react-native';
import {Header, Menu, Product, FloatingButton} from '../../Component';
import {metric, icon} from '../../Theme';
import {getItem} from '../../Helper';

import Styles from './styles';

const Dashboard = ({navigation}) => {
  const [isMenu, setIsMenu] = useState('All');
  const [itemCar, setItemCar] = useState([]);

  useEffect(() => {
    getAll(isMenu);
  }, []);

  const getAll = async filter => {
    console.log(filter);
    let data = await getItem(filter);

    setItemCar(data);
  };

  return (
    <View style={Styles.mainView}>
      <Header navigation={navigation} type={1} />
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
            getAll={getAll}
          />
          <Menu
            navigation={navigation}
            title={'Wagon'}
            select={false}
            nameIcon={'car'}
            isMenu={isMenu}
            setIsMenu={setIsMenu}
            getAll={getAll}
          />
          <Menu
            navigation={navigation}
            title={'Sedan'}
            select={false}
            isMenu={isMenu}
            nameIcon={'car-sport'}
            setIsMenu={setIsMenu}
            getAll={getAll}
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
          data={itemCar}
          renderItem={({item, index}) => (
            <Product navigation={navigation} item={item} />
          )}
          // renderEmpty={renderEmpty}
          // renderHeader={<Product />}
          // renderFooter={renderFooter}
          numColumns={2}
          itemHeight={metric.screenHeight * 0.3}
          headerHeight={90}
          footerHeight={100}
        />

        <Pressable
          onPress={() => console.log('menuu menuu')}
          style={Styles.floatingView}>
          <icon.Ionicons color={'#ecf0f1'} name={'add'} size={20} />
        </Pressable>
      </View>
    </View>
  );
};

export default Dashboard;
