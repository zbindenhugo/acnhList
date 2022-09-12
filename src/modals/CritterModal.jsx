import { useContext } from "react";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { IslandLocationContext } from "../Contexts/Contexts";

export default function CritterModal({showCritterModal, handleShowCritterModal, critter, typeCritter}){

    const mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    const location = {
        'River' : 'Rivière',
        'River (Clifftop)' : 'Rivière (falaise)',
        'River (Clifftop) & Pond' : 'Rivière (falaise) & étang',
        'Sea' : 'Mer',
        'Pier' : 'Quai',
        'Sea (when raining or snowing)' : 'Mer (temps pluvieux ou neigeux)',
        'Pond' : 'Étang',
        'Flying' : 'Volant',
        'Flying near hybrid flowers' : 'Volant à coté des fleurs hybrides',
        'Flying by light' : 'Volant à la lumière',
        'On trees' : 'Sur les arbres',
        'On the ground' : 'Sur le sol',
        'On flowers' : 'Sur les fleurs',
        'On white flowers' : 'Sur les fleurs blanches',
        'Shaking trees' : 'Sur les arbres secoués',
        'Flying (near water)' : "Volant (près de l'eau)",
        'Underground' : 'Sous terre',
        'On ponds and rivers' : 'Sur les étangs et rivières',
        'On tree stumps' : "Sur les souches d'arbres",
        'On palm trees' : 'Sur les palmiers',
        'Under trees' : 'Sous les arbres',
        'On rotten food' : 'Sur la nourriture pourrie',
        'On the beach' : 'Sur la plage',
        'On beach rocks' : 'Sur les rochers de plage',
        'Near trash' : 'Près des poubelles',
        'On villagers' : 'Sur les villageois',
        'On rocks and bush (when raining)' : 'Sur les rochers et les buissons (en cas de pluie)',
        'Hitting rocks' : 'En tappant les rochers'


    }

    const shadow = {
        'Smallest (1)' : 'Très petite (1)',
        'Small (2)'  : 'Petite (2)',
        'Medium (3)' : 'Moyenne (3)',
        'Medium (4)' : 'Moyenne (4)',
        'Large (5)' : 'Grande (5)',
        'Largest (6)' : 'Très grande (6)',
        'Largest with fin (6)' : 'Très grande avec aileron (6)'
    }

    const speed = {
        'Stationnary' : 'Fixe',
        'Very slow' : 'Très lent',
        'Slow' : 'Lent',
        'Medium' : 'Moyen',
        'Fast' : 'Rapide',
        'Very fast' : 'Très rapide'
    }

    const { islandLocation } = useContext(IslandLocationContext);

    return(
        <Modal show={showCritterModal} onHide={handleShowCritterModal}>
            <div className="rounded-lg bg-[#FAF4DE] container text-center">
                <div className="modal-title text-center mt-4 capitalize text-3xl">
                    {critter?.name['name-EUfr']}
                </div>
                <div>
                    <img src={critter?.image_uri} className='mr-auto ml-auto' alt="Critter big" />
                </div>
                <hr />
                <div className="grid grid-cols-2 mt-3 mb-3 p-2">
                    <div className="critter-infos">
                        <h1 className="text-xl italic text-center underline">
                            Disponibilité 
                        </h1>
                        <p className='mt-1'>
                            {critter?.availability.isAllYear ? 
                                "Toute l'année" 
                            : 
                                mois[critter?.availability[islandLocation][0]] + ' à ' + mois[critter?.availability[islandLocation][critter?.availability[islandLocation].length - 1]]
                            }
                        </p>
                        <p className='mt-1'>
                            {critter?.availability.isAllDay ? 
                                "Toute la journée" 
                            : 
                                critter?.availability['time-array'][0] + 'h à ' + critter?.availability['time-array'][critter?.availability['time-array'].length - 1] + 'h'
                            }
                        </p>
                    </div>
                    <div className="critter-infos border-l border-slate-300">
                        <h1 className="text-xl italic text-center underline">
                            Emplacement 
                        </h1>
                        <p className='mt-1'>
                            {
                                location[critter?.availability.location]
                            }
                        </p>
                        <p className="text-slate-500 italic text-sm">
                        {
                            typeCritter === 'fish' ? <span>Ombre : { shadow[critter?.shadow] }</span>  : typeCritter === 'sea' ? <span>Vitesse : { speed[critter?.speed] }</span> : null
                        }
                        </p>
                    </div>
                </div>
                <hr />
                <div className="text-center p-2 mt-3">
                    <div className="underline text-xl">
                        Informations 
                    </div>
                    <div className="text-left">
                        <p>
                            <span className="bg-[#dad888] rounded-md p-1 text-lg">Prix :</span> {' '}
                            {
                                typeCritter === 'fish' ? 
                                    critter?.price + ' clochettes (' + critter?.['price-cj'] + ' si vendu à C.J)'
                                :
                                    typeCritter === 'bug' ? 
                                        critter?.price + ' clochettes (' + critter?.['price-flick'] + ' si vendu à Flick)'
                                    :
                                    critter?.price + ' clochettes'
                            }
                        </p>
                    </div>
                </div>
            </div>
        </Modal>
    )
}