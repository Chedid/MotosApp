import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap' //

    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        borderRadius: 5,
      },
    box: {
        flex: 1,
        minWidth: 160,
        height: 255,
        width: 200,
        backgroundColor: 'white',
        borderColor: '#999',
        margin: 10,
        justifyContent: 'space-between',
        borderColor: '#BEBEBE',
        borderWidth: 1,
        borderRadius: 5,
        
    },
    textotitulo: {
        fontSize: 12,
        fontWeight: "bold",
        color: "black",
        textAlign: 'justify',
        marginHorizontal: 10,
        marginVertical: 4
    },
    textopreco: {
        
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        marginVertical: 5,
        textAlign: "left",
        marginHorizontal: 10,
        marginVertical: 1,
        fontSize: 16,
        margin: 1 

    },
    imagemitem: {
        width: 150,
        height: 120,
        margin: 5,
        alignContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        resizeMode: 'contain',
        
    },
    botaoanuncio: {
        backgroundColor: '#1E90FF',
        width: 150,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        marginVertical: 2
    }

})






