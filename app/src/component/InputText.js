import React from 'react';
import { TextInput, StyleSheet} from 'react-native';
const InputText = props => {
  return (
    <TextInput
      style={[styles.TextInput, props.container]}
      placeholder={props.Placeholder}
      placeholderTextColor="#003f5c"
      onChangeText={props.onChangeText}></TextInput>
  );
};
const styles = StyleSheet.create({
  TextInput: {
    backgroundColor: '#eba134',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
});
export default InputText;