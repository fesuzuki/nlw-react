import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import imgBack from '../../assets/images/give-classes-background.png' 

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {
    const navigation = useNavigation();

    function navigateToLanding(){
        navigation.goBack();
    }

return(<View style={styles.container}>
    <ImageBackground resizeMode='contain' source={imgBack} style={styles.content}>
     <Text style={styles.tittle}>Quer ser um Proffy?</Text>
     <Text style={styles.description}>Para começar, você precisa se cadastrar na plataforma web Demônio</Text>
    </ImageBackground>
    <RectButton style={styles.okButton} onPress={navigateToLanding}>
      <Text style={styles.okButtonText}>Tudo bem</Text>
    </RectButton>
</View>);
}

export default GiveClasses;