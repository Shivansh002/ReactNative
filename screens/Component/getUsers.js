import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

const GitApi = () => {
  const navigation = useNavigation();
  const myApi = 'https://api.github.com/users';
  const [data, setData] = useState([]);
  const fetchApi = async () => {
    await axios.get(myApi).then(json => {
      setData(json.data);
    });
  };

  const renderitem = props => {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={apiStyle.profileBody}
          onPress={() =>
            navigation.navigate('userProfile', (loginName = props.item.login))
          }>
          <Text style={apiStyle.textStyle}>{props.item.login}</Text>
          <Image
            style={apiStyle.imgStyle}
            source={{uri: `${props.item.avatar_url}`}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return <FlatList data={data} renderItem={renderitem} />;
};

const apiStyle = StyleSheet.create({
  profileBody: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  textStyle: {
    fontSize: 20,
    color: 'red',
    padding: 10,
  },
  imgStyle: {
    width: 80,
    height: 80,
  },
});

export default GitApi;
