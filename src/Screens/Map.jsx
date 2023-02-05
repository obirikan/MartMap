import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React,{useRef} from 'react'
import MapViewDirections from "react-native-maps-directions";
import MapView, { Marker, PROVIDER_GOOGLE, Polygon } from "react-native-maps";
import { Ionicons,FontAwesome5,MaterialCommunityIcons,Foundation,AntDesign } from '@expo/vector-icons';

const Map = () => {
    const mapRef = useRef();
    const data=[
      {
        latitude : 7.9527706 ,
        longitude : -1.0307118,
      },
      {
        latitude :9.556552,
        longitude :-0.8615559,
      }, 
      {
        latitude : 9.556552,
        longitude : -1.8615559,
      },
      {
        latitude : 19.7245621,
        longitude : 96.203391,
      },
      {
        latitude : 18.7545620,
        longitude : 96.403392,
      },

    ]

  return (
    
    <MapView
    ref={mapRef}
    style={{flex:1}}
    showsUserLocation={true}
    provider={PROVIDER_GOOGLE}
    showsPointsOfInterest={false}
    showsScale={false}
  >
    {data.map((dat)=>(

<Marker
draggable
style = {{ width:60, height:40 }}
coordinate = {{
latitude : dat.latitude,
longitude : dat.longitude,
}}
onDragEnd = { e => alert(JSON.stringify(e.nativeEvent.coordinate))}
title={"Linn IT Solution Co.,Ltd"}
description = {
"Ygn-Mdy highway, Pyinmana"
}
>
                  <FontAwesome5 name="store" size={34} color="blue" />
</Marker>
    ))}



  </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})