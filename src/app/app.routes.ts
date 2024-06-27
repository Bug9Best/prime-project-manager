import { Routes } from '@angular/router';
import { AppLayoutComponent } from './pages/app-layout/app-layout.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

export const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'sprint', loadChildren: () => import('./pages/sprint/sprint.module').then(m => m.SprintModule) },
            { path: 'backlog', loadChildren: () => import('./pages/backlog/backlog.module').then(m => m.BacklogModule) },
            { path: 'timeline', loadChildren: () => import('./pages/timeline/timeline.module').then(m => m.TimelineModule) },
            { path: 'board', loadChildren: () => import('./pages/board/board.module').then(m => m.BoardModule) },
            { path: 'list', loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule) },
            { path: 'project-document', loadChildren: () => import('./pages/project-document/project-document.module').then(m => m.ProjectDocumentModule) },
            { path: 'project-member', loadChildren: () => import('./pages/project-member/project-member.module').then(m => m.ProjectMemberModule) },
            { path: 'project-setting', loadChildren: () => import('./pages/project-setting/project-setting.module').then(m => m.ProjectSettingModule) },
        ]
    },
    { path: 'project-dashboard', loadChildren: () => import('./pages/project-dashboard/project-dashboard.module').then(m => m.ProjectDashboardModule)},
    { path: 'project-create', loadChildren: () => import('./pages/project-create/project-create.module').then(m => m.ProjectCreateModule)},
    { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
    { path: 'landing', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
    { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    { path: 'notfound', component: NotfoundComponent },
    { path: '**', redirectTo: '/notfound' },
];
