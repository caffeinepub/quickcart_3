import React from 'react';
import {
  createRouter,
  createRoute,
  createRootRoute,
  RouterProvider,
  Outlet,
  redirect,
} from '@tanstack/react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AllCategories from './pages/AllCategories';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
import SearchResults from './pages/SearchResults';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import OrderTracking from './pages/OrderTracking';
import OrderHistory from './pages/OrderHistory';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import DealsOffers from './pages/DealsOffers';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RefundReturnPolicy from './pages/RefundReturnPolicy';
import DeliveryInformation from './pages/DeliveryInformation';
import StoreLocator from './pages/StoreLocator';
import Careers from './pages/Careers';
import Wishlist from './pages/Wishlist';

// Root route with Layout wrapper
const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Home });
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about', component: AboutUs });
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: '/contact', component: ContactUs });
const allCategoriesRoute = createRoute({ getParentRoute: () => rootRoute, path: '/all-categories', component: AllCategories });

// Category routes
const fruitsVegRoute = createRoute({ getParentRoute: () => rootRoute, path: '/fruits-vegetables', component: () => <CategoryPage category="fruits-vegetables" title="Fruits & Vegetables" emoji="🥦" color="oklch(0.93 0.08 145)" /> });
const dairyEggsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/dairy-eggs', component: () => <CategoryPage category="dairy-eggs" title="Dairy & Eggs" emoji="🥛" color="oklch(0.95 0.04 200)" /> });
const bakeryRoute = createRoute({ getParentRoute: () => rootRoute, path: '/bakery-breads', component: () => <CategoryPage category="bakery-breads" title="Bakery & Breads" emoji="🍞" color="oklch(0.95 0.06 80)" /> });
const meatRoute = createRoute({ getParentRoute: () => rootRoute, path: '/meat-seafood', component: () => <CategoryPage category="meat-seafood" title="Meat & Seafood" emoji="🍗" color="oklch(0.95 0.05 30)" /> });
const beveragesRoute = createRoute({ getParentRoute: () => rootRoute, path: '/beverages', component: () => <CategoryPage category="beverages" title="Beverages" emoji="🥤" color="oklch(0.93 0.06 200)" /> });
const snacksRoute = createRoute({ getParentRoute: () => rootRoute, path: '/snacks-munchies', component: () => <CategoryPage category="snacks-munchies" title="Snacks & Munchies" emoji="🍿" color="oklch(0.95 0.06 55)" /> });
const breakfastRoute = createRoute({ getParentRoute: () => rootRoute, path: '/breakfast-cereals', component: () => <CategoryPage category="breakfast-cereals" title="Breakfast & Cereals" emoji="🥣" color="oklch(0.95 0.05 80)" /> });
const organicRoute = createRoute({ getParentRoute: () => rootRoute, path: '/organic-products', component: () => <CategoryPage category="organic" title="Organic Products" emoji="🌿" color="oklch(0.93 0.07 145)" /> });
const frozenRoute = createRoute({ getParentRoute: () => rootRoute, path: '/frozen-foods', component: () => <CategoryPage category="frozen-foods" title="Frozen Foods" emoji="❄️" color="oklch(0.93 0.04 220)" /> });
const personalCareRoute = createRoute({ getParentRoute: () => rootRoute, path: '/personal-care', component: () => <CategoryPage category="personal-care" title="Personal Care" emoji="🧴" color="oklch(0.95 0.04 300)" /> });
const householdRoute = createRoute({ getParentRoute: () => rootRoute, path: '/household-essentials', component: () => <CategoryPage category="household" title="Household Essentials" emoji="🏠" color="oklch(0.95 0.03 200)" /> });
const babyCareRoute = createRoute({ getParentRoute: () => rootRoute, path: '/baby-care', component: () => <CategoryPage category="baby-care" title="Baby Care" emoji="👶" color="oklch(0.95 0.04 300)" /> });
const petCareRoute = createRoute({ getParentRoute: () => rootRoute, path: '/pet-care', component: () => <CategoryPage category="pet-care" title="Pet Care" emoji="🐾" color="oklch(0.95 0.05 55)" /> });

// Product & Search
const productDetailRoute = createRoute({ getParentRoute: () => rootRoute, path: '/product/$productId', component: ProductDetail });
const searchRoute = createRoute({ getParentRoute: () => rootRoute, path: '/search', component: SearchResults, validateSearch: (search: Record<string, unknown>) => ({ q: (search.q as string) || '' }) });

// Cart & Checkout
const cartRoute = createRoute({ getParentRoute: () => rootRoute, path: '/cart', component: Cart });
const checkoutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/checkout', component: Checkout });
const orderConfirmationRoute = createRoute({ getParentRoute: () => rootRoute, path: '/order-confirmation', component: OrderConfirmation });
const orderTrackingRoute = createRoute({ getParentRoute: () => rootRoute, path: '/order-tracking', component: OrderTracking });
const orderHistoryRoute = createRoute({ getParentRoute: () => rootRoute, path: '/order-history', component: OrderHistory });

// User
const userProfileRoute = createRoute({ getParentRoute: () => rootRoute, path: '/profile', component: UserProfile });
const loginRoute = createRoute({ getParentRoute: () => rootRoute, path: '/login', component: Login });
const registerRoute = createRoute({ getParentRoute: () => rootRoute, path: '/register', component: Register });
const forgotPasswordRoute = createRoute({ getParentRoute: () => rootRoute, path: '/forgot-password', component: ForgotPassword });
const wishlistRoute = createRoute({ getParentRoute: () => rootRoute, path: '/wishlist', component: Wishlist });

// Content
const dealsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/deals-offers', component: DealsOffers });
const blogRoute = createRoute({ getParentRoute: () => rootRoute, path: '/blog', component: Blog });
const blogPostRoute = createRoute({ getParentRoute: () => rootRoute, path: '/blog/$postId', component: BlogPost });
const faqRoute = createRoute({ getParentRoute: () => rootRoute, path: '/faq', component: FAQ });

// Legal & Info
const privacyRoute = createRoute({ getParentRoute: () => rootRoute, path: '/privacy-policy', component: PrivacyPolicy });
const termsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/terms-conditions', component: TermsConditions });
const refundRoute = createRoute({ getParentRoute: () => rootRoute, path: '/refund-return-policy', component: RefundReturnPolicy });
const deliveryInfoRoute = createRoute({ getParentRoute: () => rootRoute, path: '/delivery-information', component: DeliveryInformation });
const storeLocatorRoute = createRoute({ getParentRoute: () => rootRoute, path: '/store-locator', component: StoreLocator });
const careersRoute = createRoute({ getParentRoute: () => rootRoute, path: '/careers', component: Careers });

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  contactRoute,
  allCategoriesRoute,
  fruitsVegRoute,
  dairyEggsRoute,
  bakeryRoute,
  meatRoute,
  beveragesRoute,
  snacksRoute,
  breakfastRoute,
  organicRoute,
  frozenRoute,
  personalCareRoute,
  householdRoute,
  babyCareRoute,
  petCareRoute,
  productDetailRoute,
  searchRoute,
  cartRoute,
  checkoutRoute,
  orderConfirmationRoute,
  orderTrackingRoute,
  orderHistoryRoute,
  userProfileRoute,
  loginRoute,
  registerRoute,
  forgotPasswordRoute,
  wishlistRoute,
  dealsRoute,
  blogRoute,
  blogPostRoute,
  faqRoute,
  privacyRoute,
  termsRoute,
  refundRoute,
  deliveryInfoRoute,
  storeLocatorRoute,
  careersRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
