import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import { AdjustmentsIcon, ChevronDownIcon, SearchIcon, UserIcon } from 'react-native-heroicons/outline'


export default function Header() {
  return (
    <div>
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
    </div>
  )
}
