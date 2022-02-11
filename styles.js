import { StyleSheet } from 'react-native';
import { theme } from './src/global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C2D30',
        alignItems: 'center',
        paddingTop: 40,
      },
    
      areaMoeda: {
        width: '90%',
        backgroundColor: theme.colors.fillInput,
        paddingLeft: 8,
        borderRadius: 8,
        marginBottom: 12
      },
    
      titulo: {
        fontSize: 15,
        color: theme.colors.textInput,
        paddingTop: 12,
        paddingLeft: 12
      },
     
      areaValor: {
        width: '90%',
        backgroundColor: theme.colors.fillInput,
        borderRadius: 8,
        justifyContent: 'center'
      },
    
      input: {
        height: 45,
        paddingLeft: 16,
        paddingBottom: 10,
        fontSize: 15,
        marginTop: 8,
        color: '#fff'
      },
    
      areaTouch: {
        width: '90%',
        marginTop: 8
      },
    
      botaoArea: {
        marginTop: 18,
        height: 64,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      botaoTexto: {
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        letterSpacing: 0.6,
        color: '#fff',
        // fontWeight: 'bold',
      },
})
