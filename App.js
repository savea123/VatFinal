import React, { useState } from 'react';
import {StatusBar, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
export default function App() {
 const [count, setCount] = useState(null);
 const [inp, setInp] = useState();
 const [Msg, setMsg] = useState('');
 let onChangeText = (e) => {
 setInp(e);
 };
 let onAdd = () => {
 if (count >= 0||count==undefined||count==null||count==="") {
 setCount(null);
 setMsg(' ');
 }
 let val = (Math.max(inp * 1.07)).toFixed(1);
 setCount(val);
 setMsg('จำนวนเงินพร้อม VAT 7%');
 }
 let onSub = () => {
 if (count >= 0||count==undefined||count==null||count==="") {
 setCount(null);
 setMsg('');
 }
 let val = (Math.max(inp * 1.07 / 1.03)).toFixed(1);
 setCount(val);
 setMsg('จำนวนเงินหลังหักภาษี ณ ที่จ่าย');
 }
 return (
 <View style={styles.container}>
 <StatusBar
 backgroundColor="#FFFFFF"
 />
 <View style={styles.header}><Text style={styles.textHeader}>การคำนวณภาษีมูลค่าเพิ่ม 7%</Text></View>
 <View style={styles.containeItems}>
 <Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 15, }}>จำนวนเงิน</Text>
 <TextInput
 style={styles.inpt1}
 onChangeText={text => onChangeText(text)}
 placeholder="จำนวนเงิน"
 maxLength={20}
 keyboardType='numeric'
 value={null}
 />
 <TextInput
 style={styles.inpt2}
 onChangeText={text => onChangeText(text)}
 placeholder="ผลลัพธ์"
 keyboardType='numeric'
 value={count}
 />
<Text style={{ fontSize: 18, fontWeight: 'bold', paddingTop: 15,color:'#00CC00' }}>{Msg}</Text>
 <View style={styles.containerBtn}>
 
 <Button
 color="red"
 title="รวมภาษี"
 onPress={() => onAdd()}
 />
 <Button
 color="green"
 title="หลังหักภาษี ณ ที่จ่าย"
 onPress={() => onSub()}
 />
 </View>
 </View>
 </View>
 );
}
const styles = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: '#FFFFFF',
 alignItems: 'center',
 justifyContent: 'center',
 },
 header: {
 marginBottom: 80,
 marginTop: 0,
 padding: 10,
 paddingHorizontal: 45,
 borderWidth: 1,
 marginBottom: 10,
 backgroundColor: 'black',
 borderRadius: 5,
 },
 textHeader: {
 color: '#FFFFFF',
 },
 containeItems: {
 width: 350,
 height: 350,
 borderRadius: 20,
 borderColor: 'silver',
 borderWidth: 5,
 alignItems: 'center',
 justifyContent: 'center',
 },
 inpt1: {
 height: 40,
 borderColor: 'gray',
 borderWidth: 1,
 width: 270,
 paddingLeft: 10
 },
 inpt2: {
 height: 40,
 borderColor: 'gray',
 marginTop: 20,
 width: 270,
 fontSize: 26,
 marginTop: 40,
 paddingLeft: 90,
 color: 'red',
 },
 containerBtn: {
 flexDirection: "row",
 marginBottom: 0,
 marginTop: 80,
 },
});