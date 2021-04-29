import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { AppLoading } from 'expo';
import {useNavigation} from '@react-navigation/native';
import { useFonts,  Archivo_400Regular, Archivo_700Bold
} from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

import styles from './styles';

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'
import { RectButton } from 'react-native-gesture-handler';
import api from '../../Services/api';

function Favorites() {

    const [totalConnections , setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('conexoes').then((response)=>{
            const {total} =response.data;
            setTotalConnections(total);
        })
    } )

    const navigation = useNavigation();

    function navigateToGiveClasses(){
        navigation.navigate('GiveClasses');
    }
    function navigateToStudy(){
        navigation.navigate('Study');
    }


    let [fontsLoaded] = useFonts({
        Archivo_400Regular, Archivo_700Bold, Poppins_400Regular, Poppins_600SemiBold
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
            <Text style={styles.tittle}>Seja bem vindo{'\n'}
                <Text style={styles.tittleBold}>o que deseja fazer?</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.button, styles.buttonPrimary]} onPress={navigateToStudy} >
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>Estudar</Text>  
                </RectButton>
             
                <RectButton style={[styles.button, styles.buttonSecondary]} onPress={navigateToGiveClasses}>
                <Image source={giveClassesIcon}/>
                    <Text style={styles.buttonText}>Dar aulas</Text> 
                </RectButton>
            </View>
                <Text style={styles.footerConnections}>Total de {totalConnections} conexões já realizadas {' '}
                <Image source={heartIcon}></Image>
            </Text>
        </View>
    }
};

export default Favorites;