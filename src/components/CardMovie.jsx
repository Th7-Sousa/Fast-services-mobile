import { View, Image, Text } from 'react-native';
import { styles } from './../styles/cardMovie'

export default function CardMovie({ pathImage, title, ...props }) {

  return (

    <View style={styles.content} {...props} >
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${pathImage}`
        }}
      />
      <Text numberOfLines={1} style={styles.title} >{title}</Text>

    </View>
  )
}
