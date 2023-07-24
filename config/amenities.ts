import Discount from '@/components/icons/Discount.vue'
import Wifi from '@/components/icons/Wifi.vue'
import Return from '@/components/icons/Return.vue'
import Gift from '@/components/icons/Gift.vue'
import GiftReward from '@/components/icons/GiftReward.vue'
import ShoppingBag from '@/components/icons/ShoppingBag.vue'
import CarIcon from '@/components/icons/CarIcon.vue'
import PaidParking from '@/components/icons/PaidParking.vue'
import Warranty from '@/components/icons/Warranty.vue'
import Delivery from '@/components/icons/Delivery.vue'
import MoneyIcon from '@/components/icons/MoneyIcon.vue'

import type { Amenity } from '~/types'

export const amenities: Amenity[] = [
  {
    name: 'Discounts',
    description: 'Offer special promotions or discounts to customers.',
    iconComponent: Discount,
  },
  {
    name: 'M-PESA payment',
    description: 'Allow customers to leave reviews and ratings of your business.',
    iconComponent: MoneyIcon,
  },
  {
    name: 'Free Wi-Fi',
    description: 'Provide free Wi-Fi access to customers while they shop.',
    iconComponent: Wifi,
  },
  {
    name: 'Returns',
    description: 'Allow customers to return products for a refund or exchange.',
    iconComponent: Return,
  },
  {
    name: 'Gift Cards',
    description: 'Offer gift cards for customers to purchase and use at your business.',
    iconComponent: Gift,
  },
  {
    name: 'Rewards Programs',
    description: 'Provide loyalty or rewards programs to incentivize repeat business.',
    iconComponent: GiftReward,
  },
  {
    name: 'Shopping Bags',
    description: 'Provide shopping bags for customers to carry their purchases.',
    iconComponent: ShoppingBag,
  },
  {
    name: 'Online Ordering',
    description: 'Allow customers to order products online for pickup or delivery.',
    iconComponent: Discount,
  },
  {
    name: 'Free Parking',
    description: 'Availability and description of parking options for customers',
    iconComponent: CarIcon,
  },
  {
    name: 'Paid Parking',
    description: 'Availability and description of parking options for customers',
    iconComponent: PaidParking,
  },
  {
    name: 'Product warranties',
    description: 'Information about warranties or guarantees for products',
    iconComponent: Warranty,
  },
  {
    name: 'Deliveries',
    description: 'Information about warranties or guarantees for products',
    iconComponent: Delivery,
  },
]
