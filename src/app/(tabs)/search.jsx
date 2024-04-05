import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';
import { styles } from './../../styles/styles_global'
import NavbarHeader from './../../components/NavbarHeader'
import { useEffect, useState } from 'react';
import { gray1, orange, blue, gray2 } from './../../styles/colorPalette'
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

export default function Search() {


  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <NavbarHeader type='search' />
      </View>

      <ScrollView style={{ display: 'flex', maxHeight: 'max-content', gap: 20 }}
        showsVerticalScrollIndicator={false}>

        <TextInput
          style={
            { width: 370, paddingVertical: 8, paddingHorizontal: 12, color: '#fff', backgroundColor: gray2, borderRadius: 56 }
          }
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder='Pesquisar serviços...'
          placeholderTextColor="#fff"
        />

        <View style={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 24, paddingTop: 32, paddingLeft: 8 }}>



        </View>

      </ScrollView>

    </View >
  );
}