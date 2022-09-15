import { useContext } from "react";
import { Modal } from "react-bootstrap";

export default function FossilModal({ fossil, showCritterModal, handleShowCritterModal }){

    return(
        <Modal show={showCritterModal} onHide={handleShowCritterModal}>
            <div className="rounded-lg bg-[#FAF4DE] container text-center">
                <div className="modal-title text-center mt-4 capitalize text-3xl">
                    {fossil?.name['name-EUfr']} <span className="float-right text-xl"><button onClick={handleShowCritterModal}><i className="fa fa-times bg-[#E6E1CF] rounded-lg p-1" /></button></span>
                </div>
                <div>
                    <img src={fossil?.image_uri} className='mr-auto ml-auto' alt="fossil big" />
                </div>
                <hr />
                <hr />
                <div className="text-center p-2 mt-3">
                    <div className="underline text-xl">
                        Informations 
                    </div>
                    <div className="text-left">
                        <p>
                            <span className="bg-[#dad888] rounded-md p-1 text-lg">Prix :</span> {' '}
                            {
                                fossil?.price + ' clochettes'
                            }
                        </p>
                        <p className="mt-2">
                            <span className="bg-[#dad888] rounded-md p-1 text-lg">Plus d'information :</span> {' '} <a className="text-xl" href={`https://animalcrossing.fandom.com/wiki/${encodeURI(fossil?.['file-name'])}`}>ICI</a>
                        </p>
                    </div>
                </div>
            </div>
        </Modal>
    )
}