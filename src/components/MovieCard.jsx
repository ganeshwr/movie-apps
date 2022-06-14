import { View, Image } from "react-native";

const imageUrl = "https://image.tmdb.org/t/p/w440_and_h660_face";

const MovieCard = ({ movie }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: "auto",
        padding: 10,
      }}
    >
      <Image
        style={{ width: "100%", height: 250, borderRadius: 5 }}
        source={{ uri: imageUrl + movie.poster_path }}
      />
    </View>
  );
};

export default MovieCard;
