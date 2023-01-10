export const InitialState = {
    products : [],
    total : 0,
}

const ShopReducer = (state,action) =>{
    const {type,playLoad} = action;
    switch (type) {
        case 'ADD_TO_CART':
            return{
                ...state,
                products: playLoad.products,
            };
            case "REMOVE_FROM_CART":
                return{
                    ...state,
                    products: playLoad.products,
                };
            case "CALCULATOR_TOTAL_PRICE":
                return{
                    ...state,
                    total: playLoad,
                };
        default:
            throw new Error('unknown reducer')
    }
}
export default ShopReducer;