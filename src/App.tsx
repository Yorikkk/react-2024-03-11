import { useState } from "react";

import { restaurants } from "./constants/mock";

import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";
import { RestaurantTabs } from "./components/restaurant-tabs/component";
import { getStorageValue, setStorageValue } from "./utils/storage";
import { ACTIVE_RESTAURANT_INDEX_STORAGE_KEY } from "./constants/constants";

export const App = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(() => Number(getStorageValue(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY)) ?? 0);

  const activeRestaurant = restaurants[activeRestaurantIndex];

  return (
    <Layout>
      <main className="main">
        <RestaurantTabs
          className="navigation"
          restaurants={restaurants}
          currentIndex={activeRestaurantIndex}
          onTabClick={(index: number) => {
            setStorageValue(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY, String(index))
            setActiveRestaurantIndex(index)
          }}
        />

        {activeRestaurant && <Restaurant restaurant={activeRestaurant} className="restaurant" /> }
      </main>
    </Layout>
  )
}