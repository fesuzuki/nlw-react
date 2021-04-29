import React, { useState } from 'react';
import { View, Image, Text} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {useNavigation} from '@react-navigation/native';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';



import styles from './styles';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../Services/api';


function TeacherList() {
    
    const [teachers,setTeacher] = useState([]);
    
    const[subject, SetSubject] = useState('');
    const[week_day, SetWeekDay] = useState(0);
    const[time, SetTime] = useState('');

     const [isFilterVisible,setIsFilterVisible] = useState(false);
     const diasSemana = [
        { section: true, label: 'Dias da Semana' },
        { key: 0, label: 'Domingo' },
        { key: 1, label: 'Segunda-feira' },
        { key: 2, label: 'Terça-feira' },
        { key: 3, label: 'Quarta-feira' },
        { key: 4, label: 'Quinta-feira' },
        { key: 5, label: 'Sexta-feira' },
        { key: 6, label: 'Sábado' },
     ]
    async function searchTeachers(){

     const response = await api.get('/classes',{
        params:{
            week_day,
            subject, 
            time
        }});
        setTeacher(response.data);
        console.log(response.data);
    }

    const navigation = useNavigation();

    function toggleFiltersVisible(){
        setIsFilterVisible(!isFilterVisible);
    }

    function navigateToGiveClasses(){
        navigation.navigate('GiveClasses');
    }
        return (
        <View style={styles.container}>
            <PageHeader 
                tittle='Proffs disponíveis'
                headerRight={(
                    <BorderlessButton onPress={toggleFiltersVisible}>
                        <Feather name='filter' size={20} color='#fff'></Feather>
                    </BorderlessButton>
                )}>
               {isFilterVisible && ( 
                <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput 
                            style={styles.input} 
                            value={subject}
                            onChangeText={text=> SetSubject(text)}
                            placeholder='Qual Matéria'
                            placeholderTextColor='#c1bccc'/>
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da Semana</Text>
                                {/* <TextInput
                                    style={styles.input}
                                    placeholder='Qual dia?'
                                    value={week_day}
                                    onChangeText={text=> SetWeekDay(text)}
                                    placeholderTextColor='#c1bccc'/> */}
                                <Picker
                                    selectedValue={week_day}
                                    style={{ height: 50, width: 150 }}
                                    onValueChange={(itemValue) => SetWeekDay(itemValue as number)}>
                                    <Picker.Item label="Domingo" value="0" />
                                    <Picker.Item label="Segunda-feira" value="1" />
                                    <Picker.Item label="Terça-feira" value="2" />
                                    <Picker.Item label="Quarta-feira" value="3" />
                                    <Picker.Item label="Quinta-feira" value="4" />
                                    <Picker.Item label="Sexta-feira" value="5" />
                                    <Picker.Item label="Sábado" value="6" />
                                    
                                </Picker>
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput 
                                    style={styles.input} 
                                    value={time}
                                    onChangeText={text=> SetTime(text)}
                                    placeholder='Que horas?'
                                    placeholderTextColor='#c1bccc'/>
                            </View>
                        </View>
                        <RectButton style={styles.submitButton}>
                            <Text style={styles.submitButtonText} onPress={searchTeachers}>filtrar</Text>
                        </RectButton>
                    </View>
               )}
            </PageHeader>
            
            <ScrollView 
                style={styles.teacherList} 
                contentContainerStyle={{
                    paddingHorizontal:16,
                    paddingBottom:16
            }}>
         
            {teachers.map((item:Teacher) =>{ 
                return <TeacherItem key={item.id} teacher={item} />
            })}
                
            </ScrollView>
        </View>
        );
    }
export default TeacherList;