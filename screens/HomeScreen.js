import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { 
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
 } from "react-native-heroicons/outline";
import { ScrollView, TextInput } from "react-native-web";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { useState } from "react";
import { useEffect } from "react";
import sanityClient from "../sanity";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [FeaturedCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShow: false,
    });
  }, []);

  useEffect(() => {}, [
    sanityClient.fetch(
        `
      *[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[] ->
        }
      }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      }),
  ]);


  return (
    <SafeAreaView className="bg-white pt-5">
      
        {/* Header*/ }
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
          <Image
              source={{
                  uri:"https://links.papareact.com/wru",
              }}
              className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
              </Text>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>

        <View className="flex-row item-center space-x-2 pb-2 mx-4">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
            <SearchIcon color="gray" size={20} />
            <TextInput 
            placeholder="Restaurants and cuisines"
            keyboardType="default"
            />
          </View>

          <AdjustmentsIcon color="#00CCBB" />
        </View>

        {/* Body */ }
        <ScrollView  
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        >
          {/* Catagary */}
          <Categories />

          {FeaturedCategories?.map((category) =>(
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
              />
          ))}
        </ScrollView>

    </SafeAreaView>
  );
};