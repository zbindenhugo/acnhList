import { useEffect, useState } from "react";
import CritterModal from "../modals/CritterModal";

export default function Fishes(){
    
    const [fishes, setFishes] = useState([]);
    
    const [actualCritter, setActualCritter] = useState()
    const [showCritterModal, toggleShowCritterModal] = useState(false);

    const handleShowCritterModal = async (critter) => {
        await setActualCritter(critter);
        await toggleShowCritterModal(!showCritterModal);
    }

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
            <div className="text-center mx-auto md:grid md:grid-cols-8 grid grid-cols-3 mt-10 gap-2">
                {
                    fishes.map((fish) => {
                        return(
                            <div key={fish.id} onClick={() => handleShowCritterModal(fish)} className="cursor-pointer text-center hover:border-dashed hover:border-2 border-[#887B64] duration-75 h-32 transition-all rounded-full">
                                <img
                                    src={fish.icon_uri}
                                    className="rounded-full w-16 mx-auto"
                                    alt="Fish Icon"
                                />
                                <h5 className="text-base font-medium leading-tight capitalize">{fish.name['name-EUfr']}</h5>
                                <p className="text-gray-500 text-sm">{fish.availability.isAllDay ? 'Toute la journée' : `${fish.availability['time-array'][0]}h à ${fish.availability['time-array'][fish.availability['time-array'].length - 1]}h` }</p>
                                {
                                    () => {
                                        switch(fish.availability.rarity){
                                            case 'Common' :
                                                return(<i className="fa fa-star text-gray-500 text-xl" title="Commun"/>)
                                            case 'Uncommon' :
                                                return(<i className="fa fa-star text-blue-400 text-xl" title="Peu commun"/>)
                                            case 'Rare' : 
                                                return(<i className="fa fa-star text-purple-400 text-xl" title="Rare"/>)
                                            case 'Ultra-rare' :
                                                return(<i className="fa fa-star text-yellow-500 text-xl" title="Ultra rare"/>)
                                            default :
                                                return(null)
                                        }
                                    }
                                }
                            </div>
                        )
                    })
                } 
            </div>
            <CritterModal showCritterModal={showCritterModal} handleShowCritterModal={handleShowCritterModal} critter={actualCritter} typeCritter={'fish'} />
        </div>
    )
}