import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator} = createNativeStackNavigator();

import { Start } from '../screens/Start/Start';
import { Login } from '../screens/Login/Login';
import { ParentsLogin } from '../screens/ParentsLogin/ParentsLogin';
import { ForgotPassword} from '../screens/ForgotPassword/ForgotPassword';
import { Main } from '../screens/Main/Main';
import { MainParents } from '../screens/MainParents/MainParents';
import { ChegadaAtrasada } from '../screens/ChegadaAtrasada/ChegadaAtrasada';
import { PChegadaAtrasada } from '../screens/PChegadaAtrasada/PChegadaAtrasada';
import { Requests } from '../screens/Requests/Requests';
import { PRequests } from '../screens/PRequests/PRequests';
import { SaidaAntecipada } from '../screens/SaidaAntecipada/SaidaAntecipada';
import { PSaidaAntecipada } from '../screens/PSaidaAntecipada/PSaidaAntecipada';
import { SolicitarSaida } from '../screens/SolicitarSaida/SolicitarSaida';
import { PSolicitarSaida } from '../screens/PSolicitarSaida/PSolicitarSaida';
import { ImageBackground } from 'react-native/types';

export function StackRoutes(){
    return(
        <Navigator
            /*screenOptions={{
                headerShown: false
            }}*/
        >
            <Screen
                name='Start'
                options={{
                    title: 'Start',
                    headerShown: false
                }}
                component={Start}
            />
            <Screen
                name='Login'
                options={{
                    title: 'Login',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={Login}
            />
            <Screen
                name='ParentsLogin'
                options={{
                    title: 'Parents Login',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={ParentsLogin}
            />
            <Screen
                name='Main'
                options={{
                    title: 'Main',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={Main}
            />
            <Screen
                name='MainParents'
                options={{
                    title: 'Main Parents',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={MainParents}
            />
            <Screen
                name='SolicitarSaida'
                options={{
                    title: 'Solicitar Saída',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={SolicitarSaida}
            />
            <Screen
                name='PSolicitarSaida'
                options={{
                    title: 'Solicitar Saída',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={PSolicitarSaida}
            />
            <Screen
                name='SaidaAntecipada'
                options={{
                    title: 'Saída Antecipada',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerTintColor: 'black'
                }}
                component={SaidaAntecipada}
            />
            <Screen
                name='PSaidaAntecipada'
                options={{
                    title: 'Saída Antecipada',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={PSaidaAntecipada}
            />
            <Screen
                name='ForgotPassword'
                options={{
                    title: 'Forgot Password',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={ForgotPassword}
            />
            <Screen
                name='ChegadaAtrasada'
                options={{
                    title: 'Chegada Atrasada',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerTintColor: 'black'
                }}
                component={ChegadaAtrasada}
            />
            <Screen
                name='PChegadaAtrasada'
                options={{
                    title: 'Chegada Atrasada',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={PChegadaAtrasada}
            />
            <Screen
                name='Requests'
                options={{
                    title: 'Solicitações',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={Requests}
            />
            <Screen
                name='PRequests'
                options={{
                    title: 'Solicitações',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={PRequests}
            />
        </Navigator>
    )
}