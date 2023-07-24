import DrinkIcon from '@/components/icons/DrinkIcon.vue'
import FoodIcon from '@/components/icons/FoodIcon.vue'
import ShoppingIcon from '@/components/icons/ShoppingIcon.vue'
import AutoMobile from '@/components/icons/AutomobileIcon.vue'
import HouseWithGarden from '@/components/icons/HouseGarden.vue'
import Amusement from '@/components/icons/AmusementIcon.vue'
import LawIcon from '@/components/icons/LawIcon.vue'
import Makeup from '@/components/icons/Makeup.vue'
import Airbnb from '@/components/icons/Airbnb.vue'
import type { category } from '~/types'

export const categories: category[] = [
  {
    id: 1,
    name: 'Food & Dining',
    description: 'Restaurants, cafes, bakeries, and fast food establishments.',
    icon: 'food',
    iconComponent: FoodIcon,
    image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Nightlife & Bars',
    description: 'Bars, clubs, lounges, and music venues.',
    icon: 'nightlife',
    iconComponent: DrinkIcon,
    image: 'https://images.pexels.com/photos/3566120/pexels-photo-3566120.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 3,
    name: 'Shopping & Retail',
    description: 'Clothing stores, grocery stores, and specialty shops.',
    icon: 'shopping',
    iconComponent: ShoppingIcon,
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 4,
    name: 'Health & Beauty',
    description: 'Hair salons, nail salons, and spas.',
    icon: 'health',
    iconComponent: Makeup,
    image: 'https://images.pexels.com/photos/3985338/pexels-photo-3985338.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 5,
    name: 'Auto & Transport',
    description: 'Car dealerships, auto repair shops, and car rental agencies.',
    icon: 'automotive',
    iconComponent: AutoMobile,
    image: 'https://images.pexels.com/photos/4489766/pexels-photo-4489766.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 6,
    name: 'Home & Garden',
    description: 'Home decor stores, landscaping services, and home improvement stores.',
    icon: 'home',
    iconComponent: HouseWithGarden,
    image: 'https://images.pexels.com/photos/7061662/pexels-photo-7061662.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 7,
    name: 'Arts & Entertainment',
    description: 'Theaters, museums, and art galleries.',
    icon: 'arts',
    iconComponent: Amusement,
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 8,
    name: 'Professional Services',
    description: 'Lawyers, accountants, and financial advisors.',
    icon: 'professional',
    iconComponent: LawIcon,
    image: 'https://images.pexels.com/photos/4098152/pexels-photo-4098152.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 9,
    name: 'Travel & Accommodation',
    description: 'Hotels, airlines, and travel agencies.',
    icon: 'travel',
    iconComponent: Airbnb,
    image: 'https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
]
