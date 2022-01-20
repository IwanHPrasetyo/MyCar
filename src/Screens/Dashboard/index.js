import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Header} from '../../Component';

import Styles from './styles';

const Dashboard = ({navigation}) => {
  return (
    <View style={Styles.mainView}>
      <ScrollView>
        <Header navigation={navigation} />
        <View style={Styles.subHeader}>
          <Text style={Styles.textSubHead}>Find Your Car</Text>
        </View>
        <View style={Styles.bodyView}></View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
