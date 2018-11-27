const loadState = () => {
    try {
        const serializedState = localStorage.getItem("cart");
        if(serializedState===null){
            return undefined;
        }
        return JSON.parse(serializedState);
    }catch(err){
        return undefined;
    }
}

let initialState = [];
if(loadState()){
    initialState = loadState();
};

// const initialState = [
//     //   {
//     //     product_id: "001",
//     //     size: "regular",
//     //     quantity: 1
//     //   },
//     //   {
//     //     product_id: "002",
//     //     size: "regular",
//     //     quantity: 1
//     //   }
//     ]

const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART": 
            for(let i=0; i<state.length; i++){
                if(state[i].product_id===action.product_id&&state[i].size===action.size){
                    return state.map(item=>item.product_id===action.product_id&&item.size===action.size? {
                                product_id: item.product_id,
                                size: item.size,
                                quantity: item.quantity+1
                            }:item);
                }
            }
            return [
                ...state,
                {
                    product_id: action.product_id,
                    size: action.size,
                    quantity: 1
                }
            ];
        case "DELETE_FROM_CART":
            for(let i=0; i<state.length; i++){
                if(state[i].product_id===action.product_id&&state[i].size===action.size){
                    if(state[i].quantity===1){
                        return state.filter(item=>item.product_id!==action.product_id||item.size!==action.size);
                    }else{
                        return state.map(item=>item.product_id===action.product_id&&item.size===action.size? {
                            product_id: item.product_id,
                            size: item.size,
                            quantity: item.quantity-1
                        }:item);
                    }
                }
            }
            break;
        case "CLEAR_CART":
            return [];
        default:
            return state;
    }
}

export default cart;