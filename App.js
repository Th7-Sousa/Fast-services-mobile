import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from './styles/styles_global';
import Navbar from './components/Navbar';

//import SvgUri from 'react-native-svg-uri';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Navbar />

    </View>
  );
}
