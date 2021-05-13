export default [
    {
        title: '西马 普货空运',
        priceType: 0,     // 0-kg 1-m³
        transportType: 0,    // 0-空运  1-海运
        region: 0,    // 0-西马  1-东马  2-新加坡
        index: 0,
        range: [[0.1, 3], [3.1, 9], [9]],
        price: [
            {
                companyList: ['Skynet', 'ABX'],
                per: [30, 24, 23]
            },
            {
                companyList: ['GDEX'],
                per: [31, 25, 24]
            }
        ],
        desc: ['免抛20kg，预计 3~7 工作日', '超长费：单边长超 150cm 收 200RMB 每单']
    },
    {
        title: '西马 敏感空运',
        priceType: 0,     // 0-kg 1-m³
        transportType: 0,    // 0-空运  1-海运
        region: 0,    // 0-西马  1-东马  2-新加坡
        index: 1,
        range: [[0.1, 3], [3.1, 9], [9]],
        price: [
            {
                companyList: ['Skynet', 'ABX'],
                per: [36, 29, 28]
            },
            {
                companyList: ['GDEX'],
                per: [37, 31, 30]
            }
        ],
        desc: ['免抛20kg，预计 4~7 工作日', '超长费：单边长超 150cm 收 200RMB 每单']
    },
    {
        title: '西马 海运小包',
        priceType: 0,     // 0-kg 1-m³
        transportType: 1,    // 0-空运  1-海运
        region: 0,    // 0-西马  1-东马  2-新加坡
        index: 2,
        range: [],
        price: [
            {
                companyList: ['Best'],
                per: [[{
                    price: 16,
                    weight: 1
                }, {
                    price: 8,
                    weight: 1
                }]]
            },
            {
                companyList: ['GDEX'],
                per: [[{
                    price: 18,
                    weight: 1
                }, {
                    price: 9,
                    weight: 1
                }]]
            }
        ],
        desc: ['全抛计费，预计 15~20 工作日']
    },
    {
        title: '西马 海运立方',
        priceType: 1,     // 0-kg 1-m³
        transportType: 1,    // 0-空运  1-海运
        region: 0,    // 0-西马  1-东马  2-新加坡
        index: 3,
        range: [[0.01, 0.9], [0.9]],
        price: [
            {
                companyList: ['海运立方'],
                per: [[{
                    price: 210,
                    weight: 0.3
                }, {
                    price: 68,
                    weight: 0.1
                }], 68]
            }
        ],
        desc: ['免抛20kg，预计 3~7 工作日', '超长费：单边长超 150cm 收 200RMB 每单']
    },
    {
        title: '东马 普货空运',
        priceType: 0,     // 0-kg 1-m³
        transportType: 0,    // 0-空运  1-海运
        region: 1,    // 0-西马  1-东马  2-新加坡
        index: 0,
        range: [[0.1, 4], [4.1, 10], [10]],
        price: [
            {
                companyList: ['ABX'],
                per: [46, 44, 43]
            }
        ],
        desc: ['免抛10kg，预计 7~9 工作日', '超长费：单边长超 150cm 收 200RMB 每单']
    },
    {
        title: '东马 敏感空运',
        priceType: 0,     // 0-kg 1-m³
        transportType: 0,    // 0-空运  1-海运
        region: 1,    // 0-西马  1-东马  2-新加坡
        index: 1,
        range: [[0.1, 4], [4.1, 10], [10]],
        price: [
            {
                companyList: ['ABX'],
                per: [48, 46, 45]
            }
        ],
        desc: ['免抛10kg，预计 7~9 工作日', '超长费：单边长超 150cm 收 200RMB 每单']
    },
    {
        title: '新加坡 海运立方',
        priceType: 1,     // 0-kg 1-m³
        transportType: 1,    // 0-空运  1-海运
        region: 2,    // 0-西马  1-东马  2-新加坡
        index: 0,
        range: [[0.01, 0.9], [0.91, 2.9], [2.9]],
        price: [
            {
                companyList: ['LEGION'],
                per: [[{
                    price: 600,
                    weight: 1
                }, {
                    price: 60,
                    weight: 0.1
                }], 60, 59]
            }
        ],
        desc: ['免抛10kg，预计 7~9 工作日', '超长费：单边长超 150cm 收 200RMB 每单']
    },
]