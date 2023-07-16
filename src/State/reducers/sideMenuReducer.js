const sideMenuReducer=(state=false,action)=>{
    if(action.type==='hideSideMenu'){
        state=false;
        return state;
    }
    else if(action.type==='showSideMenu'){
        state=true;
        return state;
    }
    else{
        return state;
    }

}

export default sideMenuReducer;