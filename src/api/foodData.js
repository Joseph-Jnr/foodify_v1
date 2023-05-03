import foodImg1 from '../assets/food1.png'
import foodImg2 from '../assets/food2.png'
import foodImg3 from '../assets/food3.jpg'
import foodImg4 from '../assets/food4.jpg'
import foodImg5 from '../assets/cta.jpg'
import foodImg6 from '../assets/food5.jpg'

import { v4 as uuidv4 } from 'uuid'
import slugify from 'react-slugify'

// Axios API
/* const fetchProduct = async () => {
  const response = await axios.get('endpoint').catch((err) => {
    console.log('Err: ', err)
  })
  return response
} */

export const foodList = [
  {
    id: 1,
    uuid: uuidv4(),
    image: foodImg1,
    title: 'Salad with chicken',
    category: 'Italian',
    price: 3500,
    delivery: 'Free Delivery',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },
  {
    id: 2,
    uuid: uuidv4(),
    image: foodImg2,
    title: 'Amala and Ewedu',
    category: 'African food',
    price: 1000,
    delivery: '500 FCFA',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },
  {
    id: 3,
    uuid: uuidv4(),
    image: foodImg3,
    title: 'Jollof rice',
    category: 'African food',
    price: 2000,
    delivery: 'Free Delivery',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },
  {
    id: 4,
    uuid: uuidv4(),
    image: foodImg4,
    title: 'Cheese Burger',
    category: 'Burger',
    price: 1500,
    delivery: 'Free Delivery',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },
  {
    id: 5,
    uuid: uuidv4(),
    image: foodImg5,
    title: 'Chicken wings',
    category: 'Chicken',
    price: 6500,
    delivery: '500 FCFA',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },
  {
    id: 6,
    uuid: uuidv4(),
    image: foodImg6,
    title: 'Beef Burger',
    category: 'Burger',
    price: 3000,
    delivery: '500 FCFA',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },
  {
    id: 7,
    uuid: uuidv4(),
    image:
      'https://tastyappetizers.com.ng/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-10-at-16.08.17-3.jpeg',
    title: 'Spring Roll',
    category: 'Small chops',
    price: 800,
    delivery: 'Free Delivery',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },
  {
    id: 8,
    uuid: uuidv4(),
    image:
      'https://panachegb.co.uk/wp-content/uploads/2020/10/DSC01713-scaled-1.jpg',
    title: 'Panache',
    category: 'Drinks',
    price: 1800,
    delivery: 'Free Delivery',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },
]
// loop through foodList array and add slug property to each object
foodList.map((food) => {
  //const slug = slugify(food.title, { prefix: id })     adding prefix
  const slug = slugify(food.title)
  food.slug = slug
  return food
})
