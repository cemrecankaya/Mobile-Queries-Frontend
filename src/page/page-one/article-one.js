import React,{useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Card, CardItem, Text, Body,Textarea,Accordion } from 'native-base';
import { GetArticleOne, GetArticleTwo } from "../../services/type-one-service";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { articleOne } from '../../services/db-services'

export default class ArticleOne extends React.Component{
  constructor(props){
    super(props)
    this.state={
      articleOne:null
    }
    this.setArticleOne()
  }

  setArticleOne = async () =>{
    const result = await articleOne()
    if(result){
      this.setState({articleOne : result})
    }
  }
  
  render(){
    return (
        <Container style={styles.container}>
          <View  style={styles.body}>   
            <View style={styles.header}>
              <Card>
                  <CardItem style={{backgroundColor:'#e85f5f'}}>
                    <Body>
                      <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>En fazla yolcu taşınan 5 gün ve toplam yolcu sayıları</Text>
                    </Body>
                  </CardItem>
              </Card>             
            </View>
            <ScrollView style={styles.scrollView}>
              <View style={{flex:1}}>
              { 
                this.state.articleOne != null &&
                this.state.articleOne.map((data,key)=>{
                  return (
                    <Card key={key}>
                      <CardItem header>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>{key + 1}. Kayıt</Text>
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Grid>
                              <Row><Text style={{marginBottom:5, fontSize:16, fontWeight:'bold'}}>Yolcuların indirildiği tarih</Text></Row>
                              <Row><Text style={{marginBottom:5, fontSize:16}}>{data.DODatetime}</Text></Row>
                              <Row><Text style={{marginBottom:5, fontSize:16, fontWeight:'bold'}}>Toplam yolcu sayısı </Text></Row>
                              <Row><Text style={{marginBottom:5, fontSize:16}}>{data.passenger_count}</Text></Row>
                          </Grid>
                        </Body>
                      </CardItem>
                    </Card>
                    )
                })            
              }
              </View>
            </ScrollView>
          </View>
          <StatusBar style="light" />
        </Container>
      );
  }
}



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
  scrollView:{ 
    flex:1,
},
});