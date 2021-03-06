import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        padding:40,
        backgroundColor:'#8257e5'
    },
    topBar:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    tittle:{
        fontFamily:'Archivo_700Bold',
        color:'#d4c2ff',
        fontSize:22,
        lineHeight:22,
        maxWidth:180,
        marginVertical:50
        
    },
    header:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "space-between"
    }
});
export default styles