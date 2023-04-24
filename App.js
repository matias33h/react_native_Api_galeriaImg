import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ImagenPaginas from './paginas/ImagenPaginas';
import PaginasHome from './paginas/PaginasHome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// creo un objeto el cula va a contener una funcion que nos permite navegar  de cierta manera
const Stack=createNativeStackNavigator()  



export default function App() {

  return (

    // NavigatonContainer : sirve par crear multiples pantallas = rauter
    <NavigationContainer>   
      {/* Stack navigator es un contenedor donde vamos a colorcar otros componenetes (Stack.Screem) es como un route es donde va cada pagina de mi app , por cada paguina va un (Stack.screem)    */}
    <Stack.Navigator>

      {/*Stack.Screen  = raute  */}
     <Stack.Screen name='Imagenes' component={ImagenPaginas}/>
     <Stack.Screen name="Home" component={PaginasHome} />



    </Stack.Navigator>
     

  <StatusBar/>

    </NavigationContainer>
  
  );

}


