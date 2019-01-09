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
                    path: '/home/ui/banner',
                    title: '轮播图',
                    icon: 'pic-center',
                    component: 'banner',
                },
                {
                    path: '/home/ui/swiper',
                    title: 'Swipper',
                    icon: 'pic-center',
                    component: 'swipper',
                },
                {
                    path: '/home/ui/action',
                    title: 'Action',
                    icon: 'pic-center',
                    component: 'action',
                },
                {
                    path: '/home/ui/flip',
                    title: 'Flip',
                    icon: 'pic-center',
                    component: 'flip',
                },
            ],
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
            ],
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
                {
                    path: '/home/table/upload',
                    title: '文件',
                    icon: 'to-top',
                    component: 'upload',
                },
            ],
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
        {
            path: '/home/other',
            title: '其他',
            icon: 'mobile',
            component: 'other',
            subs: [
                {
                    path: '/home/other/commonly',
                    title: '常用方法',
                    icon: 'radar-chart',
                    component: 'form',
                },
                {
                    path: '/home/other/RenderCallback',
                    title: 'RenderCallback组件',
                    icon: 'database',
                    component: 'zujian',
                },
                {
                    path: '/home/other/reactNew',
                    title: 'react新特性',
                    icon: 'database',
                    component: 'reactNew',
                },
            ],
        },
    ],
}
export default menuConfig
