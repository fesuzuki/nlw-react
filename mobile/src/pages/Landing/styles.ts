import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8257E5',
        flex: 1,
        justifyContent: 'center',
        padding: 40,

    },
    banner: {
        width: '100%',
        resizeMode: 'contain'
    },

    tittle: {
        color: '#fff',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
        fontFamily: 'Poppins_400Regular'
    },
    tittleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15
    },
    button: {
        height: 120,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        justifyContent: 'space-between',
        padding: 12
    },

    buttonPrimary: {
        backgroundColor: '#9871f5'
    },

    buttonSecondary: { 
        backgroundColor: '#04d361' 
    },
    
    buttonText: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 16, color: '#fff'
    },

    footerConnections: {
        fontFamily:'Poppins_400Regular',
        color:'#d4c2ff',
        fontSize:12,
        lineHeight:20,
        maxWidth:140,
        marginTop:40

    },

});

export default styles;