import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  Linking,
  View,
} from 'react-native';

function ImageDemo() {
  const handleLinkPress = () => {
    // Replace 'https://example.com' with the desired URL
    Linking.openURL('https://example.com');
  };
  return (
    <ScrollView>
      <ImageBackground
        imageStyle={{shadowColor: 'red'}}
        source={require('../assets/image/greyGradient.jpg')}>
        <Image
          style={imageStyle.image}
          alt="Home-image"
          source={require('../assets/image/homeImage.jpg')}
        />
        <Text style={imageStyle.imageText}>Normal Image</Text>
        <Image
          style={imageStyle.image}
          source={require('../assets/image/github.png')}
          blurRadius={12}
        />
        <Text style={imageStyle.imageText}>blurred Image</Text>
        <Image
          style={imageStyle.image}
          source={require('../assets/image/random.png')}
          fadeDuration={5000}
        />
        <Text style={imageStyle.imageText}>animated Image</Text>
        <Text numberOfLines={1} onPress={handleLinkPress}>
          sadadasd
        </Text>
      </ImageBackground>
    </ScrollView>
  );
}

const imageStyle = StyleSheet.create({
  image: {
    marginTop: 30,
    width: 250,
    height: 250,
    borderRadius: 12,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageText: {
    justifyContent: 'center',
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default ImageDemo;
