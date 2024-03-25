import {View, Image, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const Search = ({placeholder}) => {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/ic_search.png')}
        style={{width: 20, height: 20}}></Image>
      <TextInput
        style={{
          marginStart: 10,
          color: 'rgba(0, 0, 0, 0.4)',
          fontWeight: 'bold',
          fontSize: 18,
          flex: 1,
        }}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 15,
    paddingHorizontal: 20,
    marginVertical: 25,
  },
});
