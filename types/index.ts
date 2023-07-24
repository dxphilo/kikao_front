export interface category {
  id: number
  name: string
  description: string
  icon: string
  iconComponent: any
  image: string
}
export interface CoffeeHouse {
  name: string
  handle: string
  reviews: number
  reviewScore: number
  location: string
  opening: boolean
  images: string[]
  businessDescription: string
  category: string
  creationDate: string
  verified: boolean
  telephoneNumber: string

}

export interface BusinessType {
  index: number
  name: string
  type: 'in-house'
  iconComponent: any
}

export interface Amenity {
  name: string
  description: string
  iconComponent: any
}

export interface reaction {
  id: number
  name: string
  iconComponent: any
  description: string
}

export interface Review {
  id: number
  name: string
  image: string
  rating: number
  createdAt: string
  text: string
}

export interface Article {
  _path: string
  _dir: string
  _draft: boolean
  _partial: boolean
  _locale: string
  _empty: boolean
  title: string
  description: string
  excerpt: string
  subtitle: string
  alt: string
  author: string
  category: string
  imgurl: string
  tags: string[]
  createdAt: string
  attribution: string
  body: {
    type: string
    children: any[]
    toc: {
      title: string
      searchDepth: number
      depth: number
      links: any[]
    }
  }
  _type: string
  _id: string
  _source: string
  _file: string
  _extension: string
}

export interface User {
  name: string
  email: string
  image: string
}

export interface UserToken {
  user: User
  expires: string
}

export interface RootState {
  showAddPopup: boolean
  user: UserToken
}

export interface Person {
  name: string
  twitter: string
  avatar: string
  github?: string
  website?: string
  facebook?: string
  role: string
}
export interface Reviewer {
  name: String
  rating: string
  createdAt: string
  review: string
  avatar: string
}

export interface UserObject {
  user: {
    name: string
    email: string
    image: string
  }
  expires: string
}
