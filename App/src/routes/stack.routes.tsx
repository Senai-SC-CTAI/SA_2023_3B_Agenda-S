import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator} = createNativeStackNavigator();

import { SplashScreen } from '../screens/SplashScreen/SplashScreen';
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

export function StackRoutes(){
    return(
        <Navigator
            /*screenOptions={{
                headerShown: false
            }}*/
        >
            <Screen
                name='Splash'
                options={{
                    title: 'Splash',
                    headerShown: false
                }}
                component={SplashScreen}
            />
            <Screen
                name='Login'
                options={{
                    title: 'Login',
                    headerTitleAlign: 'center',
                    headerTintColor: 'black'
                }}
                component={Login}
            />
            <Screen
                name='ParentsLogin'
                options={{
                    title: 'Parents Login',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerTintColor: 'black'
                }}
                component={ParentsLogin}
            />
            <Screen
                name='Main'
                options={{
                    title: 'Main',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerTintColor: 'black'
                }}
                component={Main}
            />
            <Screen
                name='MainParents'
                options={{
                    title: 'Main Parents',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerTintColor: 'black'
                }}
                component={MainParents}
            />
            <Screen
                name='SolicitarSaida'
                options={{
                    title: 'Solicitar Saída',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerTintColor: 'black'
                }}
                component={SolicitarSaida}
            />
            <Screen
                name='PSolicitarSaida'
                options={{
                    title: 'Solicitar Saída',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerTintColor: 'black'
                }}
                component={PSolicitarSaida}
            />
            <Screen
                name='SaidaAntecipada'
                options={{
                    title: 'Saída Antecipada',
                    headerTitleAlign: 'center',
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
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerTintColor: 'black'
                }}
                component={PSaidaAntecipada}
            />
            <Screen
                name='ForgotPassword'
                options={{
                    title: 'Forgot Password',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerTintColor: 'black'
                }}
                component={ForgotPassword}
            />
            <Screen
                name='ChegadaAtrasada'
                options={{
                    title: 'Chegada Atrasada',
                    headerTitleAlign: 'center',
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
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerTintColor: 'black'
                }}
                component={PChegadaAtrasada}
            />
            <Screen
                name='Requests'
                options={{
                    title: 'Solicitações',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerTintColor: 'black'
                }}
                component={Requests}
            />
            <Screen
                name='PRequests'
                options={{
                    title: 'Solicitações',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerTintColor: 'black'
                }}
                component={PRequests}
            />
        </Navigator>
    )
}