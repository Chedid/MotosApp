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
          fontSize: 42,
          fontWeight: "bold",
          margin: "10%",
          textAlign: "center",
          backgroundColor: "#000000a0"
        },
        title: {
          color: "white",
          textAlign: 'center',
          margin: "10%",
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
})