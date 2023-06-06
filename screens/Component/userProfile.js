import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  Button,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function UserProfile(props) {
  const loginName = props.route.params;
  const [data, setData] = useState([]);
  const fetchApi = async () => {
    await axios
      .get(`https://api.github.com/users/${loginName}`)
      .then(json => setData(json.data));
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <LinearGradient colors={['#43cea2', '#185a9d']}>
      <ScrollView>
        <View style={userStyle.viewBody}>
          <Image
            style={userStyle.imgStyle}
            source={{uri: `${data.avatar_url}`}}
          />
          <Text style={userStyle.textStyle}>Name: {data.name}</Text>
          <Text style={userStyle.textStyle}>bio: {data.bio}</Text>

          <Text style={userStyle.textStyle}>
            Twitter: {data.twitter_username}
          </Text>
          <Text style={userStyle.textStyle}>
            Public Repos: {data.public_repos}
          </Text>
          <Text style={userStyle.textStyle}>Email: {data.email}</Text>
          <Text style={userStyle.textStyle}>Company: {data.company}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={userStyle.textStyle}> Blog:</Text>
            <Text
              onPress={() => Linking.openURL(data.blog)}
              style={[userStyle.textStyle, userStyle.blogStyle]}>
              {data.blog}
            </Text>
          </View>

          <Text style={userStyle.textStyle}>created at: {data.created_at}</Text>
          <Text style={userStyle.textStyle}>Updated at: {data.updated_at}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={userStyle.followers}>Followers: {data.followers}</Text>
            <Text style={userStyle.followers}>Following: {data.following}</Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
const userStyle = StyleSheet.create({
  viewBody: {
    flex: 1,
    padding: 10,
  },
  imgStyle: {
    width: 200,
    margin: 10,
    borderRadius: 100,
    alignSelf: 'center',
    height: 200,
  },
  textStyle: {
    fontSize: 20,
    color: 'black',
    padding: 10,
  },
  blogStyle: {
    color: 'blue',
  },
  followers: {
    backgroundColor: '#43cea2',
    color: '#185a9d',
    padding: 10,
    fontSize: 15,
    margin: 20,
    fontWeight: 'bold',
  },
});

export default UserProfile;
