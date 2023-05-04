import { TbMapPins, TbTruckDelivery } from 'react-icons/tb'
import { FiHome } from 'react-icons/fi'

const serviceList = [
  {
    id: 1,
    icon: <FiHome />,
    title: 'Doorstep Delivery',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae similique quae illo assumenda aperiam nulla aspernatur quod ipsam rerum! Esse asperiores atque tempora, suscipit voluptatibus in labore voluptas molestias eos.',
  },
  {
    id: 2,
    icon: <TbMapPins />,
    title: 'Meal Tracking',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae similique quae illo assumenda aperiam nulla aspernatur quod ipsam rerum! Esse asperiores atque tempora, suscipit voluptatibus in labore voluptas molestias eos.',
  },
  {
    id: 3,
    icon: <TbTruckDelivery />,
    title: 'Easy Pickup',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae similique quae illo assumenda aperiam nulla aspernatur quod ipsam rerum! Esse asperiores atque tempora, suscipit voluptatibus in labore voluptas molestias eos.',
  },
]

export default serviceList
