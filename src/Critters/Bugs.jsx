import { useEffect, useState } from "react";
import CritterModal from "../modals/CritterModal";

export default function Bugs(){
    
    const [bugs, setBugs] = useState([]);
    
    const [actualCritter, setActualCritter] = useState()
    const [showCritterModal, toggleShowCritterModal] = useState(false);

    const handleShowCritterModal = async (critter) => {
        await setActualCritter(critter);
        await toggleShowCritterModal(!showCritterModal);
    }

    const handleShowCritterModalSimple = () => {
        toggleShowCritterModal(!showCritterModal)
    }

    useEffect(() => {
        const fetchBugs = async () => {
            const bugsArray = [];
            const datas = await fetch('https://acnhapi.com/v1/bugs', {
                method: 'GET'
            });
            const json = await datas.json()

            for(var key in json){
                bugsArray.push(json[key])
            }

            setBugs(bugsArray);
        }

        fetchBugs();
    }, [])

    const setIconRarityIcon = (fish) => {
        switch(fish.availability.rarity){
            case 'Common' :
                return <i className="fa fa-star text-gray-500 text-xl" title="Commun"/>
            case 'Uncommon' :
                return <i className="fa fa-star text-blue-400 text-xl" title="Peu commun"/>
            case 'Rare' : 
                return <i className="fa fa-star text-purple-400 text-xl" title="Rare"/>
            case 'Ultra-rare' :
                return <i className="fa fa-star text-yellow-500 text-xl" title="Ultra rare"/>
            default :
                return(null)
        }
    }


    return(
        <div className="container mx-auto mt-10">
            <div className="text-center text-6xl font-bold ">
                <div className="big-title">Les insectes</div>
                <div className="sub-title text-base text-slate-700 mt-3">Retrouvez ici tous les insectes d'animal crossing !</div>
            </div>
            <div className="mt-5">
                <div className="grid grid-cols-2">
                    <div>
                        Légende : 
                        <ul className="list-disc ml-10">
                            <li><i className="fa fa-star text-gray-500 text-xl" title="Commun"/> Indique que l'insecte est commun</li>
                            <li><i className="fa fa-star text-blue-400 text-xl" title="Peu commun"/> Indique que l'insecte est peu commun</li>
                            <li><i className="fa fa-star text-purple-400 text-xl" title="Rare"/> Indique que l'insecte est rare</li>
                            <li><i className="fa fa-star text-yellow-500 text-xl" title="Ultra rare"/> Indique que l'insecte est ultra rare</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div className="text-center mx-auto md:grid md:grid-cols-8 grid grid-cols-3 mt-10 gap-4">
                {
                    bugs.map((bug) => {
                        return(
                            <div key={bug.id} onClick={() => handleShowCritterModal(bug)} className="cursor-pointer text-center hover:scale-125 duration-75 h-32 transition-all p-1">
                                <img
                                    src={bug.icon_uri}
                                    className="rounded-full w-16 mx-auto"
                                    alt="Fish Icon"
                                />
                                <h5 className="text-base font-medium leading-tight capitalize">{bug.name['name-EUfr']}</h5>
                                <p className="text-gray-500 text-sm">{bug.availability.isAllDay ? 'Toute la journée' : `${bug.availability['time-array'][0]}h à ${bug.availability['time-array'][bug.availability['time-array'].length - 1]}h` }</p>
                                {
                                    setIconRarityIcon(bug)
                                }
                            </div>
                        )
                    })
                } 
            </div>
            <CritterModal showCritterModal={showCritterModal} handleShowCritterModal={handleShowCritterModalSimple} critter={actualCritter} typeCritter={'bug'} />
        </div>
    )
}