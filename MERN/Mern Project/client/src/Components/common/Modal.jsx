import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { closeModal, selectModal, selectType } from '../../redux/slices/uiSlice'
import CreateCarForm from '../forms/CreateCarForm'
import EditCarForm from '../forms/EditCarForm'


const Modal = () => {
    const modal = useSelector(selectModal);
    const type = useSelector(selectType);
    const dispatch = useDispatch();
    return (
        <>
            <div
                onClick={() => dispatch(closeModal())}
                className={`${modal ? "fixed inset-0 bg-gray-600 z-40 bg-opacity-70" : "hidden"}`}></div>
            <div className={`${modal ? "w-1/2 flex flex-col items-center z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed px-5 py-3 rounded-xl bg-slate-900" : "hidden"}`}>
                {modal && type === "add" ? (<CreateCarForm />) : modal && type === "edit" ? (<EditCarForm />) : (<CreateCarForm />)}
            </div>
        </>
    )
}

export default Modal