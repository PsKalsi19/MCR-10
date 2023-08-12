/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import { inventoryData } from './../db/data';
import Actions from "../utilities/actions";
import { getInventory, setInventory } from "../utilities/localstorageUtils";


const reducer = (state, { type, payload }) => {
    switch (type) {
        case Actions.UPDATE_CATEGORY:
            return { ...state, selectedCategory: payload };

        case Actions.UPDATE_SORT_BY:
            return { ...state, sortby: payload };

        case Actions.UPDATE_LOW_STOCK:
            return { ...state, lowStock: payload };

        case Actions.UPDATE_DATA:
            setInventory(payload)
            return { ...state, appData: payload }

        default:
            return state;
    }
}

const initialData = {
    appData: [],
    selectedCategory: '',
    sortby: 'name',
    lowStock: false
}

export const DataContext = createContext()
const DataProvider = ({ children }) => {
    const [dataState, dataDispatch] = useReducer(reducer, initialData)

    useEffect(() => {
        const dataFromLocalStorage = getInventory()
        if (dataFromLocalStorage.length === 0) {
            dataDispatch({ type: Actions.UPDATE_DATA, payload: inventoryData })
        } else {
            dataDispatch({ type: Actions.UPDATE_DATA, payload: dataFromLocalStorage })
        }
    }, [])
    return (
        <DataContext.Provider value={{ dataState, dataDispatch }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;