import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsApiComponent } from './news-api/news-api.component';

const pagesRoutes: Routes = [
    {
        path: '', component: PagesComponent,
        children: [
            { path: 'headlines', component: DashboardComponent },
            { path: 'everything', component: DashboardComponent },
            { path: 'sources', component: NewsApiComponent }
        ]

    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
