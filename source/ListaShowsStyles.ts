import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,

    },

    scrollViewList: {
        padding: 4,
    },

    item: {
        backgroundColor: '#383540',
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        marginBottom: 2,
        borderWidth: 1,
        borderColor: '#212029',
        height: 240,
        maxHeight:240,
        
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color:'white',
        flexWrap: 'nowrap'
    },
    imageColumn: {
        display: 'flex',
        flexDirection: 'column',
        padding: 3,
        width: "40%",
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        padding: 3,
        width: "60%",
        gap:10,
    },
    menuBar: {
        gap: 8,
        padding: 8,
    },
    container: {
        gap: 12,
        padding: 8,
        height:'100%',
    },
    input: {
        height: 56,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 16,
    },
    buttonPesquisar: {
        height: 56,
        margin: 12,
        padding: 10,
        backgroundColor: '#ffc700',
        borderRadius: 16,
        justifyContent:'center',
        
    },
    buttonPesquisarFont:{
        width:'100%',
        color:'black',
        textAlign:'center',
        fontWeight: 'bold',
        fontSize:16

    },

    imageSize: {
        width: 120,
        height: 200,
        padding: 16,
    },

    chip: {
        backgroundColor: '#1c1455',
        padding: 8,
        borderRadius: 8,
        color:'white',
    },

    searchContainer:{
        display: 'flex',
        flexDirection: 'column',
        height: '25%',
    },

    listContainer:{
        display: 'flex',
        flexDirection: 'column',
        height: '75%',
    },

    topTitle:{
        width:'100%',
        color:'white',
        textAlign:'center',
        fontWeight: 'bold',
        fontSize:12,
        paddingTop:16
    }
});