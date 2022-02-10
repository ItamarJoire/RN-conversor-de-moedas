import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

export default function Picker(props){
    const placeholder = {
        label: 'Selecione uma moeda...',
        value: null,
        color: '#B2B2B2',
    
    }

    return(
        <RNPickerSelect 
            placeholder={placeholder}
            items={props.moedas}
            onValueChange={(valor) => props.onChange(valor)}
            style={{
                inputIOS: {
                    fontSize: 20,
                    color: 'green'
                },

                inputAndroid: {
                    fontSize: 20,
                    color: '#fff'
                },

            }}
        />
    )
}