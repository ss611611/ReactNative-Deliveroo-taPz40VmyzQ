import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from "./CategoryCard";
import { urlFor } from "../sanity";

const Categories = () => {
  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
        {/* CategoryCard */}
       
       <CategoryCard  
       imgUrl="https://links.papareact.com/gn7"
       title="Tesring 1" 
       />
       <CategoryCard 
       imgUrl="https://links.papareact.com/gn7"
       title="Tesring 2" 
        />
       <CategoryCard 
       imgUrl="https://links.papareact.com/gn7"
       title="Tesring 3" 
        />
    </ScrollView>
  )
}

export default Categories