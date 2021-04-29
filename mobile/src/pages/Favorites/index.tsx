import React from 'react';
import { View, Image, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';


import styles from './styles';

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

function Landing() {

    const navigation = useNavigation();

    function navigateToGiveClasses(){
        navigation.navigate('GiveClasses');
    }


    
        return <View style={styles.container}>
            <PageHeader tittle='Meus Proffs Favoritos'></PageHeader>
            <ScrollView 
                style={styles.teacherList} 
                contentContainerStyle={{
                    paddingHorizontal:16,
                    paddingBottom:16
            }}>
                <TeacherItem/>
            </ScrollView>
        </View>
};

export default Landing;