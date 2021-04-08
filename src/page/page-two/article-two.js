import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';

const ArticleTwo = () => {
    return (
      <Container style={styles.container}>
        <View  style={styles.body}>   
          <View style={styles.header}>
            <Card>
                <CardItem style={{backgroundColor:'#e85f5f'}}>
                  <Body>
                    <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>Günlük seyahat başına düşen ortalama alınan ücretlere göre; en az ücret alınan iki
                                tarih arasındaki günlük alınan ortalama ücretler</Text>
                  </Body>
                </CardItem>
            </Card>             
          </View>
          <ScrollView>
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
              <Text>TO DO</Text>
            </View>
          </ScrollView>
        </View>
        <StatusBar style="light" />
      </Container>
    );
};
export default ArticleTwo;

const styles = new StyleSheet.create({
  container:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      backgroundColor:'#deded5'
  },
  body:{ 
      flex:1,
      padding:10, 
      paddingBottom:30,
  },
  header:{
      marginBottom:10,
  },
});