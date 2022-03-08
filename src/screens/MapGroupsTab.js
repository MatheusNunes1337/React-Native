import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View, Alert, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import {GroupContext} from '../context/GroupProvider';

const MapGroupsTab = () => {
  const [mapType, setMatType] = useState('standard');
  const [markers, setMarkers] = useState([]);
  const {groups} = useContext(GroupContext);

  useEffect(() => {
    let m = [];
    groups.map(g => {
      m.push({
        key: g.uid,
        coords: {
          latitude: Number(g.latitude),
          longitude: Number(g.longitude),
        },
        title: g.name,
        description: g.description,
        image: require('../assets/images/person_map_accent.png'),
      });
    });
    setMarkers(m);
  }, [groups]);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        ref={map => (this.map = map)}
        style={styles.map}
        mapType={mapType}
        showsUserLocation={true}
        followsUserLocation={true}
        onPress={e => {
          Alert.alert(
            'Coordenadas',
            'latitude= ' +
              e.nativeEvent.coordinate.latitude +
              ' longitude= ' +
              e.nativeEvent.coordinate.longitude,
          );
        }}
        initialRegion={{
          latitude: -31.766108372781073,
          longitude: -52.35215652734042,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {markers.map(marker => {
          return (
            <Marker
              key={marker.key}
              coordinate={marker.coords}
              title={marker.title}
              description={marker.description}
              draggable
              image={marker.image}
            />
          );
        })}
      </MapView>
    </View>
  );
};

export default MapGroupsTab;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
