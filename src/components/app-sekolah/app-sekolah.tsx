import { Component,h,Prop} from '@stencil/core'
import {href} from 'stencil-router-v2'
@Component({
	tag: "app-sekolah"
})

export class AppSekolah {
@Prop() id:string;
render(){
	return(
	<div>hai {this.id} 
	<a {...href('/')}>
		ke jasuke </a>
		</div>)
}
}