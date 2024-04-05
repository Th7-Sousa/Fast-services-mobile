import { View, Text, ScrollView } from 'react-native';
import { styles } from '../../styles/styles_global';
import LoadSpinner from './../../components/LoadSpinner'
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

import NavbarHeader from './../../components/NavbarHeader'

export default function Home() {

  const [loading, setLoading] = useState(true);


  return (
    <View style={styles.container}>
      <NavbarHeader type='home' />

      {


        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>


        </ScrollView>

      }

    </View>
  );
}
