import { Text, TouchableOpacity } from "react-native";
import { styles } from "./TemperatureStyle";

export function Button({ unit, onButtonPress }) {
    return (
        <TouchableOpacity onPress={onButtonPress} style={styles.button}>
            <Text style={styles.buttonTxt}>Convert to {unit}</Text>
        </TouchableOpacity>
    )
}