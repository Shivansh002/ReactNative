import React from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import moment from 'moment';

function PhoneBook() {
  const dateArr = [
    '2023-04-26T00:00:00+0530',
    '2023-04-29T00:00:00+0530',
    '2023-04-30T00:00:00+0530',
    '2023-05-01T00:00:00+0530',
    '2023-05-03T00:00:00+0530',
    '2023-05-05T00:00:00+0530',
    '2023-05-06T00:00:00+0530',
  ];
  const Items_data = [
    {
      name: 'jhonathan clark',
      title: 12356456,
    },
    {
      name: 'john spears',
      title: 2135645689,
    },
    {
      name: 'john rhodes',
      title: 2135645689,
    },
    {
      name: 'alex revans',
      title: 564536246,
    },
    {
      name: 'jennifer woodpainter',
      title: 26534651,
    },
    {
      name: 'jason smith',
      title: 4521624561,
    },
    {
      name: 'carl johnson',
      title: 562113323,
    },
    {
      name: 'charles logan',
      title: 2180980923,
    },
    {
      name: 'justin patterson',
      title: 2132180193,
    },
    {
      name: 'hailey savage',
      title: 213214124,
    },
  ];

  return (
    <View style={{flex: 1}}>
      <Text style={phoneStyle.heading}>Phone Book</Text>
      <FlatList
        data={dateArr}
        horizontal={true}
        style={phoneStyle.dateBody}
        renderItem={item => (
          <View style={phoneStyle.dateView}>
            <Text style={phoneStyle.dateStyle}>
              {moment(item.item).format('ddd ,Do MMMM')}
            </Text>
          </View>
        )}
      />
      <FlatList
        data={Items_data}
        renderItem={item => (
          <View>
            <TouchableOpacity
              onPress={() => console.log(item.item.name)}
              style={[phoneStyle.contactItem, phoneStyle.shadowProp]}>
              <Text style={phoneStyle.nameStyle}>{item.item.name}</Text>
              <Text style={phoneStyle.numberStyle}>{item.item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const phoneStyle = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 30,
  },

  contactItem: {
    borderWidth: 1,
    margin: 10,

    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  nameStyle: {
    padding: 10,
    color: 'blue',
    fontSize: 20,
  },
  numberStyle: {
    fontSize: 20,
    color: 'purple',
    padding: 10,
  },
  shadowProp: {
    elevation: 20,
    shadowColor: 'grey',
  },
  dateBody: {
    marginBottom: 10,
  },
  dateView: {
    borderWidth: 1,
    marginRight: 10,
    borderColor: 'blue',

    borderRadius: 20,
  },
  dateStyle: {
    color: 'blue',
    fontSize: 30,
  },
});

export default PhoneBook;
