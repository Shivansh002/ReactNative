import {StyleSheet, Text, View} from 'react-native';

const tableStyle = StyleSheet.create({
  modalBody: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 50,

    shadowColor: '#000',
    elevation: 5,
  },
  modalInput: {
    borderWidth: 1,
    margin: 10,
    fontSize: 20,
    width: 200,
  },
  modalbutton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    alignSelf: 'center',
  },
  openModal: {
    margin: 10,
    padding: 10,
    alignSelf: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 20,
  },
  openModalText: {
    color: 'white',

    fontSize: 20,
  },
});

export default tableStyle;
