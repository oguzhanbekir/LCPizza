const indicator = (state=[],action)=>{
    switch(action.type){
        case 'LOAD_HOME':
              return {...state, durum: 'dfh'};
        case 'LOAD_HOMEE':
                return {...state, durum: 'abc'};
          //  return [{durum:'true'}]
         
    }
    return state
}

export default indicator