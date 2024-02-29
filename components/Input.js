import { TextInput, View, Text } from "react-native";
import { styles } from "./TemperatureStyle";

export function Input({ unit, onChangeValue }) {
  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        maxLength={4}
        defaultValue="0"
        placeholder="Type your temperature"
        onChangeText={(text) => onChangeValue(text)}
      />
      <Text style={styles.unit}>{unit}</Text>
    </View>
  );
}
