export const siteSettings = {
  name: "Craftezy",
  description: "Multi-vendor E-commerce website",
  author: {
    name: "Craftezy",
    websiteUrl: "https://craftezy.com/",
    address: "",
  },
  logo: {
    url: "/assets/images/logo.svg",
    alt: "Craftezy",
    href: "/",
    width: 95,
    height: 30,
  },
  chatButtonUrl: "https://www.facebook.com/craftezy",
  defaultLanguage: "en",
  currency: "USD",
  product: {
    placeholderImage: (variant = "list") => {
      return `/assets/placeholder/products/product-${variant}.svg`;
    },
  },
  homePageBlocks: {
    flashSale: {
      slug: "flash-sale",
      limit: 10,
    },
    featuredProducts: {
      slug: "featured-products",
      limit: 5,
    },
    brands: {
      limit: 16,
    },
    onSaleSettings: {
      slug: "on-sale",
      limit: 9,
    },
  },
};
