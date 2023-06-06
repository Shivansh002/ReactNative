import React from 'react';
import {Image, Text, TouchableOpacity, ScrollView, View} from 'react-native';
import HomeStyle from './homeStyle.style';

function HomeScreen(props) {
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View style={HomeStyle.imageView}>
          <Image
            style={HomeStyle.homeImage}
            source={require('../assets/image/homeImage.jpg')}
          />
        </View>
        <View style={HomeStyle.container}>
          <Text style={HomeStyle.text}>This is Home screen</Text>
          <TouchableOpacity style={HomeStyle.homeButtons}>
            <Text
              style={HomeStyle.buttonText}
              onPress={() => props.navigation.navigate('getUsers')}>
              Get Users
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={HomeStyle.homeButtons}>
            <Text
              style={HomeStyle.buttonText}
              onPress={() => props.navigation.navigate('buttons')}>
              Buttons props
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={HomeStyle.homeButtons}>
            <Text
              style={HomeStyle.buttonText}
              onPress={() => props.navigation.navigate('imageDemo')}>
              All image props
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={HomeStyle.homeButtons}>
            <Text
              style={HomeStyle.buttonText}
              onPress={() => props.navigation.navigate('textDemo')}>
              All text props
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={HomeStyle.homeButtons}>
            <Text
              style={HomeStyle.buttonText}
              onPress={() => props.navigation.navigate('phoneBook')}>
              Contacts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={HomeStyle.homeButtons}>
            <Text
              style={HomeStyle.buttonText}
              onPress={() => props.navigation.navigate('colorChanger')}>
              Random color
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={HomeStyle.homeButtons}>
            <Text
              style={HomeStyle.buttonText}
              onPress={() => props.navigation.navigate('async')}>
              Async Store Crud
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={HomeStyle.homeButtons}>
            <Text
              style={HomeStyle.buttonText}
              onPress={() => props.navigation.navigate('extra')}>
              Async thunk(extrareducer)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
