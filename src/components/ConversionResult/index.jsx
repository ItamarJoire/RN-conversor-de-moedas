import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        marginTop: '80%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '40%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },

    containerTouch: {
        marginBottom: 90,
        marginRight: -240
    },

    fecharModal: {
        fontSize: 22,
    },

    titulo: {
        fontSize: 39,
        fontWeight: 'bold',
        color: '#fff'
    }

})

// const styles = StyleSheet.create({
//     areaResultado: {
//         borderRadius: 8,
//         width: '90%',
//         backgroundColor: '#fff',
//         marginTop: 35,
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingHorizontal: 25,
//         paddingVertical: 45
//       },
    
//       valorConvertido: {
//         fontSize: 39,
//         fontWeight: 'bold',
//         color: '#fff'
//       }
// })