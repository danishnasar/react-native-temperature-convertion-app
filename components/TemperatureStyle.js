import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    root: {
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    input: {
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 50,
        paddingLeft: 20
    },
    unit: {
        position: 'absolute',
        alignSelf: 'flex-end',
        paddingRight: 25,
        fontSize: 24
    },
    temperatureText: {
        color: '#fff',
        fontSize: 70
    },
    button: {
        backgroundColor: '#000',
        paddingHorizontal: 80,
        paddingVertical: 20,
        borderRadius: 50
    },
    buttonTxt: {
        color: '#fff',
        fontWeight: 'bold'
    }
  });