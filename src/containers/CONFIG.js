const route = (endpoint) => {
    const development_route = 'http://localhost:3001/';
    const production_route = 'https://radiant-spire-52952.herokuapp.com/';
    return production_route+endpoint;
}

export const API = {
    getOrdersForDoctor: route('getOrdersForDoctor'),
    modifyOrder: route('modifyOrder'),
    getOrder: route('getOrder'),
    registerNewClient: route('registerNewClient'),
    getClient: route('getClient'),
    getDoctor: route('getDoctor'),
    getOrdersForClient: route('getOrdersForClient'),
    createNewOrder: route('createNewOrder')
}

