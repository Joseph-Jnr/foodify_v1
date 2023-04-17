import foodImg1 from '../../assets/food1.png'
import foodImg2 from '../../assets/food2.png'
import foodImg3 from '../../assets/food3.jpg'
import foodImg4 from '../../assets/food4.jpg'
import foodImg5 from '../../assets/cta.jpg'
import foodImg6 from '../../assets/food5.jpg'

// Axios API
const fetchProduct = async () => {
  const response = await axios.get('endpoint').catch((err) => {
    console.log('Err: ', err)
  })
  return response
}

export const foodList = [
  {
    id: '1',
    image: foodImg1,
    title: 'Salad with chicken',
    category: 'Italian',
    price: 3500,
    delivery: 'Free Delivery',
  },
  {
    id: '2',
    image: foodImg2,
    title: 'Amala and Ewedu',
    category: 'African food',
    price: 1000,
    delivery: '500 FCFA',
  },
  {
    id: '3',
    image: foodImg3,
    title: 'Jollof rice',
    category: 'African food',
    price: 2000,
    delivery: 'Free Delivery',
  },
  {
    id: '4',
    image: foodImg4,
    title: 'Cheese Burger',
    category: 'Burger',
    price: 1500,
    delivery: 'Free Delivery',
  },
  {
    id: '5',
    image: foodImg5,
    title: 'Chicken wings',
    category: 'Chicken',
    price: 6500,
    delivery: '500 FCFA',
  },
  {
    id: '6',
    image: foodImg6,
    title: 'Beef Burger',
    category: 'Burger',
    price: 3000,
    delivery: '500 FCFA',
  },
]
