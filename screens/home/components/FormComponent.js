import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Input, Block} from '../../../components';

const FormComponent = ({formData, onChange, onChecked}) => {
  return (
    <View style={{flex:1}}>
      <Block row top>
        <Input
          name="num1"
          value={formData.num1.val}
          onChange={onChange}
          placeholder="ex: 1"
          inputType="number-pad"
          style={styles.input}
        />
        <CheckBox
          disabled={false}
          value={formData.num1.checked}
          onValueChange={(val) => onChecked('num1', val)}
        />
      </Block>
      <Block row top>
        <Input
          name="num2"
          value={formData.num2.val}
          onChange={onChange}
          placeholder="ex: 1"
          inputType="number-pad"
          style={styles.input}
        />
        <CheckBox
          disabled={false}
          value={formData.num2.checked}
          onValueChange={(val) => onChecked('num2', val)}
        />
      </Block>
      <Block row top>
        <Input
          name="num3"
          value={formData.num3.val}
          onChange={onChange}
          placeholder="ex: 1"
          inputType="number-pad"
          style={styles.input}
        />
        <CheckBox
          disabled={false}
          value={formData.num3.checked}
          onValueChange={(val) => onChecked('num3', val)}
        />
      </Block>
    </View>
  );
};

export default FormComponent;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius:5,
    paddingLeft:5,
    maxHeight:40
  },
});
