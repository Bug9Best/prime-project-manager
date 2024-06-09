export var ConfigMenu = [
    {
        label: 'Planning',
        icon: 'pi-chevron-down',
        expanded: true,
        items: [
            { label: 'dashboard', icon: 'pi-th-large', routerLink: ['/dashboard'] },
            { label: 'sprint', icon: 'pi-spinner', routerLink: ['/sprint'] },
            { label: 'backlog', icon: 'pi-align-left', routerLink: ['/backlog'] },
            { label: 'timeline', icon: 'pi-calendar-clock', routerLink: ['/timeline'] },
            { label: 'board', icon: 'pi-clipboard', routerLink: ['/board'] },
            { label: 'list', icon: 'pi-list-check', routerLink: ['/list'] },
        ]
    },
    {
        label: 'Config',
        icon: 'pi-chevron-down',
        expanded: true,
        items: [
            { label: 'project-setting', icon: 'pi-home', routerLink: ['/project-setting'] },
        ]
    },
]