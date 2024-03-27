import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {sizes} from '../MockData';
import { IMAGES } from '../assets/image';

const DropdownSize = ({data}) => {
  const [value, setValue] = useState(null);
  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && <Image source={IMAGES.ic_angle_left} style={{width: 20, height: 20}}/>}
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Choose size"
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      renderItem={renderItem}
    />
  );
};

export default DropdownSize;

const styles = StyleSheet.create({
  dropdown: {
    flex: 0.7,
    backgroundColor: '#EEEEEE',
    borderRadius: 12,
    borderColor: '#EEEEEE',
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 15,
  },
  placeholderStyle: {
    fontSize: 15,
  },
  selectedTextStyle: {
    fontSize: 15,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
