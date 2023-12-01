import React from 'react';
import {View, Image, Text} from "react-native";

const ReceptItem = () => {
    return (
        <View className={"flex flex-col gap-2 p-2"}>
            <Image className={"w-[calc(100%-20px)] h-[200px] rounded-lg bg-contain bg-center"}
                   source={{uri: "https://eda.ru/images/RecipePhoto/1280x960/brauni-brownie_20955_photo_159965.webp"}}/>
                <Text className={"text-xl font-medium"}>
                    Брауни (brownie)
                </Text>
        </View>
    );
};

export default ReceptItem;