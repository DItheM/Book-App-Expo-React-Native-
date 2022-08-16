import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, BackHandler, Alert, Modal, Button, FlatList, ScrollView} from 'react-native';
import  Constants  from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import { Details } from "./Register";
import { LinearGradient } from 'expo-linear-gradient';
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import Modal4 from "./Modal4";
import Search from "./Search";


function Dashboard() {
    const DisplayUser = () => {
        for (let x of Details) {
            if(x.loged == true) {
                return x.username;
            }
        }
    };
    const LogOut = () => {
        for (let x of Details) {
            if(x.loged == true) {
                Alert.alert(
                    "Logout",
                    "Are you sure?",
                    [
                      {
                        text: "No",
                        style: "cancel",
                        onPress: () => false
                      },
                      { text: "Yes", onPress: () => {navigation.navigate('Login'), x.loged = false} }
                    ]
                  );
            }
        }
    };
    const navigation = useNavigation();
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => backHandler.remove()
      }, []);
    //const [search, onChangeSearch] = React.useState('');
    const [isModalOpen1, setModalOpen1] = React.useState(false);
    const [isModalOpen2, setModalOpen2] = React.useState(false);
    const [isModalOpen3, setModalOpen3] = React.useState(false);
    const [isModalOpen4, setModalOpen4] = React.useState(false);
    const [isSearchModalOpen, setSearchModalOpen] = React.useState(false);


    return (
        
        <View style={styles.container}>
    
            <Modal visible={isModalOpen1} animationType="slide" transparent={true}>
                    <LinearGradient
                    colors={['#b43a97', '#ffa4a4', '#45b1fc']}
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 1}}
                    style={modals.modal}>
                        <Text style={modals.header}>Action and Adventure</Text>

                        <Modal1/>

                        <Button title='close' onPress={() => {setModalOpen1(false);}}/>
                    </LinearGradient>
            </Modal>

            <Modal visible={isModalOpen2} animationType="slide" transparent={true}>
            <LinearGradient
        colors={['#3ab492', '#a4ebff', '#4564fc']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={modals.modal}>
          <Text style={modals.header}>Detective and Mystery</Text>

                    <Modal2/>

                <Button title='close' onPress={() => {setModalOpen2(false);}}/>
      </LinearGradient>
            </Modal>

            <Modal visible={isModalOpen3} animationType="slide" transparent={true}>
            <LinearGradient
        colors={['#833ab4', '#a4a9ff', '#fcb045']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={modals.modal}>
          <Text style={modals.header}>Fantasy</Text>

                    <Modal3/>

                <Button title='close' onPress={() => {setModalOpen3(false);}}/>
      </LinearGradient>
            </Modal>

            <Modal visible={isModalOpen4} animationType="slide" transparent={true}>
            <LinearGradient
        colors={['#3ab4b1', '#fca4ff', '#45fc9b']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={modals.modal}>
          <Text style={modals.header}>Horror</Text>

                    <Modal4/>

                <Button title='close' onPress={() => {setModalOpen4(false);}}/>
      </LinearGradient>
            </Modal>
       
           
            
            <ImageBackground style={styles.background} source={require('../assets/dashboard.png')}>
                <TouchableOpacity style={styles.logoutBtn} onPress={LogOut}>
                    <Text style={{fontSize: 15}}>Logout</Text>
                </TouchableOpacity>

                <Text style={styles.library}>LIBRARY</Text>

                {/* Search */}
                <TouchableOpacity style={styles.searchBtn} onPress={() => setSearchModalOpen(true)}>
                    <Text style={{fontSize: 15}}>{"Hello " + DisplayUser() + ", What are you looking for?"}</Text>
                </TouchableOpacity>

                    
                <Modal visible={isSearchModalOpen} animationType={"slide"} transparent={true}>
                    <LinearGradient
                    colors={['#b43a97', '#ffa4a4', '#45b1fc']}
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 1}}
                    style={modals.modal}>
                        
                        
                            
                {/* <TextInput
                style={styles.search}
                placeholder={"Hello " + DisplayUser() + ", What are you looking for?"}
                placeholderTextColor={'#464646'}
                value={search}
                onChangeText={onChangeSearch}
                /> */}
                
                
                    <Search />

                    <Button title='Close' onPress={() => {setSearchModalOpen(false);}}/>
                    
                    </LinearGradient>
                </Modal>
                    

                <Text style={styles.library}>BOOK CATEGORIES</Text>

        <TouchableOpacity onPress={() => {setModalOpen1(true);}}>
                <LinearGradient
        colors={['#b43a97', '#ffa4a4', '#45b1fc']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.button}>
          <Text style={{color: 'white'}}>Action and Adventure</Text>
      </LinearGradient>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => {setModalOpen2(true);}}>
                <LinearGradient
        colors={['#3ab492', '#a4ebff', '#4564fc']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.button}>
          <Text style={{color: 'white'}}>Detective and Mystery</Text>
      </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {setModalOpen3(true);}}>
                <LinearGradient
        colors={['#833ab4', '#a4a9ff', '#fcb045']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.button}>
          <Text style={{color: 'white'}}>Fantasy</Text>
      </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {setModalOpen4(true);}}> 
                <LinearGradient
        colors={['#3ab4b1', '#fca4ff', '#45fc9b']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.button}>
          <Text style={{color: 'white'}}>Horror</Text>
      </LinearGradient>
      </TouchableOpacity>
            </ImageBackground>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    library: {
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 10 ,
        color: '#ffffff'
    },
    logoutBtn: {
        backgroundColor: '#ff4646',
        padding: 15,
        alignItems: 'center',
        margin: 12,
        borderRadius: 5
    },
    search: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: '#deffff',
    },
    searchBtn: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: '#deffff',
        justifyContent: 'center',
        color: '#464646'
    },
    background: {
        flex: 1
    },
    button: {
        backgroundColor: '#ff4646',
        padding: 15,
        alignItems: 'center',
        margin: 12,
        borderRadius: 5
    },
});

const modals = StyleSheet.create({
    modal: {
        flex: 1,
        margin: 10,
        //borderWidth: 1,
        //borderColor: '#fff',
        borderRadius: 10
    },
    header: {
        color: 'white',
        textAlign: 'center',
        paddingTop: 20,
        fontSize:30,
        paddingBottom: 20
    },
})

export default Dashboard;