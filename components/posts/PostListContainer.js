import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, ScrollView } from "react-native";
import QuestionCard from "../cards/QuestionCard";
import { useNavigation } from "@react-navigation/native";
import { questions } from "../../api/dummyquestions";
import { getAllPosts } from "../../api/posts";

export default function PostListContainer() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getAllPosts()
        .then((res) => setPosts(res.data))
        .then((response) => {
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        })
        .catch((error) => console.warn(error));
    });
    return unsubscribe;
  }, [navigation]);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <ActivityIndicator size={"small"} />
      </View>
    );
  } else {
    return (
      <View style={{flex: 1}}>
        {posts.map((question) => (
          <QuestionCard question={question} key={question.uuid} />
        ))}
      </View>
    );
  }
}
