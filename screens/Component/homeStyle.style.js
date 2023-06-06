import {StyleSheet} from 'react-native';

const HomeStyle = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 24,
    fontSize: 22,
  },
  imageView: {
    flex: 1,
  },
  homeImage: {
    marginTop: 30,
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  homeButtons: {
    backgroundColor: '#074E8F',
    padding: 10,
    width: '95%',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default HomeStyle;
