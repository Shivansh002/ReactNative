import React, {useEffect} from 'react';
import {View, Switch, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFeature, fetchGitHubData} from '../store/getUsersSlice';
import userStyle from './extraReducer.style';

const ExtraReducer = props => {
  const featureEnabled = useSelector(state => state.feature.featureEnabled);
  const githubData = useSelector(state => state.feature.githubData);
  const isLoading = useSelector(state => state.feature.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGitHubData());
  }, []);

  const handleToggle = () => {
    dispatch(toggleFeature());
  };

  return (
    <View style={userStyle.container}>
      <Text style={userStyle.featureText}>
        Feature is {featureEnabled ? 'enabled' : 'disabled'}
      </Text>
      {/* <Switch value={featureEnabled} onValueChange={handleToggle} /> */}
      <TouchableOpacity onPress={handleToggle}>
        <Text style={userStyle.toggleText}>click here</Text>
      </TouchableOpacity>

      {isLoading ? (
        <Text style={userStyle.loadingText}>Loading...</Text>
      ) : (
        <FlatList
          data={githubData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={userStyle.touchableOpacity}
              onPress={() => props.navigation.navigate('userDetail', {item})}>
              <Text style={userStyle.itemText}>{item.login}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      {/* {featureEnabled ? (
        <FlatList
          data={githubData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={userStyle.touchableOpacity}
              onPress={() => props.navigation.navigate('userDetail', {item})}>
              <Text style={userStyle.itemText}>{item.login}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>Loading...</Text>
      )} */}
    </View>
  );
};

export default ExtraReducer;
