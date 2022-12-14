import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initAction } from './actions/action';
import { changeUsername } from './actions/action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  implements OnInit{
  title = 'test-GUP';

  public user = {} as any;

  constructor(private store:Store){}

  ngOnInit() :void{
    this.store.dispatch(initAction());
    /**methode qui est partie integrante du store qui nous permet d'acceder aux element du store */
    this.store.select((state:any) => state.rootReducer.user).subscribe(response=>{
      console.log("Selecteur :", response);
    /**Procesus de passage de donnée de mon store vers une template */
      this.user=response;
    })
  }

  public changeUsername():void{
    this.store.dispatch(changeUsername({ username:`Epsilon ${Math.random()}`}));
  }
}
