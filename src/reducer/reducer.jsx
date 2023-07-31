
const reducer = (state, action) => {
    switch (action.type) {
        case "loading":
            return {
                ...state,
                isLoading: true,
            };
        case "error":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case "data":
            const featuredProduct = action.payload.filter((currEle) => {
                return currEle.featured === true;
            });
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featuredProduct,
            };

        default:
            return state;
    }

};

export default reducer