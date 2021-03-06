import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { StyleSheet } from 'react-native';
import { Archivo_400Regular_Italic, Archivo_700Bold } from '@expo-google-fonts/archivo';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:'#e6e6f0',
        borderRadius:8,
        marginBottom:16,
        overflow:'hidden',
    },
    profile:{
        flexDirection:'row',
        alignItems:"center",
        padding:24
    },
    avatar:{
        width:64,
        height:64,
        borderRadius:32,
        backgroundColor:'#eee'
    },

    profileInfo:{
        marginLeft:16
    },

    name:{
        fontFamily:'Archivo_400Regular',
        color:'#6a6180',
        fontSize:12,
        marginTop:4,
    },
    subject:{
        fontFamily:'Poppins_400Regular',
        color:'#6a6180',
        fontSize:12,
        marginTop:4
    },
    bio:{
        marginHorizontal:24,
        fontFamily:'Poppins_400Regular',
        fontSize:14,
        lineHeight:24,
        color:'#6a6180'
    },
    footer:{
        backgroundColor:'#fafafc',
        padding:24,
        alignItems:'center',
        marginTop:24
    },

    price:{
        color:'#6a6180',
        fontFamily:'Poppins_400Regular',
        fontSize:14,
    },
    priceValue:{
        color:'#8257e5',
        fontFamily:'Archivo_700Bold',
        fontSize:16,
    },
    buttonsContainer:{
        flexDirection:'row',
        marginTop:16
    },
    favoriteButton:{
        backgroundColor:'#8257e5',
        width:56,
        height:56,
        borderRadius:8,
        justifyContent:'center',
        alignItems: "center",
        maxHeight:8,
    },
    favoritedButton:{
        backgroundColor:'#e33d3d',
        width:56,
        height:56,
        borderRadius:8,
        justifyContent:'center',
        alignItems: "center",
        maxHeight:8,
    },
    contactButton:{
        backgroundColor:'#04d361',
        flex:1,
        flexDirection:"row",
        width:56,
        height:56,
        borderRadius:8,
        justifyContent:'center',
        alignItems: "center",
        marginRight:8
    },
    contactButtonText:{
        color:'#fff',
        fontFamily:'Archivo_700Bold',
        fontSize:16,
        marginLeft:16
    },
});

export default styles;