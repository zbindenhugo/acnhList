import { useContext, useEffect, useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IslandLocationContext } from '../Contexts/Contexts';

import './Home.css'
export default function Home() {

    const [fishes, setFishes] = useState([]);
    const [bugs, setBugs] = useState([]);
    const [seacreatures, setSeacreatures] = useState([]);

    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin','Juillet', 'Août', 'Septembre', 'Octobre','Novembre', 'Décembre']
    
    const frRarity = {
        "Common" : "Commun",
        "Uncommon" : "Peu Commun",
        "Rare" : "Rare",
        "Ultra-rare" : "Ultra rare"
    }

    const frSpeed = {
        "Stationary" : "Immobile",
        "Slow" : "Lent",
        "Very slow" : "Très lent",
        "Medium" : "Moyen",
        "Fast" : "Rapide",
        "Very fast" : "Très rapide"
    }

    const [tabIndex, setTabIndex] = useState(0);

    const { islandLocation, chooseSouthernIsland } = useContext(IslandLocationContext);
    chooseSouthernIsland()

    useEffect(() => {
        const fetchDatas = async () => {

            const fishesArray = [];
            const bugsArray = [];
            const seaArray = [];

            var datas = await fetch('https://acnhapi.com/v1/fish', {method:'GET'});
            var json = await datas.json();
            for(var key in json){
                fishesArray.push(json[key])
            }
            setFishes(fishesArray);

            datas = await fetch('https://acnhapi.com/v1/bugs', {method:'GET'});
            json = await datas.json();
            for(var key in json){
                bugsArray.push(json[key])
            }
            setBugs(bugsArray);

            datas = await fetch('https://acnhapi.com/v1/sea', {method:'GET'});
            json = await datas.json();
            for(var key in json){
                seaArray.push(json[key])
            }
            setSeacreatures(seaArray);
        }

        fetchDatas();
    }, [])

    return(
        <div className="container mx-auto text-center">
            <div className="text-center text-6xl mt-10">
                AC Pedia
            </div>
            <div className="text-center text-base mt-2">
                Votre carnet personnel pour toutes les bestioles, objets, et villageois d'Animal Crossing New Horizons!
            </div>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='mt-10'>
                <TabList>
                    <Tab style={{backgroundColor: 'transparent', borderColor: 'transparent'}}>
                        <svg viewBox="0 0 32 32" className={ tabIndex === 0 ? 'w-10 h-10 text-yellow-600 scale-110' : 'w-10 h-10 text-[#887B64] hover:scale-110 transition-all duration-150' } xmlns="http://www.w3.org/2000/svg"><path d="M12.383 7.426C6.82 7.532 1.119 8.788.018 14.16c.018.267-.071.98.034 1.43 2.56 10.978 20.443 11.743 25.295 3.155l-.005.024c1.324 2.772 3.72 3.674 6.179 4.33.358.106.417-.182.297-.36-.687-1.129-2.174-3.886-2.293-6.778-.125-3.05 1.677-5.842 2.37-6.798.119-.21.209-.361-.15-.439-.507-.045-1.515.028-3.24.761-1.995.849-2.83 3.15-2.83 3.15-2.012-3.357-7.73-5.315-13.292-5.209zm-6.731 3.63c2.646-.094 2.984 5.104-.064 5.105-2.933.001-3.002-4.996.064-5.105z" fill="currentColor"></path></svg>
                    </Tab>
                    <Tab style={{backgroundColor: 'transparent', borderColor: 'transparent'}}>
                        <svg viewBox="0 0 32 32" className={ tabIndex === 1 ? 'w-10 h-10 text-yellow-600 scale-110' : 'w-10 h-10 text-[#887B64] hover:scale-110 transition-all duration-150' } xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.434 9.958c-1.109-1.33-4.968-4.636-9.939-2.987-7.28 4.32-1.71 11.92 3.35 15.003-5.112 8.796 5.812 9.728 8.527 3.101.147-.227.396-.602.562-.598.17.005.506.45.601.598 1.374 2.938 7.347 6.832 9.632 2.286.8-1.592-.29-3.931-.716-5.774 4.569-1.983 9.862-11.186 3.869-14.22-3.706-1.875-7.448.735-10.459 2.59.176-1.71.866-3.252 2.343-4.33 1.995-1.457 3.175-.177 3.319-1.718.187-2.013-3.474-1.314-4.493-.82-2.493 1.205-3.356 3.966-3.882 6.481-.873-2.276-1.565-5.2-3.894-6.466-.918-.5-4.8-1.082-4.803.736-.004 1.545 2.07.587 3.61 1.904 1.353.92 1.872 2.743 2.373 4.214" fill="currentColor">
                            </path>
                        </svg>
                    </Tab>
                    <Tab style={{backgroundColor: 'transparent', borderColor: 'transparent'}}>
                        <svg viewBox="0 0 32 32" className={ tabIndex === 2 ? 'w-10 h-10 text-yellow-600 scale-110' : 'w-10 h-10 text-[#887B64] hover:scale-110 transition-all duration-150' } xmlns="http://www.w3.org/2000/svg"><path d="M16 .003c-2.924 0-5.064.483-8.282 2.896C4.5 5.313 4.34 8.53 4.34 9.817s.16 4.827 2.252 7.24c1.587 1.801 3.516 2.203 1.288 2.736-2.252.321-3.54 2.09-3.54 2.09s-.724 1.047-.724 3.782c0 2.735 3.298 4.585 3.298 4.585s1.127 0 .966-1.125c-.16-1.127-.965-1.449.483-3.701 1.046-1.368 1.608-.965 1.608-.965s.483.482.322 1.286c-.563 1.046-.321 4.104 2.736 6.035 1.69.483 2.091.24 1.447-1.369-.16-1.77-.482-5.309 1.525-5.309 2.007 0 1.684 3.54 1.523 5.31-.643 1.608-.24 1.85 1.45 1.368 3.056-1.93 3.297-4.989 2.734-6.035-.161-.804.321-1.286.321-1.286s.563-.403 1.609.965c1.448 2.252.645 2.574.484 3.7-.161 1.127.965 1.126.965 1.126s3.297-1.85 3.297-4.585-.723-3.781-.723-3.781-1.287-1.77-3.54-2.091c-2.227-.533-.3-.935 1.288-2.736 2.091-2.414 2.252-5.953 2.252-7.24S27.5 5.313 24.282 2.9C21.064.486 18.924.003 16 .003zm-4.088 17.164a1.807 1.807 0 01.002 0 1.807 1.807 0 011.807 1.807 1.807 1.807 0 01-1.807 1.807 1.807 1.807 0 01-1.807-1.807 1.807 1.807 0 011.805-1.807zm8.035 0a1.807 1.807 0 01.002 0 1.807 1.807 0 011.807 1.807 1.807 1.807 0 01-1.807 1.807 1.807 1.807 0 01-1.806-1.807 1.807 1.807 0 011.804-1.807z" fill="currentColor"></path></svg>     
                    </Tab>
                </TabList>

                <TabPanel>
                    <p className='text-3xl mt-5 mb-3'>Poissons du mois
                        { 
                            months[new Date(Date.now()).getMonth()].charAt(0) === 'A' || months[new Date(Date.now()).getMonth()].charAt(0) === 'O' ?
                                <span> d' <span className='uppercase text-[#01A6BF]'>{months[new Date(Date.now()).getMonth()]}</span></span>
                            :
                                <span> de <span className='uppercase text-[#01A6BF] underline'>{months[new Date(Date.now()).getMonth()]}</span></span>

                        }
                    </p>
                    <div className='md:grid md:grid-cols-8 grid grid-cols-3 gap-2'>
                        {
                            fishes.map((fish) => {

                                return (
                                    fish.availability[islandLocation].includes(new Date(Date.now()).getMonth()) ?
                                        <div key={fish.id} className="text-center hover:border-dashed hover:border border-[#887B64] duration-75 transition-all rounded-full h-36 align-middle">
                                            <button>
                                                <img
                                                    src={fish.icon_uri}
                                                    className="rounded-full w-16 mx-auto"
                                                    alt="Fish Icon"
                                                />
                                                <h5 className="text-base font-medium leading-tight capitalize">{fish.name['name-EUfr']}</h5>
                                                <p className="text-gray-500 text-sm">{frRarity[fish.availability.rarity]}</p>
                                            </button>
                                        </div>
                                    :
                                        null
                                )
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <p className='text-3xl mt-5 mb-3'>Insectes du mois
                        { 
                            months[new Date(Date.now()).getMonth()].charAt(0) === 'A' || months[new Date(Date.now()).getMonth()].charAt(0) === 'O' ?
                                <span> d' <span className='uppercase text-[#01A6BF]'>{months[new Date(Date.now()).getMonth()]}</span></span>
                            :
                                <span> de <span className='uppercase text-[#01A6BF] underline'>{months[new Date(Date.now()).getMonth()]}</span></span>

                        }
                    </p>
                    <div className='md:grid md:grid-cols-10 grid grid-cols-3 gap-2'>
                        {
                            bugs.map((bug) => {
                                return (
                                    bug.availability[islandLocation].includes(new Date(Date.now()).getMonth()) ?
                                        <div key={bug.id} className="text-center hover:border-2 hover:border-dashed border-[#887B64] duration-75 transition-all rounded-md">
                                            <button>
                                                <img
                                                    src={bug.icon_uri}
                                                    className="rounded-full w-16 mx-auto"
                                                    alt="Fish Icon"
                                                />
                                                <h5 className="text-base font-medium leading-tight mb-2 capitalize">{bug.name['name-EUfr']}</h5>
                                                <p className="text-gray-500 text-sm">{frRarity[bug.availability.rarity]}</p>
                                            </button>
                                    </div>
                                    :
                                        null
                                )
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <p className='text-3xl mt-5 mb-3'>Créatures sous-marine du mois
                        { 
                            months[new Date(Date.now()).getMonth()].charAt(0) === 'A' || months[new Date(Date.now()).getMonth()].charAt(0) === 'O' ?
                                <span> d' <span className='uppercase text-[#01A6BF]'>{months[new Date(Date.now()).getMonth()]}</span></span>
                            :
                                <span> de <span className='uppercase text-[#01A6BF] underline'>{months[new Date(Date.now()).getMonth()]}</span></span>

                        }
                    </p>
                    <div className='md:grid md:grid-cols-10 grid grid-cols-3 gap-2'>
                        {
                            seacreatures.map((sea) => {
                                return (
                                    sea.availability[islandLocation].includes(new Date(Date.now()).getMonth()) ?
                                        <div key={sea.id} className="text-center hover:border-2 hover:border-dashed border-[#887B64] duration-75 transition-all rounded-md">
                                            <img
                                                src={sea.icon_uri}
                                                className="rounded-full w-16 mx-auto"
                                                alt="Fish Icon"
                                            />
                                            <h5 className="text-base font-medium leading-tight mb-2 capitalize">{sea.name['name-EUfr']}</h5>
                                            <p className="text-gray-500 text-sm">{frSpeed[sea.speed]}</p>
                                    </div>
                                    :
                                        null
                                )
                            })
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}