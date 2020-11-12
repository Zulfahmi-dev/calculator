import React from 'react';
import {StyleSheet} from 'react-native';
import {Input, Block, Text, Button} from '../../../components';

const OperatorComponent = ({calculate}) => {
  return (
    <Block flex={1} margin={[30, 0, 0, 0]} row space="around">
      <Button
        style={styles.button}
        color='red'
        onPress={()=>calculate('+')}>
        <Text bold h2 white>
          +
        </Text>
      </Button>
      <Button
        style={styles.button}
        color='red'
        onPress={()=>calculate('-')}>
        <Text bold h2 white>
          -
        </Text>
      </Button>
      <Button
        style={styles.button}
        color='red'
        onPress={()=>calculate('*')}>
        <Text bold h2 white>
          X
        </Text>
      </Button>
      <Button
        style={styles.button}
        color='red'
        onPress={()=>calculate('/')}>
        <Text bold h2 white>
          /
        </Text>
      </Button>
    </Block>
  );
};

export default React.memo(OperatorComponent);

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});
