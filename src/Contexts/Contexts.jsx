import React, { useState } from "react";

export const IslandLocationContext = React.createContext();

export const IslandLocationProvider = ({children}) => {
    const [islandLocation, setIslandLocation] = useState("month-array-northern");

    const chooseNorthernIsland = () => {
        setIslandLocation('month-array-northern');
    }

    const chooseSouthernIsland = () => {
        setIslandLocation('month-array-southern');
    }

    return(
        <IslandLocationContext.Provider value={{ islandLocation, chooseNorthernIsland, chooseSouthernIsland }}>
            {children}
        </IslandLocationContext.Provider>
    )
}