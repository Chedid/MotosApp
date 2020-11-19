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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
    margin: "5%",
  },
  logo: {
    width: 66,
    height: 58,
  },
  imagemitem: {
    width: 300,
    height: 150,
    margin: "5%",
    resizeMode: 'contain',
  },
  botaoanuncio: {
    backgroundColor: '#FF4500',
    width: 120,
    height: 35,
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
    alignSelf: 'auto',
  }
})