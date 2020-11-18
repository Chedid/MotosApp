import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#333"
    },
    postContainer: {
        marginHorizontal: 20,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 3,
        margin: 10
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    postDescription: {
        color: '#666',
        textAlign: 'justify'
    }
})

