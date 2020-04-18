import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    //Defining the route of the app. This is the first page to be accessed when turning on the app
    { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule) }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
