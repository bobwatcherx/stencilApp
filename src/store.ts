import {createStore} from "@stencil/store";

const {state,onChange} = createStore({
	klik:0,
	dblklik:0,
	nama:"jono"
	
})
onChange('klik',value=>{
	state.dblklik = value*2;
})
export default state;