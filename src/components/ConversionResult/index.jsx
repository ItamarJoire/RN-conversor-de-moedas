import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export default function ConversionResult(props){
    const colorOne = theme.colors.primary80;
    const colorTwo = theme.colors.secondary80;
    
    return(
        <LinearGradient style={styles.container}
            colors={[ colorOne, colorTwo ]}
        > 
            <TouchableOpacity style={styles.containerTouch} onPress={props.fechar}>
                <Image style={styles.fecharModal}
                    source={require('../../assets/close.png')}
                />
            </TouchableOpacity>

            <Text style={[styles.titulo, { marginTop: -20,fontFamily: theme.fonts.title800, fontSize: 24}]}>
                {props.valorMoeda} {props.moedaSelecionada} 
            </Text>
            
            <Text style={[styles.titulo, { fontSize: 18, marginTop: 22, fontFamily: theme.fonts.title600 }]}>
                corresponde a
            </Text>

            <Text style={[styles.titulo, { fontSize: 32, fontFamily: theme.fonts.title800 }]}>
                {props.valorConvertido}
            </Text>
        
        </LinearGradient>
    )
}

