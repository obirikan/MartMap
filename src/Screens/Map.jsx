import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React,{useRef} from 'react'
import MapViewDirections from "react-native-maps-directions";
import MapView, { Marker, PROVIDER_GOOGLE, Polygon } from "react-native-maps";

const Map = () => {
    const mapRef = useRef();
    const svgMarker = {
        path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "blue",
        fillOpacity: 0.6,
        strokeWeight: 0,
        rotation: 0,
        scale: 2,
      };
  return (
    <MapView
    ref={mapRef}
    style={{flex:1}}
    showsUserLocation={true}
    provider={PROVIDER_GOOGLE}
    showsPointsOfInterest={false}
    showsScale={true}
  >
      <Marker
          draggable
       style = {{ width:60, height:40 }}
       coordinate = {{
        latitude : 19.7545620,
        longitude : 96.203392,
       }}
       onDragEnd = { e => alert(JSON.stringify(e.nativeEvent.coordinate))}
       title={"Linn IT Solution Co.,Ltd"}
       description = {
        "Ygn-Mdy highway, Pyinmana"
       }
      ></Marker>
  </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})