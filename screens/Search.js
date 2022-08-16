import { View, Text, FlatList, TouchableOpacity, ScrollView, Modal, Image, Button, TextInput } from 'react-native';import { LinearGradient } from 'expo-linear-gradient';
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
                      colors={['#3ab492', '#a4ebff', '#4564fc']}
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

export default function Search() {
    const [pressedId, setPressedId] = React.useState(null);
    const [pressedMasterId, setPressedMasterId] = React.useState(null);
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('');
    const [fullData, setFullData] = useState([]);
    const [data, setData] = useState([]);

    function RenderHeader() {
        // const handleSearch = (queryText) => {
        //     const convertQuery =  queryText.trim().toLowerCase();
        //     setQuery(convertQuery);

        //     const convertData = fullData.title.trim().toLowerCase();
        
        //     if (convertData.includes(query)) {
        //         setData(fullData);
        //     }
        // };
        return (
          <View>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              value={search}
              onChangeText={setSearch}
              placeholder="Search"
              style={{ backgroundColor: '#fff', height: 40,
                          margin: 12,
                          borderWidth: 1,
                          borderRadius: 20,
                          paddingHorizontal: 20,
                          paddingVertical: 5,
                          backgroundColor: '#deffff', }}
            />
          </View>
        );
    };
    
useEffect(() => {
    const master= [Data.Modal1, Data.Modal2, Data.Modal3, Data.Modal4];
    const returnMaster = (child) => {
      return(
      {key: child[0].title, id: child[0].id, title: child[0].title, author: child[0].author, description: child[0].description, cover: child[0].cover, price: child[0].price}
      );
    };
      
    setData(master.map(returnMaster));
    setFullData(master.map(returnMaster));
}, []);


    
    const renderItem = ({item}) => {
      //let isMasterPressed = item.id === pressedMasterId ? true : false;
      let isPressed = item.id === pressedId ? true : false;

      // const checkPressed = () => {
      //   if (isMasterPressed && isPressed) {
      //     return true;
      //   } else {
      //     return false;
      //   };
      // };

      return (
        <Item item={item} onPress={() => {setPressedId(item.id);}} visible={isPressed} onPressClose={() => {setPressedId(null);}}/>
        );
      };


  
    return (
      <FlatList
      ListHeaderComponent={RenderHeader}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={[pressedId,query,search,fullData]}
      />
    )
  };