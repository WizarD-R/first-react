export const MODELS = [
    {
        name: 'Платья',
        id: 'dress',
        price: 'от 4500 руб.',
        types: {
            model_1: '4 590 руб',
            model_2: '7 590 руб',
            model_3: '5 590 руб',
        },
    },
    {
        name: 'Жакет',
        id: 'jacket',
        price: 'от 3000 руб.',
        types: {
            model_1: '4 200 руб',
            model_2: '4 200 руб',
        },
    },
    {
        name: 'Пальто',
        id: 'coat',
        price: 'от 9000 руб.',
        types: {
            model_1: '12 300 руб',
            model_2: '10 100 руб',
        },
    },
    {
        name: 'Брюки',
        id: 'pants',
        price: 'от 3000 руб.',
        types: {
            model_1: '5 400 руб',
            model_2: '4 300 руб',
            model_3: '3 200 руб',
        },
    },
    {
        name: 'Рубашки',
        id: 'shirt',
        price: 'от 2500 руб.',
        types: {
            model_1: '3 500 руб',
            model_2: '2 990 руб',
            model_3: '3 200 руб',
        },
    },
];

export const COLORS = {
    color_1: {
        name: 'цвет 1',
        color: '#0023ff',
    },
    color_2: {
        name: 'цвет 2',
        color: '#363232',
    },
    color_3: {
        name: 'цвет 3',
        color: '#142536',
    },
    color_4: {
        name: 'цвет 4',
        color: '#428846',
    },
};

export const STATUSES = {
    BACKLOG: 'В ожидании',
    DECLINE: 'Отказан',
    ACCEPT: 'Принят',
    IN_PROGRESS: 'В работе',
    FITTING_WAIT: 'Ожидается примерка',
    READY: 'Ждет клиента',
    DONE: 'Завершен',
};
