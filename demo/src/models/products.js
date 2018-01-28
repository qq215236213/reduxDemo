
export default {
  namespace:'products',
  state:[
    {name:'dva',id:1},
    {name:'antd',id:2}
  ],
  reducers:{
    delete(state,{payload:id}){
      return state.filter(item => item.id !== id);
    },
    add(state,text){
      console.log(text)
      let id = state.length;
      id ++;
      return [...state,{id:id,name:text.payload}];
    }
  }
}
