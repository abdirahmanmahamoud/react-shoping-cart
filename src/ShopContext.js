import { createContext, useContext, useReducer } from "react";
import shopReducer, { InitialState } from "./shopReducer";

const shopContext = createContext(InitialState);

export const ShopProvider = ({children}) =>{
    const [state,dispatch] = useReducer(shopReducer,InitialState);
    
    const addToCart = (product) =>{
        const updatedProduct = state.products.concat(product);
        calculatorTotal(updatedProduct);
        dispatch({
            type: 'ADD_TO_CART',
            playLoad: {
                products: updatedProduct
            }
        });
    };
    const removeFromCart = (product) => {
        const updatedProduct = state.products.filter((p)=> p.id !== product.id);
        calculatorTotal(updatedProduct);
        dispatch({
            type: 'REMOVE_FROM_CART',
            playLoad: {
                products: updatedProduct
            }
        });
    };
    const calculatorTotal = (products) =>{
        let total = 0;
        products.forEach(pro => {
            total += pro.price;
        });
        dispatch({
            type: 'CALCULATOR_TOTAL_PRICE',
            playLoad: total
        });  
        
    }
    const values = {
        products: state.products,
        total: state.total,
        addToCart,
        removeFromCart
    };
    return(
    <shopContext.Provider value={values}>
        {children}
    </shopContext.Provider>)
};

const useShop = () => {
    const context = useContext(shopContext);
    if (context === undefined) {
        throw new Error("context must be used inside shopContext");
    }
    return context;
};

export default useShop;