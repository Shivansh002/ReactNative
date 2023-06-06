import React, {useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';

import textStyle from './textStyle.style';

function TextDemo() {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        style={textStyle.inputField}
        onChangeText={newText => setText(newText)}
        placeholder="Write a sentence"
        multiline={true}
        maxLength={60}
        blurOnSubmit={true}
        numberOfLines={2}
        cursorColor={'purple'}
        editable={true}
        enterKeyHint={'done'}
        importantForAutofill="yes"
        inlineImageLeft="random"
        inputMode="text"
        returnKeyLabel="android"
      />

      <Text
        numberOfLines={1}
        style={[textStyle.normalText, textStyle.textContainer]}>
        {text}
      </Text>

      <Text
        numberOfLines={1}
        style={[textStyle.boldText, textStyle.textContainer]}>
        {text}
      </Text>
      <Text
        numberOfLines={1}
        style={[textStyle.disabledText, textStyle.textContainer]}
        disabled>
        {text}
      </Text>
      <Text
        numberOfLines={1}
        style={[textStyle.italicText, textStyle.textContainer]}>
        {text}
      </Text>
    </View>
  );
}

export default TextDemo;
