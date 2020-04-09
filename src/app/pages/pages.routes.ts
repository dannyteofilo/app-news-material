import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsApiComponent } from './news-api/news-api.component';

const pagesRoutes: Routes = [
    {
        path: '', component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'newsapi', component: NewsApiComponent }
        ]

    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
