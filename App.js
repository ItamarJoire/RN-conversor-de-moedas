import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, StatusBar, TouchableOpacity, ActivityIndicator, Keyboard, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ConversionResult from './src/components/ConversionResult';
import Picker from './src/components/Picker';
import api from './src/services/api';

import { styles } from './styles';
import { theme } from './src/global/styles/theme';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_600SemiBold, NunitoSans_800ExtraBold } from '@expo-google-fonts/nunito-sans';

export default function App() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [moedas, setMoedas] = useState([]);


  const [moedaSelecionada, setMoedaSelecionada] = useState(null);
  const [moedaBValor, setMoedaBValor] = useState(0);

  const [valorMoeda, setValorMoeda] = useState(null);
  const [valorConvertido, setValorConvertido] = useState(0);

  useEffect(() => {
    async function loadMoedas(){
      const response = await api.get('all')

      let arrayMoedas = []
      // converter para de objeto para array
      Object.keys(response.data).map((key) => {
        arrayMoedas.push({
          key: key,
          label: key,
          value: key
        })
      })

      setMoedas(arrayMoedas);
    }

    loadMoedas();
  }, []);

  async function converter(){
    if(moedaSelecionada === null || moedaBValor === 0){
      alert("Por favor selecione uma moeda!");
      return;
    }

    // USD-BRL ele devolve quanto é 1 dólar convetido para reais
    const response = await api.get(`all/${moedaSelecionada}-BRL`);
    // console.log(response.data[moedaSelecionada].ask);

    let resultado = (response.data[moedaSelecionada].ask * parseFloat(moedaBValor));
    setValorConvertido(`R$ ${resultado.toFixed(2)}`);
    setValorMoeda(moedaBValor);

    setVisibleModal(true);
    // Aqui fecha o teclado caso esteja aberto
    Keyboard.dismiss();

  }

  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular, 
    NunitoSans_700Bold, 
    NunitoSans_600SemiBold,
    NunitoSans_800ExtraBold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

    return(
      <LinearGradient style={styles.container}
        colors={['#2C2D30', '#090A0A']}
      >
    
        <View style={styles.areaMoeda}>
          <Picker moedas={moedas} onChange={(moeda) => setMoedaSelecionada(moeda)} />
        </View>
  
        <View style={styles.areaValor}>
          <TextInput 
            style={styles.input}
            placeholder='Digite o valor'
            placeholderTextColor={theme.colors.textInput}
            keyboardType='numeric'
            onChangeText={(valor) => setMoedaBValor(valor)}
          />
        </View>
  
        <TouchableOpacity style={styles.areaTouch} onPress={converter}>
          <LinearGradient style={styles.botaoArea} 
           colors={['#4C4E51', '#333538']}
          > 
            <Text style={styles.botaoTexto}>Converter</Text>
          </LinearGradient>
        </TouchableOpacity>
      
        {valorConvertido !== 0 && (
          <Modal transparent={true} animationType='slide' visible={visibleModal}>
            <ConversionResult 
              valorConvertido={valorConvertido} 
              valorMoeda={valorMoeda}
              moedaSelecionada={moedaSelecionada}
              fechar={() => setVisibleModal(false)}/>
          </Modal>
        )}        

        <StatusBar />
      </LinearGradient>
    );
}

