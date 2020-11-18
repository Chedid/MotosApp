import {StyleSheet} from 'react-native';

export default StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: "column"
        },
        image: {
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center"
        },
        text: {
          color: "white",
          fontSize: 35,
          fontWeight: "bold",
          margin: "0%",
          textAlign: "center",
          backgroundColor: "#000000a0"
        },
        title: {
          color: "white",
          textAlign: 'center',
          margin: "10%",
          marginVertical: 8,
        },
        textocaixa: {
          color: "#000000",
          fontSize: 16,
          textAlign: 'justify',
          margin: "5%",
          marginVertical: 8,
        },
        fixToText: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        separator: {
          marginVertical: 8,
          borderBottomColor: '#737373',
          borderBottomWidth: StyleSheet.hairlineWidth,
        },
        caixas:{
        flex: 1, 
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",  
        backgroundColor: '#CFCFCF',
        margin: "5%"
        },
        logo: {
          width: 66,
          height: 58,
        },
        imagemitem:{
          width: 300, 
          height: 150,
          margin: "5%" 
        }
})