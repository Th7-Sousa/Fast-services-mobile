import { View, Text, TouchableOpacity } from "react-native";
import { styles } from '../styles/styles_global';
import NavbarHeader from '../components/NavbarHeader'
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';

import { WebView } from 'react-native-webview';

export default function Detail() {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmVhNmI0NGU0MjEwZjljYjczNzdlZTM5MTE2OTVlOSIsInN1YiI6IjY1MWRlYjkzOGMyMmMwMDBjOTA4YjliYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P7ppdL_-iHK0G7Y16XP_Bg_z6R-IYL_8YFX6qCTAk7Q'
    }
  };

  const { id } = useLocalSearchParams()

  const [movieDetail, setMovieDetail] = useState(null)
  const [videoKey, setVideoKey] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then(response => response.json())
      .then(response => setMovieDetail(response))
      .catch(err => console.error(err));
  }, [id, options]);


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
      .then(response => response.json())
      .then(response => {
        setVideoKey(response.results[1].key);
      })
      .catch(err => console.error(err));
  }, [id, options]);


  return (
    <View style={styles.container}>
      <NavbarHeader type='detail' />
      {movieDetail && <Text key={movieDetail.title}>Detalhes do filme: {movieDetail.title}</Text>}
      {videoKey && (
        <View>
          <TouchableOpacity
            onPress={() => setShowVideo(true)}
            style={{
              backgroundColor: '#ED7E02',
              paddingHorizontal: 8,
              paddingVertical: 10,
              borderRadius: 40,
              alignItems: 'center',
              display: showVideo ? 'none' : 'flex',
            }}>
            <Text style={{ color: 'white' }}>Assistir</Text>
          </TouchableOpacity>
          {showVideo && (
            <WebView
              source={{ uri: `https://www.youtube.com/embed/${videoKey}` }}
              style={{ marginTop: 20, width: 350, maxHeight: 250 }}
            />
          )}
        </View>
      )}
    </View>
  );
}
