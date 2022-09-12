const config = {
  baseUrl: "https://api.idealista.com",
  oauthRoute: "/oauth/token",
  searchRoute: "/3.5/es/search",
  apiKey: "",
  secret: "",

  searchParams: {
    center: "41.395778878326624,2.17168821519119",
    distance: 5000,
    propertyType: "homes",
    operation: "sale",
    country: "es",
    maxItems: 50,
    maxPrice: 300000,
    hasMultimedia: true,
    minSize: 80,
    flat: true,
    bedrooms: "3,4",
    bathrooms: "1,2",
    exterior: true,
    terrace: true,
    elevator: true,
  },
};

module.exports = config;
