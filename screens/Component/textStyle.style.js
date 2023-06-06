import {StyleSheet} from 'react-native';

const textStyle = StyleSheet.create({
  textContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    borderBottomEndRadius: 10,
  },
  inputField: {
    borderWidth: 2,
    fontSize: 20,
    margin: 7,
    marginBottom: 15,
    borderColor: 'cyan',
    borderRadius: 10,
  },
  normalText: {
    fontSize: 30,
    padding: 10,
    fontFamily: 'BebasNeue-Regular',
    color: 'black',
    margin: 10,
  },
  boldText: {
    fontSize: 30,
    padding: 10,
    color: 'red',
    fontFamily: 'DancingScript-Regular',
    margin: 10,
  },
  disabledText: {
    fontSize: 30,
    padding: 10,
    fontFamily: 'DancingScript-Bold',
    margin: 10,
  },
  italicText: {
    fontSize: 30,
    padding: 10,
    color: 'green',
    margin: 10,
    fontStyle: 'italic',
  },
});

export default textStyle;
