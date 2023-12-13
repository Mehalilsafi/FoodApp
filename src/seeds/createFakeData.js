import { addProduct } from '@/app/(pages)/main/actions/createProduct';

const fakeData = [
    {
        name: 'Margherita',
        price: 10.99,
        imageUrl:
            'https://images.prismic.io/eataly-us/ed3fcec7-7994-426d-a5e4-a24be5a95afd_pizza-recipe-main.jpg?auto=compress,format',
    },
    {
        name: 'Pepperoni',
        price: 12.99,
        imageUrl:
            'https://sipbitego.com/wp-content/uploads/2021/08/Pepperoni-Pizza-Recipe-Sip-Bite-Go.jpg',
    },
    {
        name: 'Vegetarian',
        price: 11.99,
        imageUrl:
            'https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg',
    },
    {
        name: 'Hawaiian',
        price: 13.99,
        imageUrl:
            'https://www.jessicagavin.com/wp-content/uploads/2020/07/hawaiian-pizza-16-1200.jpg',
    },
    {
        name: 'Meat Lovers',
        price: 14.99,
        imageUrl:
            'https://gabrielspizzaharrisburg.com/wp-content/uploads/2020/07/meat-lovers.jpg',
    },
    // Add more pizza objects as needed
    {
        name: 'BBQ Chicken',
        price: 15.99,
        imageUrl:
            'https://www.budgetbytes.com/wp-content/uploads/2020/06/BBQ-Chicken-Pizza-one-slice.jpg',
    },
    {
        name: 'Supreme',
        price: 16.99,
        imageUrl:
            'https://pc.pizzahutnassau.com/wp-content/uploads/2021/11/sp-supreme.jpeg',
    },

    {
        name: 'Buffalo Chicken',
        price: 14.99,
        imageUrl:
            'https://thecozycook.com/wp-content/uploads/2023/08/Buffalo-Chicken-Pizza-f.jpg',
    },
];

export const generate = () =>
    fakeData.map(async (el) => {
        await addProduct({ ...el });
    });
