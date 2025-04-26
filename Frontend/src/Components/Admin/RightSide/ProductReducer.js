let productReducer=(state,action)=>{
    if(action.type == "delete"){
        console.log("delete",state)
    }
}
export default productReducer