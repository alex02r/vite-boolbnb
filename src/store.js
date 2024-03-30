import { reactive } from 'vue';

export const store = reactive({
    baseUrl: 'http://127.0.0.1:8000',

    menu: [
        {
            name: 'home',
            label: 'Home'
        },
        {
            name: 'search-apartments',
            label: 'Cerca'
        },
    ],
    list_services: [
        {
            name: 'WiFi',
            id: 1
        },
        {
            name: 'Posto Macchina',
            id: 2
        },
        {
            name: 'Piscina',
            id: 3
        },
        {
            name: 'Portineria',
            id: 4
        },
        {
            name: 'Sauna',
            id: 5
        },
        {
            name: 'Vista Mare',
            id: 6
        },
        {
            name: 'Tv',
            id: 7
        },
        {
            name: 'Cucina',
            id: 8
        },
        {
            name: 'Lavatrice',
            id: 9
        }
    ],
});
