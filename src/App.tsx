import React, { useState } from "react";

import { restaurants } from "./constants/mock";

import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";
import { RestaurantTabs } from "./components/restaurant-tabs/component";

const CURRENT_RESTAURANT_INDEX = 'currentRestaurantIndex'

const getStorageCurrentRestaurantIndex = () => Number(localStorage.getItem(CURRENT_RESTAURANT_INDEX))

const setStorageCurrentRestaurantIndex = (index: number) => {
  localStorage.setItem(CURRENT_RESTAURANT_INDEX, String(index))
}

export const App = () => {
  const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(getStorageCurrentRestaurantIndex);

  const setStateCurrentRestaurantIndex = (index: number) => {
    setStorageCurrentRestaurantIndex(index);

    setCurrentRestaurantIndex(getStorageCurrentRestaurantIndex());
  }

  const currentRestaurant = restaurants[currentRestaurantIndex]

  return (
    <Layout> 
      <div>
        <RestaurantTabs
          restaurants={restaurants}
          currentIndex={currentRestaurantIndex}
          onTabClick={setStateCurrentRestaurantIndex}
        />

        {currentRestaurant && <Restaurant restaurant={currentRestaurant} /> }
      </div>
    </Layout>
  )
}