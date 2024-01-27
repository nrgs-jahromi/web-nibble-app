type UserItem = {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  fav_restaurant: number[];
  fav_foods: number[];
  picture: string;
};

type FeatureT = {
  id: number;
  name: string;
};

type RestaurantT = {
  id: number;
  name: string;
  background_pic: string;
  icon: string;
  description: string;
  address: string;
  category: string;
  rate: string;
  delivery_fee: string;
  arrival_time: number;
  open_time: string;
  dine_in: boolean;
  city: string;
  price_rating: number;
  features: FeatureT[];
};

type FoodT = {
  id: number;
  name: string;
  category?: string;
  rate?: string;
  prepare_time?: number;
  price?: string;
  picture?: file;
  restaurant?: number;
};

type OrderItemT = {
  id: number;
  food: FoodT[];
  quantity: number;
};

type CardT = {
  id: number;
  card_number: string;
  user: number;
};

type OrderT = {
  id: number;
  order_items: OrderItemT[];
  order_number: string;
  review: string;
  total_price: string;
  registration_time: string;
  delivery_time: string;
  status: string;
  time_prepare_foods: number;
  user: number;
  credit_card: CardT[];
  restaurant: number;
  delivery_address: number;
};

type AddressT = {
  id: number;
  street: string;
  city: string;
  state: string;
  zip_code: string;
  category: string;
  user: number;
};

type CartItemT = {
  quantity: number;
  price: number;
  food: FoodT;
  total_item_price: number;
};

type CartT = {
  items: CartItemT[];
  total_cart_price: number;
  discount_price: number;
  total_price_after_discount: number;
};

type FileT = {
  id: number;
  file: string;
  file_type: string;
};
