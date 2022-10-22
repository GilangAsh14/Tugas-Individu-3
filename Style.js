//Nama : GILANG ASHARI ABIMANYU
// Nim : 119140040
// Kelas : RA


import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#86b257',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingBottom: 350
    },
    menu: {
        width:30,
        height: 30,
        position: 'absolute',
        marginTop: 55,
        marginLeft: 30,
        resizeMode: 'contain',
        tintColor: 'Black',
    },
    user: {
        width: 30,
        height: 30,
        position: 'absolute',
        marginTop: 55,
        paddingRight: 70,
        resizeMode: 'contain',
        tintColor: 'Black',
        alignSelf: 'flex-end'
    },
    judul: {
        textAlign: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 40,
    },
    head: {
        position: 'absolute',
        alignSelf: 'center',
        paddingTop: 50
    },
    judulA: {
        textAlign: 'center',
        alignItems: 'center',
        color: 'white',
        marginTop: 60,
        fontSize: 30
    },
    content: {
        backgroundColor: 'white',
        margin: 40,
        marginTop: -250,
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,

    },
    box: {
        margin: 8,
        marginBottom: 17,
        borderWidth: 1,
        padding: 10,

        borderRadius: 10,
        paddingLeft: 40,
        fontSize: 14
    },
    gambar: {
        width: 30,
        height: 30,
        position: 'absolute',
        paddingTop: 50,
        marginLeft: 10,
        resizeMode: 'contain',
        tintColor: 'black',
    },
    button: {
        backgroundColor: 'orange',
        borderRadius: 20,
        padding: 10,
        marginBottom: 30,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    teks: {
        color: 'black',

        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'bold'
    },
    daftar: {
        marginBottom: 10,
        marginTop: 5,
        marginLeft: 25,
        marginRight: 25,
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        borderColor: 'white',
        shadowColor: "green",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 2,
    },
    teksA: {

        fontSize: 20,

    },
    footer: {
        textAlign: 'center',
        color: 'gray',
        alignItems: 'center',
        paddingTop: 100
    },
    asalBandara: {

        alignSelf: 'flex-start',

        color: '#565756',
        fontSize: 16,
        fontWeight: 'bold'
    },
    tujuanBandara: {
        position: 'absolute',
        alignSelf: 'flex-end',

        color: '#565756',
        fontSize: 15,
        paddingRight: 20,
        paddingTop: 20,
        fontSize: 16,
        fontWeight: 'bold'
    },
    maskapai: {
        alignSelf: 'flex-start',
        marginLeft: 70,
        position: 'absolute',
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold'
    },
    tanggal: {
        position: 'absolute',
        alignSelf: 'flex-end',
        color: '#3d619f',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15
    },
    garis: {
        position: 'absolute',
        alignSelf: 'center',
        paddingTop: 20,
        fontSize: 18,
        fontWeight: 'bold'
    },
    pemisah: {
        marginTop: 15
    },
    container2: {
        flex: 1,
        backgroundColor: '#86b257',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        paddingBottom: 20,
        marginBottom: 10,
        height: 150
    },
    panah: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        tintColor: 'white',
        alignSelf: 'center',
        position: 'absolute',

    },
    pembungkus: {
        height: 50,
        width: 60,
        borderRadius: 20,
        marginLeft: 30,
        marginTop: 50,
    },
    logo_maskapai: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    }

})

export default styles
