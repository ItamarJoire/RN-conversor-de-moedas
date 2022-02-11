import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { theme } from '../../global/styles/theme'; 

export default function Picker(props){
    const placeholder = {
        label: 'Selecione uma moeda...',
        value: null,
        color: theme.colors.textInput,
    }

    return(
        <RNPickerSelect 
            placeholder={placeholder}
            items={props.moedas}
            onValueChange={(valor) => props.onChange(valor)}
            style={{
                inputIOS: {
                    fontSize: 18,
                    color: '#fff'
                },

                inputAndroid: {
                    fontSize: 18,
                    color: '#fff',
                },

            }}
        />
    )
}