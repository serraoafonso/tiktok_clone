import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import React, { useRef, useState } from "react";
import { Video } from "expo-av";

const { height: heightScreen } = Dimensions.get("screen");

export function FeedItem({ data }) {
  const video = useRef(null);
  const [status, setStatus] = useState({})  
  function handlePlayer() {
    status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync()
  }

  return (
    <Pressable onPress={handlePlayer}>

      <View style={[styles.info, {bottom: 110}]}>
        <Text style={styles.name}>{data?.name}</Text>
        <Text numberOfLines={2} style={styles.description}>{data?.description}</Text>
      </View>

      <Video
        style={{width: '100%', height: heightScreen}}
        ref={video}
        source={{ uri: data?.video }}
        resizeMode='cover'
        shouldPlay={false}
        isMuted={false}
        isLooping
        onPlaybackStatusUpdate={status=>setStatus(()=>status)}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
    info:{
      position: 'absolute',
      zIndex: 99,
      left: 8,
      padding: 8, 
    },
    name:{
      color: '#fff',
      fontWeight: 'bold',
      marginBottom: 4, 
      textShadowColor: 'rgba(0,0,0,0.9)',
      textShadowOffset: {width: -1, height: 1.5}
    },
    description:{
        marginRight: 14,
        color: '#fff'
    }
});
