import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from '../styles/navbarHeader'
import IconBack from './../../assets/icon-back.svg'
import { MaterialIcons } from '@expo/vector-icons';
import { gray1, orange } from './../styles/colorPalette'
import { useNavigation } from 'expo-router';

export default function Navbar({ type }) {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmVhNmI0NGU0MjEwZjljYjczNzdlZTM5MTE2OTVlOSIsInN1YiI6IjY1MWRlYjkzOGMyMmMwMDBjOTA4YjliYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P7ppdL_-iHK0G7Y16XP_Bg_z6R-IYL_8YFX6qCTAk7Q'
    }
  };

  const [isClicked, setIsClicked] = useState(false);
  const [userInfo, setUserInfo] = useState({})
  const navigate = useNavigation()



  useEffect(() => {
    fetch('https://api.themoviedb.org/3/account/20726886', options)
      .then(response => response.json())
      .then(response => {
        setUserInfo(response)
        console.log(response)
      })
      .catch(err => console.error(err));
  }, []);

  const limitedUsername = userInfo.username ? userInfo.username.substr(0, 6) : '';

  const handlePress = () => {
    setIsClicked(!isClicked);
    if (isClicked) {
      Alert.alert('Removido de favoritos');
    } else {
      Alert.alert('Adicionado aos favoritos');
    }
  };

  const iconColor = isClicked ? orange : gray1;

  return (
    <View style={styles.container}>
      {type === 'home' &&
        <View style={styles.cardHome} >
          <Text style={styles.textBold}>O que você quer assistir, {userInfo.name || limitedUsername} ?</Text>

        </View>
      }

      {type === 'search' &&
        <View style={styles.cardSearch}>
          <TouchableOpacity onPress={() => navigate.canGoBack() ? navigate.goBack() : null}>
            <IconBack width={40} height={20} />
          </TouchableOpacity>
          <Text style={styles.textRegular}>Search</Text>
        </View>
      }

      {type === 'detail' && (
        <View style={styles.cardSearch}>
          <TouchableOpacity onPress={() => {
            navigate.canGoBack() ? navigate.goBack() : null
          }}
          >
            <IconBack width={40} height={20} />
          </TouchableOpacity>
          <Text style={styles.textRegular}>Detalhes</Text>
          <TouchableOpacity>
            <MaterialIcons onPress={() => handlePress()} name='bookmark' size={28} color={iconColor} />
          </TouchableOpacity>
        </View>
      )}

      {type === 'list' &&
        <View style={styles.cardSearch}>
          <TouchableOpacity onPress={() => navigate.canGoBack() ? navigate.goBack() : null}>
            <IconBack width={40} height={20} />
          </TouchableOpacity>
          <Text style={styles.textRegular}>Minha lista</Text>
        </View>
      }

    </View>
  )
}


//CHAMADAS
// <NavbarHeader type='home' />
// <NavbarHeader type='search' />
// <NavbarHeader type='detail' />
// <NavbarHeader type='list' />