import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { s } from './App.style';
import { ImageBackground } from 'react-native';
import hotTemperature from './assets/hot.png';
import coldTemperature from './assets/cold.png';
import { Input } from './components/Input';
import { useEffect, useState } from 'react';
import { DisplayText } from './components/DisplayText';
import { Button } from './components/Button';
import { convertUnit, getOpposite, isCold } from './utils/temperature';

export default function App() {
  const [inputValue, setInputValue] = useState('0');
  const [unit, setUnit] = useState('°C');
  const [currBackground, setCurrBackground] = useState(coldTemperature);

  const checkValue = () => {
    if (isNaN(inputValue)) return "";
    else return convertUnit(inputValue, getOpposite(unit));
  };

  useEffect(() => {
    const isColdTemp = isCold(inputValue, unit);
    setCurrBackground(isColdTemp ? coldTemperature : hotTemperature);
  }, [inputValue, unit]);

  return (
    <ImageBackground style={s.imageBackground} source={currBackground}>
    <SafeAreaProvider>
      <SafeAreaView style={s.root}>
        <View style={s.workspace}>
          <DisplayText temperature={checkValue()} unit={getOpposite(unit)}/>
          <Input unit={unit} onChangeValue={(text) => setInputValue(text)}/>
          <Button unit={unit} onButtonPress={() => setUnit(getOpposite(unit))}/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    </ImageBackground>
  );
}
