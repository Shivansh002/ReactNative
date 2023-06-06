import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Switch, Text, View} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {toggleSwitch} from '../store/switchSlice';

function ButtonsDemo() {
  const dispatch = useDispatch();
  const enabled = useSelector(state => state.switchButton.enabled);

  const handleSwitchToggle = () => {
    dispatch(toggleSwitch());
  };

  return (
    <View style={[styles.container, enabled && styles.enabledBackground]}>
      <View style={{margin: 15}}>
        <Button title="normal button" />
      </View>
      <View style={{margin: 15}}>
        <Button
          title="Alert button"
          color={enabled ? 'purple' : 'black'}
          onPress={() => Alert.alert('You pressed the button')}
        />
      </View>
      <View style={{margin: 15}}>
        <Button title="disabled button" disabled />
      </View>

      <View style={styles.switchBody}>
        <Switch
          trackColor={{false: 'black', true: 'green'}}
          thumbColor={enabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={handleSwitchToggle}
          style={{alignSelf: 'center'}}
          value={enabled}
        />
        <Text style={enabled ? styles.enableText : styles.disableText}>
          {enabled ? 'Enable ' : 'Disable'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  enabledBackground: {
    backgroundColor: '#000',
  },

  switchBody: {
    margin: 10,
    padding: 10,
  },
  enableText: {
    color: 'white',
    fontSize: 20,
  },
  disableText: {
    color: 'black',
    fontSize: 20,
  },
});

export default ButtonsDemo;
