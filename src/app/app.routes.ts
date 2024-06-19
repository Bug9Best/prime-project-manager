import { Routes } from '@angular/router';
import { AppLayoutComponent } from './modules/app-layout/app-layout.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

export const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'sprint', loadChildren: () => import('./modules/sprint/sprint.module').then(m => m.SprintModule) },
            { path: 'backlog', loadChildren: () => import('./modules/backlog/backlog.module').then(m => m.BacklogModule) },
            { path: 'timeline', loadChildren: () => import('./modules/timeline/timeline.module').then(m => m.TimelineModule) },
            { path: 'board', loadChildren: () => import('./modules/board/board.module').then(m => m.BoardModule) },
            { path: 'list', loadChildren: () => import('./modules/list/list.module').then(m => m.ListModule) },
            { path: 'project-member', loadChildren: () => import('./modules/project-member/project-member.module').then(m => m.ProjectMemberModule) },
            { path: 'project-setting', loadChildren: () => import('./modules/project-setting/project-setting.module').then(m => m.ProjectSettingModule) },
        ]
    },
    { path: 'project-dashboard', loadChildren: () => import('./modules/project-dashboard/project-dashboard.module').then(m => m.ProjectDashboardModule)},
    { path: 'project-create', loadChildren: () => import('./modules/project-create/project-create.module').then(m => m.ProjectCreateModule)},
    { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
    { path: 'landing', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) },
    { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
    { path: 'notfound', component: NotfoundComponent },
    { path: '**', redirectTo: '/notfound' },
];
