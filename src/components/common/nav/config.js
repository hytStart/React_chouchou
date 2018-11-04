const menuConfig = {
    menu: [
        {
            path: '/home/nav1',
            title: '首页',
            icon: 'mobile',
            component: 'nav1',
        },
        {
            path: '/home/nav2',
            title: 'nav2',
            icon: 'mobile',
            component: 'nav2',
            subs: [
                {
                    path: '/home/nav2/axious',
                    title: 'axious',
                    icon: 'mobile',
                    component: 'axious',
                },
                {
                    path: '/home/nav2/upload',
                    title: 'upload',
                    icon: 'mobile',
                    component: 'upload',
                },
            ]
        },
    ]
}
export default menuConfig