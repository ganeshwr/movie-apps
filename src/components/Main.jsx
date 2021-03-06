import { ScrollView, View } from "react-native";
import { useState, useEffect } from "react";
import { TextInput, Text } from "react-native-paper";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import MovieCard from "./MovieCard";

import { fetchMovies } from "../api/index";
import { setMovies } from "../store/movies/movies.action";
import { selectMovies } from "../store/movies/movies.selector";

const Main = () => {
  const movies = useSelector(selectMovies);
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

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMovies(1);
        dispatch(setMovies(response.data));
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
          testID="search"
          placeholder="Search..."
          value={keyword}
          onChangeText={(text) => setKeyword(text)}
          left={<TextInput.Icon name="magnify" />}
        />
      </View>
      {moviesResult && moviesResult.length ? (
        <ScrollView
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 30,
          }}
        >
          {moviesResult.map((el, idx) => {
            return <MovieCard key={idx} movie={el} />;
          })}
        </ScrollView>
      ) : (
        <Text
          testID="not-found"
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
};

export default Main;
