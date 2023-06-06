import React, {useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FlatList,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import taskStyle from '../Style/taskStyle';

function AsyncStore() {
  const [id, setId] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [TaskName, setTaskName] = useState();
  const [taskList, setTaskList] = useState([]);
  const [listData, setListData] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const setData = async () => {
    taskList.push({id: id, task: TaskName, isComplete: isComplete});
    await AsyncStorage.setItem('TASKS', JSON.stringify(taskList));
    setId(id + 1);
    setTaskName('');
  };
  const getData = async () => {
    const name = await AsyncStorage.getItem('TASKS');

    setListData(JSON.parse(name));
    console.log(JSON.parse(name));
  };

  useEffect(() => {
    getData();
  }, [modalVisible]);
  return (
    <View style={{flex: 1}}>
      <View style={taskStyle.status}>
        <Text>TODO</Text>
        <Text>STATUS</Text>
      </View>

      {/* flatlist to store data */}
      <FlatList
        data={listData}
        renderItem={item => (
          <View style={taskStyle.taskNameBody}>
            <Text
              style={[
                taskStyle.taskText,
                item.item.isComplete
                  ? {textDecorationLine: 'line-through', color: 'green'}
                  : {textDecorationLine: 'none'},
              ]}>
              {item.item.task}
            </Text>
            {/* underline over task when checked */}
            <TouchableOpacity
              onPress={() => {
                setIsComplete(!isComplete);
                item.item.isComplete = isComplete;
              }}>
              <MaterialCommunityIcons
                color="green"
                style={{padding: 10}}
                name="check-circle"
                size={20}
              />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* modal body for new data*/}
      <Modal animationType="fade" visible={modalVisible}>
        <View style={taskStyle.modalStyle}>
          <TextInput
            style={taskStyle.modalInput}
            onChangeText={text => setTaskName(text)}
            placeholder="title"
            value={TaskName}
          />
          <Pressable
            style={taskStyle.modalbutton}
            onPress={() => {
              setData();
              setModalVisible(!modalVisible);
            }}>
            <Text>Submit</Text>
          </Pressable>
        </View>
      </Modal>

      {/* Open modal */}
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
          setIsComplete(false);
        }}>
        <Text style={taskStyle.addTask}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AsyncStore;
