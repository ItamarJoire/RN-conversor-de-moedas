import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, StatusBar, TouchableOpacity, ActivityIndicator, Keyboard, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ConversionResult from './src/components/ConversionResult';
import Picker from './src/components/Picker';
import api from './src/services/api';

export default function App() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [moedas, setMoedas] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setLoading(false)
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

  if(loading){
    return(
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator color='#fff' size={45}/>
      </View>
    )

  }else{
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
            placeholderTextColor='#B2B2B2'
            keyboardType='numeric'
            onChangeText={(valor) => setMoedaBValor(valor)}
          />
        </View>
  
        <TouchableOpacity style={styles.areaTouch} onPress={converter}>
          <LinearGradient style={styles.botaoArea} 
           colors={['#54575C', '#313336']}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2D30',
    alignItems: 'center',
    paddingTop: 40,
  },

  areaMoeda: {
    width: '90%',
    borderWidth: 2,
    borderColor: '#44464A',
    paddingLeft: 8,
    borderRadius: 8,
    marginBottom: 12
  },

  titulo: {
    fontSize: 15,
    color: '#B2B2B2',
    paddingTop: 12,
    paddingLeft: 12
  },
 
  areaValor: {
    width: '90%',
    borderWidth: 2,
    borderColor: '#44464A',
    borderRadius: 8,
    justifyContent: 'center'
  },

  input: {
    height: 45,
    paddingLeft: 10,
    paddingBottom: 10,
    fontSize: 15,
    marginTop: 8,
    color: '#fff'
  },

  areaTouch: {
    width: '90%'
  },

  botaoArea: {
    marginTop: 18,
    height: 64,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  botaoTexto: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },

});
