import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Animated,
    Image,
    Dimensions,
    TouchableOpacity,
    Alert,
} from "react-native";
import MapView from "react-native-maps";

const barImages = [
    //images of bars here
]
const {width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class MapScreen extends React.Component {
  _onPressButton(){
    Alert.alert('you tapped a bar!');
  }
    state = {
        markers: [
          {
            coordinate: {
              latitude: 41.880060,
              longitude: -87.626420,
            },
            title: "Miller's Pub",
            description: "Half off drinks!",
            image: barImages[0],
          },
          {
            coordinate: {
              latitude: 41.883281,
              longitude: -87.634061,
            },
            title: "Stocks & Blondes",
            description: "Free Drinks!",
            image: barImages[0],
          },
          {
            coordinate: {
              latitude: 41.881537,
              longitude: -87.624684,
            },
            title: "The Gage",
            description: "Free Drinks!",
            image: barImages[0],
          },
        ],
        region: {
          latitude: 41.880060,
          longitude: -87.626420,
          latitudeDelta: 0.04864195044303443,
          longitudeDelta: 0.040142817690068,
        },
      };

      componentWillMount() {
        this.index = 0;
        this.animation = new Animated.Value(0);
    }
     
    componentDidMount() {
        // We should detect when scrolling has stopped then animate
        // We should just debounce the event listener here
        this.animation.addListener(({ value }) => {
          let index = Math.floor(value / CARD_WIDTH + 0.2); // animate 30% away from landing on the next item
          if (index >= this.state.markers.length) {
            index = this.state.markers.length - 1;
          }
          if (index <= 0) {
            index = 0;
          }
    
          clearTimeout(this.regionTimeout);
          this.regionTimeout = setTimeout(() => {
            if (this.index !== index) {
              this.index = index;
              const { coordinate } = this.state.markers[index];
              this.map.animateToRegion(
                {
                  ...coordinate,
                  latitudeDelta: this.state.region.latitudeDelta,
                  longitudeDelta: this.state.region.longitudeDelta,
                },
                350
              );
            }
          }, 10);
        });
      }

    render() {
        const changeMapRegion = this.state.markers.map((marker, index) => {
            const inputRange = [
              (index - 1) * CARD_WIDTH,
              index * CARD_WIDTH,
              ((index + 1) * CARD_WIDTH),
            ];
            const scale = this.animation.interpolate({
              inputRange,
              outputRange: [1, 2.5, 1],
              extrapolate: "clamp",
            });
            const opacity = this.animation.interpolate({
              inputRange,
              outputRange: [0.35, 1, 0.35],
              extrapolate: "clamp",
            });
            return { scale, opacity };
          });
      
        return (
            <View style={styles.container}>
            <MapView
                ref={map => this.map = map}
                initialRegion={this.state.region}
                style={styles.container}
                >
                {this.state.markers.map((marker, index) => {
                    return (
                    <MapView.Marker key={index} coordinate={marker.coordinate}>

                        <View style={styles.marker} />
                    </MapView.Marker>
                    );
                })}
            </MapView>
            <Animated.ScrollView
                horizontal
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                snapToInterval={CARD_WIDTH}
                onScroll={Animated.event(
                    [
                    { 
                        nativeEvent: {
                        contentOffset: {
                            x: this.animation,
                        },
                        },
                    },
                    ],
                    { useNativeDriver: true }
                )}

                style={styles.scrollView}
                contentContainerStyle={styles.endPadding}
                >
                {this.state.markers.map((marker, index) => (
                  <TouchableOpacity onPress={this._onPressButton}>

                      <View style={styles.card} key={index}>
                      <Image
                          source={marker.image}
                          style={styles.cardImage}
                          resizeMode="cover"
                      />
                      <View style={styles.textContent}>
                          <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                          <Text numberOfLines={1} style={styles.cardDescription}>
                          {marker.description}
                          </Text>
                      </View>
                      </View>

                    </TouchableOpacity>
                ))}
            </Animated.ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      position: "absolute",
      bottom: 30,
      left: 0,
      right: 0,
      paddingVertical: 10,
    },
    endPadding: {
      paddingRight: width - CARD_WIDTH,
    },
    card: {
      padding: 10,
      elevation: 2,
      backgroundColor: "#FFA500",
      marginHorizontal: 10,
    //   shadowColor: "#000",
    //   shadowRadius: 5,
    //   shadowOpacity: 0.3,
    //   shadowOffset: { x: 2, y: -2 },
      height: CARD_HEIGHT,
      width: CARD_WIDTH,
      overflow: "hidden",
    },
    cardImage: {
      flex: 3,
      width: "100%",
      height: "100%",
      alignSelf: "center",
    },
    textContent: {
      flex: 1,
    },
    cardtitle: {
      fontSize: 12,
      marginTop: 5,
      fontWeight: "bold",
    },
    cardDescription: {
      fontSize: 12,
      color: "#444",
    },

    marker: {
      width: 10,
      height: 10,
      borderRadius: 4,
      backgroundColor: "rgba(148,0,211,1)",
    },

  });

  AppRegistry.registerComponent("mapfocus", () => MapScreen);
