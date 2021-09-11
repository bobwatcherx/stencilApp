import { Component,h} from '@stencil/core';
import {Route,match,href} from 'stencil-router-v2';
import {Router} from '../router';	
@Component({
  tag: 'my-component',
})
export class MyComponent {
 

  render() {
    return (
	<div>
	
	<Router.Switch>
		<Route path="/">
		ini home nya
		<a {...href('/home/123')}>
	ke home sekolah</a>
		</Route>
		<Route path={match('/home/:id')}
		render={({id})=> <app-sekolah id={id}></app-sekolah>}
		>
		</Route>
		
	</Router.Switch>
</div>
	)
  }
}
