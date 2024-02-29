import { Text } from "react-native";
import { styles } from "./TemperatureStyle";

export function DisplayText({ temperature, unit }) {
    return <Text style={styles.temperatureText}>{temperature} {unit}</Text>
}