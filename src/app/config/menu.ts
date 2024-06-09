export var ConfigMenu = [
    {
        label: 'Planning',
        icon: 'pi-chevron-down',
        expanded: true,
        items: [
            { label: 'dashboard', icon: 'pi-home', routerLink: ['/dashboard'] },
            { label: 'sprint', icon: 'pi-home', routerLink: ['/sprint'] },
            { label: 'backlog', icon: 'pi-home', routerLink: ['/backlog'] },
            { label: 'timeline', icon: 'pi-home', routerLink: ['/timeline'] },
            { label: 'board', icon: 'pi-home', routerLink: ['/board'] },
            { label: 'list', icon: 'pi-home', routerLink: ['/list'] },
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