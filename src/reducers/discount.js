const loadState = () => {
    try {
        const serializedState = localStorage.getItem("discount");
        if(serializedState===null){
            return undefined;
        }
        return serializedState==="true";
    }catch(err){
        return undefined;
    }
}
console.log(loadState());
let initialState = false;
if(loadState()){
    initialState = true;
};

const discount = (state=initialState, action) =>{
    switch (action.type) {
        case "APPLY_DISCOUNT": 
            return true;
        case "REMOVE_DISCOUNT":
            return false;
        default:
            return state;
    }
}

export default discount;