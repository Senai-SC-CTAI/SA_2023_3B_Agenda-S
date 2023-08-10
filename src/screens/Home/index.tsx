import React from 'react';
import { View } from 'react-native';
import { Link } from "expo-router";


export function Home() {
  return (
    <View>
        <Link href="/EarlyExit">Saídas Antecipadas</Link>
        <Link href="/RequestExit">Solicitar Saída</Link>
        <Link href="/LateArrival">Chegadas Atrasadas</Link>
        <Link href="/LogIn">Sair</Link>
    </View>
  );
}