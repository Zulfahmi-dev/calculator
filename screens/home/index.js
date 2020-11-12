import React, { useState} from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {sizes} from '../../constants/theme';
import {Input, Block, Text} from '../../components';
import FormComponent from './components/FormComponent';
import OperatorComponent from './components/OperatorComponent';

const Home = () => {
  const [formData, setFormData] = useState({
    num1: {
      checked: false,
      val: '0',
    },
    num2: {
      checked: false,
      val: '0',
    },
    num3: {
      checked: false,
      val: '0',
    },
  });
  const [result, setResult] = useState(0);

  const onChange = (name, value) => {
    setFormData({...formData, [name]: {...formData[name], val: value}});
  };

  const onChecked = (name, value) => {
    setFormData({...formData, [name]: {...formData[name], checked: value}});
  };

  const calculate = (operator) => {
    let checkedValues = Object.keys(formData).filter((item) => {
      return formData[item].checked;
    });
    if (checkedValues.length < 2) {
      setResult(0);
      return alert('Checklist 2 komponen jika ingin melakukan perhitungan');
    }

    let total = checkedValues.reduce((prev, current, currentIndex) => {
      if (currentIndex === 0)
        return eval(formData[checkedValues[currentIndex]].val);

      return eval(prev + operator + formData[checkedValues[currentIndex]].val);
    }, 0);

    setResult(total);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block flex={0.7}>
          <FormComponent
            formData={formData}
            onChange={onChange}
            onChecked={onChecked}
          />
        </Block>
        <Block flex={0.5} style={styles.buttonContainer}>
          <OperatorComponent calculate={calculate} />
        </Block>
        <Block row space="between" top padding={[sizes.base, 0, 0, 0]} style={{width: '90%'}}>
          <Text h1 bold>
            Hasil :{' '}
          </Text>
          <Text h1 bold>
            {result}
          </Text>
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.base,
  },
  buttonContainer: {
    paddingBottom: sizes.base * 2,
    borderBottomWidth: 1,
    width: '90%',
  },
});
