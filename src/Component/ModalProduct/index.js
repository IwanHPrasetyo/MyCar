import React from 'react';
import {
  Text,
  View,
  Modal,
  Pressable,
  StyleSheet,
  ScrollView,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {Formik} from 'formik';
import {colors, icon} from '../../Theme';
import {Picker} from '@react-native-picker/picker';
import Styles from './styles';
import {addItem} from '../../Helper';
// import {registerUser} from '../../helpers/sqlDatabase';

const ModalProduct = ({modalVisible, setModalVisible, getAll}) => {
  const save = value => {
    let data = {
      model: value.model,
      versi: value.Version,
      msrp: value.Price,
      negara: 'Japan',
      pintu: value.Door,
      body: value.Body,
      bahanbakar: value.Bahanbakar,
    };
    addItem(data)
      .then(() => {
        getAll('All');
        setModalVisible(false);
      })
      .catch(() => {
        setModalVisible(false);
      });
  };
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={Styles.centeredView}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{width: '100%', height: '100%'}}>
          <View style={Styles.modalView}>
            <View style={Styles.viewHeader}>
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                style={Styles.closeButton}>
                <icon.FontAwesome style={Styles.iconHeader} name="close" />
              </Pressable>
              <icon.FontAwesome5 style={Styles.iconHeader} name="car-side" />
              <Text style={Styles.fontTitle} numberOfLines={1}>
                Add Car
              </Text>
            </View>

            <Formik
              initialValues={{
                model: '',
                Version: '',
                Price: '',
                Door: '',
                Body: 'Wagon',
                Bahanbakar: '',
              }}
              onSubmit={values => save(values)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                values,
              }) => (
                <>
                  <View style={Styles.viewOrder}>
                    <TextInput
                      onChangeText={handleChange('model')}
                      style={Styles.inputText}
                      placeholder="Model"
                      value={values.model}
                      placeholderTextColor={colors.fontSub1}
                    />
                    <TextInput
                      onChangeText={handleChange('Version')}
                      style={Styles.inputText}
                      placeholder="Version"
                      value={values.Version}
                      placeholderTextColor={colors.fontSub1}
                    />
                    <TextInput
                      keyboardType="number-pad"
                      onChangeText={handleChange('Price')}
                      style={Styles.inputText}
                      placeholder="Price"
                      value={values.Price}
                      placeholderTextColor={colors.fontSub1}
                    />
                    <TextInput
                      keyboardType="number-pad"
                      onChangeText={handleChange('Door')}
                      style={Styles.inputText}
                      placeholder="Door"
                      value={values.Door}
                      placeholderTextColor={colors.fontSub1}
                    />
                    <Picker
                      style={Styles.inputText}
                      selectedValue={values.Body}
                      onValueChange={itemValue =>
                        setFieldValue('Body', itemValue)
                      }>
                      <Picker.Item label="Pilih Kategori" value="" />
                      <Picker.Item label="Wagon" value="Wagon" />
                      <Picker.Item label="Sedan" value="Sedan" />
                    </Picker>
                    <TextInput
                      keyboardType="number-pad"
                      onChangeText={handleChange('Bahanbakar')}
                      style={Styles.inputText}
                      placeholder="Bahan bakar"
                      value={values.Bahanbakar}
                      placeholderTextColor={colors.fontSub1}
                    />
                  </View>
                  <View style={Styles.viewFooter}>
                    <Pressable onPress={handleSubmit} style={Styles.daftar}>
                      <Text style={Styles.fontTitle}>Save</Text>
                    </Pressable>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ModalProduct;
