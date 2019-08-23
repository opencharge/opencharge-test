const defaultData = [
    {
        date: '23 авг',
        time: '12:22',
        brandLogo: 'stolovaya',
        transactionName: ' ты покушал в STOLOVAYA',
        processing: false, //платеж в обработке
        qty: '234',
        currency: 'roubles',
        addMoney: false //если true, зачисление средств. если false, списание
    },
    {
        date: '17 янв',
        time: '17:36',
        brandLogo: 'mts',
        transactionName: 'пополнение счета MTS',
        processing: true,
        qty: '117',
        currency: 'roubles',
        addMoney: true
    },
    {
        date: '18 июн',
        time: '11:00',
        brandLogo: 'coffeeport',
        transactionName: 'кофе в COFFEEPORT',
        processing: false,
        qty: '1930',
        currency: 'roubles',
        addMoney: false
    },
    {
        date: '22 дек',
        time: '19:00',
        brandLogo: 'coffeeport',
        transactionName: 'COFFEEPORT',
        processing: false,
        qty: '12',
        currency: 'roubles',
        addMoney: false
    }
]

export default defaultData;