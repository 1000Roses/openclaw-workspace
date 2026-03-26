# 🍎 Fruit Shop E-Commerce - Frontend Plan

## 1. Pages Structure

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero banner, featured products, categories |
| Shop | `/shop` | Product listing with filters |
| Product Detail | `/product/:id` | Product info, add to cart |
| Cart | `/cart` | Cart items, quantity control |
| Checkout | `/checkout` | Shipping, payment form |
| Order Success | `/order/:id` | Order confirmation |
| Orders | `/orders` | Order history |
| Login | `/login` | User login |
| Register | `/register` | User registration |
| Admin Dashboard | `/admin` | Overview stats |
| Admin Products | `/admin/products` | CRUD products |
| Admin Orders | `/admin/orders` | Manage orders |

---

## 2. Routing Structure

```
/                           → HomePage
/shop                       → ShopPage (ProductListing)
/product/:id                → ProductDetailPage
/cart                       → CartPage
/checkout                   → CheckoutPage
/order/:id                  → OrderSuccessPage
/orders                     → OrdersPage (auth required)
/login                      → LoginPage
/register                   → RegisterPage
/admin                      → AdminDashboard
/admin/products             → AdminProductsPage
/admin/products/new         → AdminProductForm
/admin/products/:id/edit     → AdminProductForm
/admin/orders               → AdminOrdersPage
```

---

## 3. Component Hierarchy

```
App
├── Layout
│   ├── Header
│   │   ├── Logo
│   │   ├── Navigation
│   │   ├── SearchBar
│   │   └── CartIcon (with badge)
│   ├── MainContent
│   └── Footer
│
├── Pages
│   ├── HomePage
│   │   ├── HeroBanner
│   │   ├── CategoryCards
│   │   ├── FeaturedProducts
│   │   └── PromoSection
│   │
│   ├── ShopPage
│   │   ├── ProductFilters
│   │   │   ├── CategoryFilter
│   │   │   ├── PriceRange
│   │   │   └── SortSelect
│   │   └── ProductGrid
│   │       └── ProductCard
│   │
│   ├── ProductDetailPage
│   │   ├── ProductImage
│   │   ├── ProductInfo
│   │   ├── QuantitySelector
│   │   └── AddToCartButton
│   │
│   ├── CartPage
│   │   ├── CartItem
│   │   ├── CartSummary
│   │   └── CheckoutButton
│   │
│   ├── CheckoutPage
│   │   ├── ShippingForm
│   │   ├── PaymentForm
│   │   └── OrderSummary
│   │
│   ├── AuthPages (Login/Register)
│   │   └── AuthForm
│   │
│   └── AdminPages
│       ├── AdminSidebar
│       ├── ProductTable
│       └── OrderTable
│
└── Shared Components
    ├── Button
    ├── Input
    ├── Modal
    ├── Toast
    ├── LoadingSpinner
    └── ProductCard
```

---

## 4. UI Concept - "Fresh & Vibrant"

### Color Palette
| Role | Color | Usage |
|------|-------|-------|
| Primary | `#FF6B35` (Orange) | CTAs, highlights |
| Secondary | `#2E7D32` (Green) | Fresh, nature |
| Accent | `#FFD700` (Yellow) | Badges, promotions |
| Background | `#FFFEF7` (Cream) | Main bg |
| Surface | `#FFFFFF` | Cards |
| Text Primary | `#1A1A1A` | Headings |
| Text Secondary | `#666666` | Body |

### Typography
- **Headings:** Poppins (bold, modern)
- **Body:** Inter (clean, readable)

### Visual Style
- Rounded corners (16px)
- Soft shadows
- Fruit-themed illustrations
- Fresh produce imagery
- Smooth animations

### Layout
- Max-width: 1280px
- Grid: 4 columns desktop, 2 mobile
- Spacing: 8px base unit

---

## 5. Project Structure

```
fruit-shop/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── common/        # Button, Input, Modal, etc.
│   │   ├── layout/        # Header, Footer, Layout
│   │   ├── product/       # ProductCard, ProductGrid
│   │   ├── cart/          # CartItem, CartSummary
│   │   └── admin/         # Admin components
│   ├── pages/
│   │   ├── index.tsx      # Home
│   │   ├── shop.tsx
│   │   ├── product/[id].tsx
│   │   ├── cart.tsx
│   │   ├── checkout.tsx
│   │   └── admin/
│   ├── hooks/             # Custom hooks
│   ├── context/           # React Context (Auth, Cart)
│   ├── services/          # API calls
│   ├── types/             # TypeScript interfaces
│   ├── utils/             # Helpers
│   ├── styles/            # Global styles
│   └── data/              # Mock data
├── package.json
└── README.md
```

---

## 6. Next Steps

1. ✅ Review component hierarchy + page plan ← **You're here**
2. ⏳ Setup React project (Vite + TypeScript)
3. ⏳ Create shared components (Button, Input, etc.)
4. ⏳ Implement context (Auth, Cart)
5. ⏳ Build pages (Home → Shop → Product → Cart → Checkout)
6. ⏳ Add admin dashboard
7. ⏳ Polish UI + animations

---

**Gửi review nếu cần điều chỉnh gì, rồi bắt đầu setup project nhé! 🚀**
