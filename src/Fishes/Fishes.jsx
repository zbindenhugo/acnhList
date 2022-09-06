import { useContext, useEffect, useState } from "react";
import { IslandLocationContext } from "../Contexts/Contexts";

export default function Fishes(){
    
    const [fishes, setFishes] = useState([]);

    const { islandLocation, chooseSouthernIsland } = useContext(IslandLocationContext);

    useEffect(() => {
        const fetchFishes = async () => {
            const fishesArray = [];
            const datas = await fetch('https://acnhapi.com/v1/fish', {
                method: 'GET'
            });
            const json = await datas.json()

            for(var key in json){
                fishesArray.push(json[key])
            }

            setFishes(fishesArray);
        }

        fetchFishes();
        
        chooseSouthernIsland();
    }, [])



    return(
        <div className="container mx-auto mt-10">
            <div className="text-center text-6xl font-bold ">
                <div className="big-title">Les poissons</div>
                <div className="sub-title text-base text-slate-700 mt-3">Retrouvez ici tous les poissons d'animal crossing !</div>
            </div>
            <div className="mt-5">
                <div>
                    <p>Voici tous les poissons présent dans Animal Crossing New Horizon.</p>
                    <p>Les poissons dont l'image est flouté sont les poissons qui ne sont pas disponible ce mois-ci.</p>
                </div>
                <div>
                    Légende : 
                    <ul className="list-disc ml-10">
                        <li><i className="fa fa-star text-gray-500 text-xl" title="Commun"/> Indique le le poisson est un poisson commun</li>
                        <li><i className="fa fa-star text-blue-400 text-xl" title="Peu commun"/> Indique le le poisson est un poisson peu commun</li>
                        <li><i className="fa fa-star text-purple-400 text-xl" title="Rare"/> Indique le le poisson est un poisson rare</li>
                        <li><i className="fa fa-star text-yellow-500 text-xl" title="Ultra rare"/> Indique le le poisson est un poisson ultra rare</li>
                    </ul>
                </div>
            </div>
            <div className="text-center mx-auto md:grid md:grid-cols-8 grid grid-cols-3 mt-10">
                {
                    fishes.map((fish) => {

                        const fishHeader = () => {
                            switch(fish.availability.rarity){
                                case 'Common' :
                                    return <div className="text-sm"> {fish.name['name-EUfr'] + ' '}<i className="fa fa-star text-gray-500 text-xl float-right" title="Commun"/></div>
                                case 'Uncommon' :
                                    return <div> {fish.name['name-EUfr'] + ' '}<i className="fa fa-star text-blue-400 text-xl float-right" title="Peu commun"/></div>
                                case 'Rare' :
                                    return <div> {fish.name['name-EUfr'] + ' '}<i className="fa fa-star text-purple-400 text-xl float-right" title="Rare"/></div>
                                case 'Ultra-rare' :
                                    return <div> {fish.name['name-EUfr'] + ' '}<i className="fa fa-star text-yellow-500 text-xl float-right" title="Ultra rare"/></div>
                                default :
                                    break;
                            }
                        }

                        const setFishVisibility = () => {
                            return (
                                fish.availability.isAllYear ?
                                    "w-[64px] h-[64px] mx-auto"
                                :
                                    fish.availability[islandLocation].includes(new Date(Date.now()).getMonth()) ? 
                                        "w-[64px] h-[64px] mx-auto"
                                    :
                                        "w-[64px] h-[64px] mx-auto blur-sm"
                            )
                        }           

                        return(
                            <div key={fish.id} className="border border-black p-2" onClick={() => console.log('')}>
                                <div className="text-center capitalize hover:border hover:border-x-2 hover:border-y-2 hover:border-dashed hover:border-slate-500 transition-all duration-150">
                                    {fishHeader()}
                                    <img src={fish.icon_uri} alt='fish icon' className={setFishVisibility()} />
                                </div>
                            </div> 
                        )
                    })
                } 
            </div>
        </div>
    )
}