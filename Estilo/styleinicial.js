import { StyleSheet } from 'react-native';

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
    backgroundColor: "#000000a0",

  },
  title: {
    color: "#000000",
    textAlign: 'center',
    margin: "10%",
    marginVertical: 8,
  },
  titleNovidades: {
    fontSize: 16,
    color: "#20B2AA",
    margin: "4%",
    textAlign: "justify"
    
  },
  titleserv: {
    color: "#000000",
    textAlign: 'left',
    marginTop: 10,
    margin: 9,
    marginVertical: 1,
    fontSize: 19,
  },
  textserv: {
    color: "#000000",
    textAlign: 'left',
    marginTop: 10,
    margin: 10,
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
  caixas: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'white',
    margin: "5%",
  },
  logo: {
    width: 66,
    height: 58,
  },
  imagemitem: {
    width: 300,
    height: 200,
    marginVertical: 10,
    resizeMode: 'contain',
  },
  imagemitem2: {
    width: 100,
    height: 50,
    marginVertical: 10,
    marginHorizontal: 20,
    resizeMode: 'contain',
  },
  botaoanuncio: {
    backgroundColor: '#FF4500',
    width: 130,
    height: 31,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  botaoanuncio2: {
    backgroundColor: '#FF4500',
    width: 110,
    height: 31,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  subCaixa: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})