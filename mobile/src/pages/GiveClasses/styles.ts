import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8257E5',
        flex: 1,
        justifyContent: 'center',
        padding: 40,

    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    tittle: {
        color: '#fff',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,
        fontFamily: 'Archivo_700Bold'
    },
    description: {
        marginTop:24,
        color:'#d4c2ff',
        fontSize:16,
        lineHeight:26,
        fontFamily: 'Poppins_400Regular'
    },

    okButton: {
        height: 58,
        borderRadius: 8,
        alignItems:'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#04d361' ,
        marginVertical:40
    },

    okButtonText: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        color: '#fff'
    },

});

export default styles;