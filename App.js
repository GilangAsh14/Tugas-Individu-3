//Nama : GILANG ASHARI ABIMANYU
// Nim : 119140040
// Kelas : RA

import { Text,
   View, 
   TouchableOpacity,
   Image,
   ScrollView,
   TextInput,
   Alert } from 'react-native'
import React, { Component } from 'react'
import styles from './Style'

const data = require('./Data.json')
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {alldata: data,searchfilter: data,asalBandara: '',tujuanBandara: '',tanggal: '',Pencarian: false,daftar: true,}
  }
  getImage = (image) => {
    switch (image) {
      case "lion":
        return require("./assets/pesawat1.png")
        break;
    }
  }
  back(asal, tujuan, tanggal) {
    if (asal == '' && tujuan == '' && tanggal == '') {
      this.setState({
        Pencarian: false
      })
      this.setState({
        daftar: true
      })
    }
  }
  search(asal, tujuan, tanggal) {
    if(asal == tujuan && asal != '' && tujuan != ''){
      Alert.alert("Silahkan isi dengan benar.")
      this.setState({
        Pencarian: false
      })
      this.setState({
        daftar: true
      })
    } else if(asal == '' && tujuan == '' && tanggal == ''){
      Alert.alert("Silahkan di isi terlebih dahulu.")
    }
    else {
      this.setState({
        daftar: false
      })
      this.setState({
        Pencarian: true
      })
      this.setState({
        searchfilter: this.state.alldata.filter(i =>
          i.bandara_kode_keberangkatan.toUpperCase().includes(asal.toUpperCase()) && i.bandara_kode_tujuan.toUpperCase().includes(tujuan.toUpperCase()) && i.jadwal_id.toUpperCase().includes(tanggal.toUpperCase()),
        ),
      })
    }
  }
  render() {
    const { asalBandara, tujuanBandara, tanggal, Pencarian, daftar, } = this.state;
    return (
      <ScrollView style={{ flex: 1 }}>
        {daftar && (
          <>
            <View style={styles.container}>
              <TouchableOpacity>
                <Image source={require('./assets/menu.png')}
                  style={styles.menu}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('./assets/pengguna.png')}
                  style={styles.user}
                />
              </TouchableOpacity>
              <Text style={styles.judulA}>Hiling.id</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.teksA}>Lokasi Keberangkatan</Text>
              <View>
                <Image source={require('./assets/pesawat.png')}
                  style={styles.gambar}
                />
                <TextInput
                  value={asalBandara}
                  onChangeText={(asalBandara) => this.setState({ asalBandara })}
                  style={styles.box}
                  placeholder='Masukkan Lokasi Keberangkatan'>
                </TextInput>
              </View>
              <Text style={styles.teksA}>Lokasi Tujuan</Text>
              <View>
                <Image source={require('./assets/pesawat_turun.png')}
                  style={styles.gambar}
                />
                <TextInput
                  value={tujuanBandara}
                  onChangeText={(tujuanBandara) => this.setState({ tujuanBandara })}
                  style={styles.box}
                  placeholder='Masukkan Lokasi Tujuan'>
                </TextInput>
              </View>
              <Text style={styles.teksA}>Tanggal Keberangkatan</Text>
              <View>
                <Image source={require('./assets/calendar.png')}
                  style={styles.gambar}
                />
                <TextInput
                  value={tanggal}
                  onChangeText={(tanggal) => this.setState({ tanggal })}
                  style={styles.box}
                  placeholder='Masukkan Tanggal Keberangkatan'>
                </TextInput>
              </View>
              <TouchableOpacity
                onPress={() => this.search(asalBandara, tujuanBandara, tanggal)}
                style={styles.button}>
                <Text style={styles.teks}>Cari</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <Text>Copyright by Gilang Ashari Abimanyu - 119140040</Text>
            </View>
          </>
        )}
        {Pencarian && (
          <View style={styles.container2}>
            <TouchableOpacity onPress={() => this.back('', '', '')}
              style={styles.pembungkus}
            >
              <Image source={require('./assets/logo_panah.png')}
                style={styles.panah}
              />
            </TouchableOpacity>
            <Image source={require('./assets/pengguna.png')}
              style={styles.user}
            />
            <View style={styles.head}>
              <Text style={styles.judul}>Hiling.id</Text>
              <Text style={styles.teks}>Hasil Pencarian Jadwal Untuk Penerbangan Anda : {tanggal}</Text>
            </View>
          </View>
        )}
        {Pencarian && this.state.searchfilter.map((item, index) => (
          <View key={index} style={styles.daftar}>
            <Text style={styles.asalBandara}>{item.bandara_kode_keberangkatan} ({item.bandara_kode})</Text>
            <Text style={styles.garis}> - </Text>
            <Text style={styles.tujuanBandara}>{item.bandara_kode_tujuan}</Text>
            <View style={styles.pemisah}>
              <Image source={this.getImage(item.maskapai_logo)}
                style={styles.logo_maskapai}
              />
              <Text style={styles.maskapai}>{item.maskapai_nama} </Text>
              <Text style={styles.tanggal}>{item.jadwal_id}</Text>
            </View>
          </View>
        ))}
        {Pencarian && (
          <Text style={styles.footer}>Copyright by Gilang Ashari Abimanyu - 119140040</Text>
        )}
      </ScrollView>
    )
  }
}
