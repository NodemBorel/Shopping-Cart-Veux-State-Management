import { createStore } from 'vuex';

const store = createStore({
    state(){
        return{
            products:[
                {id: 1, name: 'Special Item', regularPrice: '$20.00', salePrice: '$18.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'},
                {id: 2, name: 'Special Item', regularPrice: '$20.00', salePrice: '$18.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'},
                {id: 3, name: 'Special Item', regularPrice: '$20.00', salePrice: '$18.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'},
                {id: 4, name: 'Special Item', regularPrice: '$20.00', salePrice: '$18.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'},
                {id: 5, name: 'Special Item', regularPrice: '$20.00', salePrice: '$18.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'},
                {id: 6, name: 'Special Item', regularPrice: '$20.00', salePrice: '$18.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'},
                {id: 7, name: 'Special Item', regularPrice: '$20.00', salePrice: '$18.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'},
                {id: 8, name: 'Special Item', regularPrice: '$20.00', salePrice: '$18.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'},
                {id: 9, name: 'Special Item', regularPrice: '$20.00', salePrice: '$18.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'},
                {id: 10, name: 'Special Item', regularPrice: '$20.00', salePrice: '$18.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'},
                {id: 11, name: 'Special Item', regularPrice: '$20.00', salePrice: '$18.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'},
                {id: 12, name: 'Special Item', regularPrice: '$20.00', salePrice: '$18.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'},
                {id: 13, name: 'Special Item', regularPrice: '$20.00', salePrice: '$18.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'},
                {id: 14, name: 'Special Item', regularPrice: '$20.00', salePrice: '$18.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'},
                {id: 15, name: 'Special Item', regularPrice: '$20.00', salePrice: '$18.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'},
                {id: 16, name: 'Special Item', regularPrice: '$20.00', salePrice: '$18.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'},
                {id: 17, name: 'Special Item', regularPrice: '$20.00', salePrice: '$18.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'},
                {id: 18, name: 'Special Item', regularPrice: '$20.00', salePrice: '$18.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'},
                {id: 19, name: 'Special Item', regularPrice: '$20.00', salePrice: '$18.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'},
                {id: 20, name: 'Special Item', regularPrice: '$20.00', salePrice: '$18.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'},
            ],

            CartItemCount: 0,
            CartItem: [],
        }      
    },
    mutations: {
        // your mutation methods go here
    },
    actions: {
        // your action methods go here
    },
    getters: {
        // your getter methods go here
    }
})

export default store;