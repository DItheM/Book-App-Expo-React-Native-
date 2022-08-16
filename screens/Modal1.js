import { View, Text, FlatList, TouchableOpacity, ScrollView, Modal, StyleSheet, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, {useState, useEffect} from 'react';
import { Data } from './ModalData';

const Item = ({item, onPress, visible, onPressClose}) => {

    return (
      <View>
        <TouchableOpacity style={styles.item} onPress={onPress}>
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
  
        <Modal visible={visible} animationType="slide" transparent={true}>
        <ScrollView>
                      <LinearGradient
                      colors={['#b43a97', '#ffa4a4', '#45b1fc']}
                      start={{x: 0, y: 0.5}}
                      end={{x: 1, y: 1}}
                      style={bookModal.modal}>
                          <View style={bookModal.container}>
                            <Text style={bookModal.title}>{item.title}</Text>
                            <Image style={bookModal.image} source={item.cover}/>
                            <Text style={bookModal.Title}>Author</Text>
                            <View style={bookModal.background}>
                                <Text style={bookModal.author}>{item.author}</Text>
                            </View>
                            <Text style={bookModal.Title}>Description</Text>
                            <View style={bookModal.background}>
                                <Text style={bookModal.description}>{item.description}</Text>
                            </View>
                            <Text style={bookModal.Title}>Price</Text>
                            <View style={[bookModal.background, {marginBottom: 20}]}>
                                <Text style={bookModal.price}>{item.price}.LKR</Text>
                            </View>
                          </View>
                            <Button title='close' onPress={onPressClose}/>
                      </LinearGradient>
                      </ScrollView>
              </Modal>
      </View>
    );
  };
  
  export default function Modal1() {
    const [pressedId, setPressedId] = React.useState(null);
    
    const renderItem = ({item}) => {
      let isPressed = item.id === pressedId ? true : false;
      return (
        <Item item={item} onPress={() => {setPressedId(item.id);}} visible={isPressed} onPressClose={() => setPressedId(null)}/>
        );
      };
  
    return (
      <FlatList
      data={Data.Modal1}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={[pressedId]}
      />
    )
  };
  
  const styles = StyleSheet.create({
    item: {
      backgroundColor: '#ffffffa8',
      padding: 15,
      marginBottom: 15,
      marginHorizontal: 5,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff'
    },
    title: {
      fontSize: 20,
      //color: '#fff'
    }
  });
  
  const bookModal = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    modal: {
        flex: 1,
        margin: 10,
        borderRadius: 10
    },
    image: {
        marginVertical: 10,
         width: 200,
         height: 200,
        resizeMode: 'stretch',
        alignSelf: 'center'
    },
    title: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        marginVertical: 10
    },
    background: {
        backgroundColor: '#ffffff8f',
        marginVertical: 5,
        padding: 10,
        borderRadius: 10
    },
    Title: {
        color: '#fff',
        marginTop: 10
    }
  });
  
  export {styles, bookModal};