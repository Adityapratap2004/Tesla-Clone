export const  showSideMenu=()=>{
    return (dispatch)=>{
        dispatch ({
            type:"showSideMenu",
            payload:true
        })

    }

}
export const hideSideMenu=()=>{
    return (dispatch)=>{
        dispatch ({
            type:"hideSideMenu",
            payload:false
        })
    }
}

