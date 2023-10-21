import { View, Text, Button } from 'react-native';
import { styles } from '../../styles/styles_global';
import NavbarHeader from './../../components/NavbarHeader'
import LoadSpinner from './../../components/LoadSpinner'
import { Link } from 'expo-router';
import Carrossel from '../../components/Carrossel';


export default function Home() {
  return (
    <View style={styles.container}>
      <NavbarHeader type='home' />
      <Link style={{ color: 'white' }} href='/detail' >To Details Link </Link>
      <View style={styles.destaquesContainer} >
        <Carrossel />
      </View>
    </View>
  );
}
