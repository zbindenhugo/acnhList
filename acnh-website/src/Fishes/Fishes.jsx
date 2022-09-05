import { useContext, useEffect, useState } from "react";
import { IslandLocationContext } from "../Contexts/Contexts";

export default function Fishes(){
    
    const [fishes, setFishes] = useState([]);

    useEffect(() => {
        const fetchFishes = async () => {

            const fishesArray = [];

            const datas = await fetch('http://acnhapi.com/v1/fish', {
                method: 'GET'
            });
            const json = await datas.json()

            for(var key in json){
                fishesArray.push(json[key])
            }

            setFishes(fishesArray);
        }

        fetchFishes();
    }, [])

    const { islandLocation, chooseNorthernIsland } = useContext(IslandLocationContext);

    chooseNorthernIsland();

    return(
        <div className="container mx-auto mt-10">
            <div className="text-center text-6xl font-bold">
                Les poissons
            </div>
            <div className="md:grid md:grid-cols-8 mt-10">
                {
                    fishes.map((fish) => {

                        const fishHeader = () => {
                            switch(fish.availability.rarity){
                                case 'Common' :
                                    return fish.name['name-EUfr'] + ' - Commun'
                                case 'Uncommon' :
                                    return fish.name['name-EUfr'] + ' - Peu commun'
                                case 'Rare' :
                                    return fish.name['name-EUfr'] + ' - rare'
                                case 'Ultra-rare' :
                                    return fish.name['name-EUfr'] + ' - Ultra rare'
                            }
                        }

                        const setFishVisibility = () => {
                            return (
                                fish.availability.isAllYear ?
                                    "w-32 h-32 mr-auto ml-auto"
                                :
                                    fish.availability[islandLocation].includes(new Date(Date.now()).getMonth().toLocaleString()) ? 
                                        "w-32 h-32 mr-auto ml-auto"
                                    :
                                        "w-32 h-32 mr-auto ml-auto blur-sm"
                            )
                        }           

                        return(
                            <div key={fish.id} className="border border-black bg-white w-auto h-auto">
                                <div className="text-center">
                                    {fishHeader()}
                                </div>
                                <img src={fish.icon_uri} alt='fish icon' className={setFishVisibility()} />
                            </div> 
                        )
                    })
                } 
            </div>
        </div>
    )
}