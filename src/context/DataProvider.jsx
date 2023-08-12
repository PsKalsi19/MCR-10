/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { inventoryData } from './../db/data';
import Actions from "../utilities/actions";


const reducer=(state,{type,payload})=>{
    switch (type) {
        case Actions.UPDATE_CATEGORY:
            return {...state,selectedCategory:payload};

        case Actions.UPDATE_SORT_BY:
            return {...state,sortby:payload};

        case Actions.UPDATE_LOW_STOCK:
            return {...state,lowStock:payload};
    
        default:
            return state;
    }
}

const initialData={
    appData:inventoryData,
    selectedCategory:'',
    sortby:'name',
    lowStock:false
}

export const DataContext = createContext()
const DataProvider = ({ children }) => {
const [dataState,dataDispatch]=useReducer(reducer,initialData)

    return (
        <DataContext.Provider value={{dataState,dataDispatch}}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;