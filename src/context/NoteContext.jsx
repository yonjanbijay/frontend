import axios from "axios";
import { useContext, useReducer, createContext, useEffect } from "react";
import reducer from "../reducer/reducer";
const NoteContext = createContext();
const API = "http://127.0.0.1:8000/api/motorcycle/?format=json"
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
            const res = await axios.get(url);
            const products = await res.data;
            console.log("🚀 ~ file: NoteContext.jsx:21 ~ getProducts ~ products:", products)
            dispatch({ type: "data", payload: products });
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