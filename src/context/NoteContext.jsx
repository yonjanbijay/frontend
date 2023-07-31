import axios from "axios";
import { useContext, useReducer, createContext, useEffect } from "react";
import reducer from "../reducer/reducer";
const NoteContext = createContext();
const API = "https://api.pujakaitem.com/api/products"
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
}

const NoteProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "loading" });
        try {
            const res = await axios.get();
            const products = await res.data;
            dispatch({ type: "data", payload: products })
        } catch (error) {
            dispatch({ type: "error" });

        }

    };

    useEffect(() => {
        getProducts(API);
    }, []);


    return (
        <NoteContext.Provider value={{ ...state }}>
            {children}
        </NoteContext.Provider>
    );
};
//custom hooks
const useProductContext = () => {
    return useContext(NoteContext)
}

export { NoteProvider, NoteContext, useProductContext };