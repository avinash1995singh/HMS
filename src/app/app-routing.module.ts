import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
{path:"",redirectTo:"pages",pathMatch:'full'},
{ path: 'pages/profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
