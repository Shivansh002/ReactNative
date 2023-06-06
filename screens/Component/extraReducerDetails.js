import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ExtraReducerDetails(props) {
  const {item} = props.route.params;
  console.log(item.name);
  return (
    <View>
      <Text>Login: {item.login}</Text>
      <Text>Repos Link: {item.repos_url}</Text>
      <Text>Profile link: {item.url}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
