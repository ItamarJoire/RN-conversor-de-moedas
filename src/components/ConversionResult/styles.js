import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
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

    fecharModal: {
        marginLeft: 30,
        marginTop: 20
    },
 
    containerTouch: {
        marginBottom: 90,
        marginRight: -240
    },

    titulo: {

        color: '#fff',
    }
})