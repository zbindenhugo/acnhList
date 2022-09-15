import { useEffect } from "react";
import { useState } from "react";
import CritterModal from "../modals/CritterModal";
import FossilModal from "../modals/FossilModal";

export default function Fossils(){

    const [fossils, setFossils] = useState([]);
    
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
        const fetchFossils = async () => {
            const fossilsArray = [];
            const datas = await fetch('https://acnhapi.com/v1/fossils', {
                method: 'GET'
            });
            const json = await datas.json()

            for(var key in json){
                fossilsArray.push(json[key])
            }

            setFossils(fossilsArray);
        }

        fetchFossils();
    }, [])

    const setIconRarityIcon = (fossil) => {
        switch(fossil.availability.rarity){
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
                <div className="big-title">Les fossiles</div>
                <div className="sub-title text-base text-slate-700 mt-3">Retrouvez ici tous les fossiles d'animal crossing !</div>
            </div>
            <div className="mt-5">
            </div>
            <div className="text-center mx-auto md:grid md:grid-cols-8 grid grid-cols-3 mt-10 gap-4">
                {
                    fossils.map((fossil) => {
                        return(
                            <div key={fossil.id} onClick={() => handleShowCritterModal(fossil)} className="cursor-pointer text-center hover:scale-125 duration-75 h-32 transition-all p-1">
                                <img
                                    src={fossil.image_uri}
                                    className="rounded-full w-16 mx-auto"
                                    alt="Fish Icon"
                                />
                                <h5 className="text-base font-medium leading-tight capitalize">{fossil.name['name-EUfr']}</h5>
                            </div>
                        )
                    })
                } 
            </div>
            <FossilModal showCritterModal={showCritterModal} handleShowCritterModal={handleShowCritterModalSimple} fossil={actualCritter}  />
        </div>
    )
}