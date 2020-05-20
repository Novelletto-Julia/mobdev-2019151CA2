import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'welcome',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../welcome/welcome.module').then(m => m.WelcomePageModule)
                    },
                ]
            },
            {
                path: 'characters',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../characters/characters.module').then(m => m.CharactersPageModule)
                    },
                    {
                        path: ':id',
                        loadChildren: () => import('../characters-details/characters-details.module').then(m => m.CharactersDetailsPageModule)
                    }
                ]
            },
            {
                path: 'episodes',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../episodes/episodes.module').then(m => m.EpisodesPageModule)
                    },
                    {
                        path: ':id',
                        loadChildren: () => import('../episodes-details/episodes-details.module').then(m => m.EpisodesDetailsPageModule)
                    }
                ]
            },
            {
                path: 'quotes',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../quotes/quotes.module').then(m => m.QuotesPageModule)
                    },
                    {
                        path: ':id',
                        loadChildren: () => import('../quotes-details/quotes-details.module').then(m => m.QuotesDetailsPageModule)
                    }
                ]
            },
            {
                path: 'deaths',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../deaths/deaths.module').then(m => m.DeathsPageModule)
                    }
                ]
            },
            {
                path: 'camera',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../camera/camera.module').then(m => m.CameraPageModule)
                    }
                ]
            }
        ]
    },


    {
        path: '',
        redirectTo: '/tabs/welcome',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule { }
