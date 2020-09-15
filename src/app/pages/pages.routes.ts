import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsApiComponent } from './news-api/news-api.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import { EverythingComponent } from './everything/everything.component';

const pagesRoutes: Routes = [
    {
        path: '', component: PagesComponent,
        children: [
            { path: 'headlines', component: TopHeadlinesComponent },
            { path: 'everything', component: EverythingComponent },
            { path: 'country', component: NewsApiComponent }
        ]

    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
