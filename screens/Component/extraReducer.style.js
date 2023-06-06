import {StyleSheet} from 'react-native';

const userStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  featureText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  toggleText: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 20,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  touchableOpacity: {
    borderWidth: 1,
    borderBottomColor: 'gray',
    margin: 10,
  },
});

export default userStyle;
