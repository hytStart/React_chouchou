const menuConfig = {
    menu: [
        {
            path: '/home/nav1',
            title: '首页',
            icon: 'mobile',
            component: 'nav1',
        },
        {
            path: '/home/ui',
            title: 'UI',
            icon: 'mobile',
            component: 'ui',
            subs: [
                {
                    path: '/home/ui/drag',
                    title: '拖拽',
                    icon: 'colum-height',
                    component: 'drag',
                },
                {
                    path: '/home/ui/recharts',
                    title: '富文本',
                    icon: 'font-colors',
                    component: 'recharts',
                },
                {
                    path: '/home/ui/picture',
                    title: '画廊',
                    icon: 'picture',
                    component: 'picture',
                },
                {
                    path: '/home/ui/recharts',
                    title: '地图',
                    icon: 'compass',
                    component: 'recharts',
                },
                {
                    path: '/home/ui/recharts',
                    title: '轮播图',
                    icon: 'pic-center',
                    component: 'recharts',
                },
            ]
        },  
        {
            path: '/home/chart',
            title: '图',
            icon: 'mobile',
            component: 'chart',
            subs: [
                {
                    path: '/home/chart/echarts',
                    title: 'echarts',
                    icon: 'line-chart',
                    component: 'echarts',
                },
                {
                    path: '/home/chart/highcharts',
                    title: 'highcharts',
                    icon: 'area-chart',
                    component: 'highcharts',
                },
            ]
        },
        {
            path: '/home/table',
            title: '表',
            icon: 'mobile',
            component: 'table',
            subs: [
                {
                    path: '/home/table/form',
                    title: '表单',
                    icon: 'form',
                    component: 'form',
                },
                {
                    path: '/home/table/list',
                    title: '表格',
                    icon: 'ordered-list',
                    component: 'list',
                },
            ]
        },
        {
            path: '/home/canvas',
            title: 'canvas',
            icon: 'rocket',
            component: 'canvas',
        },
        {
            path: '/home/redux',
            title: 'redux',
            icon: 'fork',
            component: 'redux',
        },
    ]
}
export default menuConfig