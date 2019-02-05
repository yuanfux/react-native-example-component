import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const ExampleComponent = (props) => {
  const { text } = props;
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

ExampleComponent.propTypes = {
  text: PropTypes.string,
};

ExampleComponent.defaultProps = {
  text: 'Hello World!',
};

export default ExampleComponent;
