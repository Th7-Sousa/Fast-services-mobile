import { StyleSheet, Text, View, Image } from 'react-native'
import PopCorn from './../../assets/popcornLoad.svg'

import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: 'blue'
  },
  slide1: {
    flex: 1,
    flexDirection: 'row',
    gap: 32,
  },
  slide2: {
    flex: 1,
    flexDirection: 'row',
    gap: 32,
  },
  slide3: {
    flex: 1,
    flexDirection: 'row',
    gap: 32,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})


export default function Carrossel() {
  return (
    <Swiper style={styles.wrapper} showsPagination={false} loop={false}>
      <View testID="Hello" style={styles.slide1}>

        <Image
          style={{ width: 150, height: 240 }}
          source={require('./../../assets/jurask.png')}
        />
        <Image
          style={{ width: 150, height: 240 }}
          source={require('./../../assets/jurask.png')}
        />

      </View>

      <View testID="Beautiful" style={styles.slide2}>
        <Image
          style={{ width: 150, height: 240 }}
          source={require('./../../assets/jurask.png')}
        />
        <Image
          style={{ width: 150, height: 240 }}
          source={require('./../../assets/jurask.png')}
        />
      </View>

      <View testID="Simple" style={styles.slide3}>
        <Image
          style={{ width: 150, height: 240 }}
          source={require('./../../assets/jurask.png')}
        />
        <Image
          style={{ width: 150, height: 240 }}
          source={require('./../../assets/jurask.png')}
        />
      </View>
    </Swiper>
  )
}
