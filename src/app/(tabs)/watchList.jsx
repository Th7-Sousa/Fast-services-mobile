import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import { Link } from 'expo-router';
import { styles } from './../../styles/styles_global'
import NavbarHeader from './../../components/NavbarHeader'
import CardMovie from "../../components/CardMovie";
import { useEffect, useState } from 'react';
import { ScrollView } from "react-native-gesture-handler";
import IconBox from './../../../assets/icon-box.svg'
import { optionsGet } from "../utils/optionsGet";

export default function Lista() {


  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <NavbarHeader type='list' />

      </View>



    </View >
  );
}
