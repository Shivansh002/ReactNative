import {StyleSheet} from 'react-native';

const taskStyle = StyleSheet.create({
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },

  taskNameBody: {
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskText: {
    padding: 10,
    color: 'grey',
  },
  addTask: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red',
    padding: 10,
    backgroundColor: 'black',
  },
  modalStyle: {
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
    justifyContent: 'center',
  },
});

export default taskStyle;
