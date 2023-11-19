import { Tabs } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';
import { gray3 } from './../../styles/colorPalette'

export default function TabRoutesLayout() {
  return (
    <Tabs
      screenOptions={
        {
          headerShown: false,
          tabBarStyle: { backgroundColor: gray3, borderColor: gray3, paddingBottom: 8 }
        }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Início',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name='home' size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name='search'
        options={{
          title: 'Pesquisar',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name='search' size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name='watchList'
        options={{
          title: 'Minha lista',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name='bookmark' size={size} color={color} />
          )
        }}
      />

    </Tabs>
  )
}