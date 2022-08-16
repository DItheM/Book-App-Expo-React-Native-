import { View, Text, FlatList, TouchableOpacity, ScrollView, Modal, Image, Button } from 'react-native';import { LinearGradient } from 'expo-linear-gradient';
import React, {useState, useEffect} from 'react';
import { Data } from './ModalData';
import { styles, bookModal } from './Modal1';

const Item = ({item, onPress, visible, onPressClose}) => {

    return (
      <View>
        <TouchableOpacity style={styles.item} onPress={onPress}>
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
  
        <Modal visible={visible} animationType="slide" transparent={true}>
        <ScrollView>
        <LinearGradient
                      colors={['#3ab4b1', '#fca4ff', '#45fc9b']}
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
  
  export default function Modal4() {
    const [pressedId, setPressedId] = React.useState(null);
    
    const renderItem = ({item}) => {
      let isPressed = item.id === pressedId ? true : false;
      return (
        <Item item={item} onPress={() => {setPressedId(item.id);}} visible={isPressed} onPressClose={() => setPressedId(null)}/>
        );
      };
  
    return (
      <FlatList
      data={Data.Modal4}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={[pressedId]}
      />
    )
  };