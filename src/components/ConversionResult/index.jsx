import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';

export default function ConversionResult(props){
    return(
        <LinearGradient style={styles.container}
            colors={['#E80B0B', '#DC4F00']}
        > 
            <TouchableOpacity style={styles.containerTouch} onPress={props.fechar}>
                <Text style={styles.fecharModal}>FECHAR</Text>
            </TouchableOpacity>

            <Text style={styles.titulo}>
                {props.valorMoeda} {props.moedaSelecionada} 
            </Text>
            
            <Text style={[styles.titulo, { fontSize: 18, margin: 10 }]}>
                Corresponde a
            </Text>

            <Text style={styles.titulo}>
                {props.valorConvertido}
            </Text>
        
        </LinearGradient>
    )
}

