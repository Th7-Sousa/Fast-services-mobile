import { Text, View, Image } from 'react-native';
import { styles } from './../styles/navbar'

export default function () {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Pirata Filmes, 4 Full HD Pro Mega Max!</Text>

      <Image source={require('./../assets/popcorn-load.png')} />
    </View>
  )
}