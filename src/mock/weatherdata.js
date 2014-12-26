Mock.mock(/(weatherlist)+/, {
    'title': 'weatherlist',
    'name': '@name',
    'location': 'china',
    'cities|5-10': {
        '100000': '北京市',
        '200000': '上海市',
        '300000': '广州市',
        '400000': '重庆市',
        '500000': '杭州市',
        '600001': '宁波市',
        '600002': '苏州市',
        '600003': '南京市'
    },
    'weather|6': 10,
    'infos|1-2': [{
        '北京': 1,
        'isdirectly': true,
        'year': 2000
    }, {
        '上海': 1,
        'isdirectly': true,
        'year': 200
    }],
    'number|10': '1',
    'number2|3-6': '25'
});
