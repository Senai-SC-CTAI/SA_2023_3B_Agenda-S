import React from 'react';
import { View } from 'react-native';
import { Link } from "expo-router";


export function Home() {
  return (
    <View>
        <Link href="/Home">Entrar</Link>
        <Link href="/ForgotPassword">Esqueceu a senha?</Link>
        <Link href="/ParentsLogIn">Logar como responsável</Link>
    </View>
  );
}