import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path:'',
    loadComponent:()=>import('./components/home/home.component').then(m=>m.HomeComponent)
  },
  {
    path:'ecommerce',
    children:[
      {
        path:'',
        loadComponent:() => import('./ecommerce/main/main.component').then(m=>m.MainComponent)
      },
      // {
      //   // { path: 'product/:id',  },
      //   path:'product/:id',
      //   loadComponent: () => import ('./ecommerce/product/product.component').then(m=>m.ProductComponent)
      // }
    ]
  },
  {
    path:'pokedex',
    children:[
      {
        path:'',
        // loadComponent:()=>import('./pokemon/main/main.component').then(m=>m.MainComponent)
        loadComponent:()=>import('./pokemon/pokedex/pokedex.component').then(m=>m.PokedexComponent)
      },
    ]
  }

];
