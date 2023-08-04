import OpenMarket from '@/components/icons/OpenMarket.vue'
import ShoppingCart from '@/components/icons/ShoppingCart.vue'
import RetailIcon from '@/components/icons/RetailIcon.vue'
import OnlineStore from '@/components/icons/OnlineStore.vue'
import FoodTruck from '@/components/icons/FoodTruck.vue'
import HomeBusiness from '@/components/icons/HomeBusiness.vue'
import Office from '@/components/icons/Office.vue'
import Warehouse from '@/components/icons/Warehouse.vue'
import Service from '@/components/icons/ServiceIcon.vue'

import type { BusinessType } from '~/types'

export const businessTypes: BusinessType[] = [
  { index: 0, name: 'Open-air markets', type: 'in-house', iconComponent: OpenMarket },
  { index: 1, name: 'Indoor shopping malls', type: 'in-house', iconComponent: ShoppingCart },
  { index: 2, name: 'Retail storefronts', type: 'in-house', iconComponent: RetailIcon },
  { index: 3, name: 'Online stores/websites', type: 'in-house', iconComponent: OnlineStore },
  { index: 4, name: 'Food trucks', type: 'in-house', iconComponent: FoodTruck },
  { index: 5, name: 'Home-based business', type: 'in-house', iconComponent: HomeBusiness },
  { index: 6, name: 'Office buildings', type: 'in-house', iconComponent: Office },
  { index: 7, name: 'Industrial warehouses', type: 'in-house', iconComponent: Warehouse },
  { index: 8, name: 'Service businesses', type: 'in-house', iconComponent: Service },
]
