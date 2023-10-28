import { View, Text, StyleSheet, Pressable, Dimensions , TouchableOpacity, Platform} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { Video } from "expo-av";

import {Ionicons} from '@expo/vector-icons'

const { height: heightScreen } = Dimensions.get("screen");

export function FeedItem({ data, currentVisibleItem }) {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  function handlePlayer() {
    status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync();
  }

  useEffect(()=>{
    if(currentVisibleItem?.id === data?.id){
      video.current?.playAsync()
    }else{
      video.current?.stopAsync()
    }
  },[])

  return (
    <Pressable onPress={handlePlayer}>
      <View style={[styles.info, { bottom: 110 }]}>
        <Text style={styles.name}>{data?.name}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {data?.description}
        </Text>
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="heart" color="#fff" size={35}/>  
          <Text style={styles.actionTest}>30.3K</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-ellipses" color="#fff" size={35}/>  
          <Text style={styles.actionTest}>30.3K</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="bookmark" color="#fff" size={35}/>  
          <Text style={styles.actionTest}>30.3K</Text>
        </TouchableOpacity>
      </View>

      <Video
        style={{ width: "100%", height: heightScreen }}
        ref={video}
        source={{ uri: data?.video }}
        resizeMode='cover'
        shouldPlay={false}
        isMuted={false}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  info: {
    position: "absolute",
    zIndex: 99,
    left: 8,
    padding: 8,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 4,
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8,
  },
  description: {
    marginRight: 24,
    color: "#fff",
    textShadowColor: "rgba(0,0,0,0.2)",
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8,
  },
  actions:{
    position: 'absolute',
    zIndex: 99,
    right: 8,
    bottom: Platform.OS === 'android' ? 120 : 170,
    gap: 8,
  },
  actionText: {
    textAlign: 'center',
    color: '#fff',
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8,
  },
  actionButton: {
    
  }

});
