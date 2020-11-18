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
        minWidth: 150,
        height: 256,
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
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        fontWeight: "bold",
        margin: 5,
        color: "black",
    },
    textopreco: {
        
        fontSize: 14,
        fontWeight: "bold",
        color: "#FFD700",
        marginVertical: 5,
        textAlign: "right",
        marginHorizontal: 10,

    },
    imagemitem: {
        width: 140,
        height: 100,
        margin: 10,
        borderColor: '#BEBEBE',
        borderWidth: 1,
        borderRadius: 5,
    },
    botaoanuncio: {
        backgroundColor: '#1E90FF',
        width: 150,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
    }

})






