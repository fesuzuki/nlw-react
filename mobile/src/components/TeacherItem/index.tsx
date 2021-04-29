import React from 'react';
import { View, Image, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';


import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import PageHeader from '../PageHeader';

export interface Teacher{
    id:number
    nome : string, 
    descricao : string,
    urlFoto:string,
    bio:string,
    preco:number,
    whatsapp:string
}

interface TeacherItemProps{
    teacher:Teacher;
}

const TeacherItem:React.FC <TeacherItemProps> =  ({teacher}) => {
    const navigation = useNavigation();

    function navigateToGiveClasses(){
        navigation.navigate('GiveClasses');
    }
        return (
        <View style={styles.container}>
            <View style={styles.profileInfo}>
                <Image 
                    style={styles.avatar} 
                    source={{ uri: teacher.urlFoto }} 
                />
                <Text style={styles.name}>{teacher.nome}</Text>
                <Text style={styles.subject}>{teacher.descricao}</Text>
            </View>
             <Text style={styles.bio}>{teacher.bio}</Text>
            <View style={styles.footer}>
                <Text style={styles.price}>Preço/hora {'  '}
                    <Text style={styles.priceValue}> R${' '}{teacher.preco}</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton,styles.favoritedButton]}>
                        <Image  source={heartOutlineIcon}></Image>
                        <Image  source={unfavoriteIcon}></Image>
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image  source={whatsappIcon}></Image>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                    <RectButton style={styles.favoriteButton}>
                        <Image  source={unfavoriteIcon}></Image>
                    </RectButton>
                </View>
            </View>
        </View>
        );
    }
export default TeacherItem;