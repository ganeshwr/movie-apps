import { ScrollView, View } from "react-native";
import { useState, useEffect } from "react";
import { TextInput, Text } from "react-native-paper";
import * as React from "react";

import MovieCard from "./components/MovieCard";

import { fetchMovies } from "./api/index";

export default function App() {
  const [movies, setMovies] = useState({});
  const [moviesResult, setMoviesResult] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (keyword.length) {
      const temp = movies.results.reduce((prev, curr) => {
        if (curr.original_title.toLowerCase().includes(keyword.toLowerCase())) {
          prev.push(curr);
        }

        return prev;
      }, []);

      setMoviesResult(temp);
    } else {
      setMoviesResult(movies.results);
    }
  }, [keyword]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMovies(1);
        setMovies(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (movies.results) {
      setMoviesResult(movies.results);
    }
  }, [movies]);

  return (
    <View
      style={{
        marginVertical: 50,
        marginHorizontal: 20,
      }}
    >
      <View>
        <TextInput
          placeholder="Search..."
          value={keyword}
          onChangeText={(text) => setKeyword(text)}
          left={<TextInput.Icon name="magnify" />}
        />
      </View>
      {moviesResult.length ? (
        <ScrollView
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {moviesResult.map((el, idx) => {
            return <MovieCard key={idx} movie={el} />;
          })}
        </ScrollView>
      ) : (
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            marginTop: 50,
          }}
        >
          Not found
        </Text>
      )}
    </View>
  );
}
