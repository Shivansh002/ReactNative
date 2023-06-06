import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {setColor} from '../store/colorSlice';

import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

const RandomColor = () => {
  const color = useSelector(state => state.color.value);
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity
        onPress={() => dispatch(setColor())}
        style={styles.randomColor}>
        <Text style={{fontSize: 20}}>random color</Text>
      </TouchableOpacity>
      <FlatList
        keyExtractor={item => item}
        data={color}
        style={{marginBottom: 15}}
        renderItem={({item}) => {
          return (
            <View
              style={{
                backgroundColor: item,
                height: 150,
                width: 150,
                alignSelf: 'center',
                margin: 10,
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default RandomColor;

const styles = StyleSheet.create({
  randomColor: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
});
