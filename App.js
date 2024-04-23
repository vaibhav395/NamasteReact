import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="img-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jtjeruuAimiSrmemxo96bHars9liZfb8Uw&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const resList = [
    {
        "info": {
          "id": "371422",
          "name": "Handi punjab ki",
          "cloudinaryImageId": "vozwrqdkvfcfutehx4ld",
          "locality": "Rajpur Road",
          "areaName": "Hathibarkala Salwala",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "North Indian",
            "Snacks",
            "Chinese"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "93115",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 54,
            "lastMileTravel": 9.1,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "9.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-23 17:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                "description": "Delivery!"
              },
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/handi-punjab-ki-rajpur-road-hathibarkala-salwala-dehradun-371422",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "377714",
          "name": "Bobby's Kitchen",
          "cloudinaryImageId": "jfmivr2ajvxcwnxy4yw2",
          "locality": "Saharanpur Road",
          "areaName": "Kaonli",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Chinese",
            "Snacks"
          ],
          "avgRating": 4.2,
          "veg": true,
          "parentId": "48311",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 4.5,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "4.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-24 01:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/bobbys-kitchen-saharanpur-road-kaonli-dehradun-377714",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "69392",
          "name": "Aangan Restaurant & Bar",
          "cloudinaryImageId": "lce61flh8zpi5uu7vwwu",
          "locality": "Karanpur",
          "areaName": "Ashtley Hall",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Chinese",
            "Continental"
          ],
          "avgRating": 4.3,
          "parentId": "15804",
          "avgRatingString": "4.3",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 50,
            "lastMileTravel": 8.1,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "8.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-23 22:45:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/aangan-restaurant-and-bar-karanpur-ashtley-hall-dehradun-69392",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "684832",
          "name": "Kitchen 365",
          "cloudinaryImageId": "b372f03cac692917d30d9d7b60f5ec8d",
          "locality": "Arya Tower",
          "areaName": "Deh_Patel Nagar",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Indian",
            "Chinese",
            "Mughlai"
          ],
          "avgRating": 4.2,
          "parentId": "118975",
          "avgRatingString": "4.2",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 4.4,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "4.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-23 23:57:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/kitchen-365-arya-tower-deh-patel-nagar-dehradun-684832",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "606314",
          "name": "The K Tiffin Story (Veg.)",
          "cloudinaryImageId": "42a718fa45194447e010363f44f12a0d",
          "locality": "Engineers Enclave",
          "areaName": "Patel Nagar",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "North Indian",
            "Beverages",
            "Chinese",
            "Italian"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "361074",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 39,
            "lastMileTravel": 4.6,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "4.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-23 22:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/the-k-tiffin-story-veg-engineers-enclave-patel-nagar-dehradun-606314",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "69499",
          "name": "Uss Da Dhaba",
          "cloudinaryImageId": "j6w0gbsy2pdoivjjlymp",
          "locality": "Race Course",
          "areaName": "Chukkuwala",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "North Indian",
            "Chinese",
            "Continental"
          ],
          "avgRating": 4.1,
          "parentId": "13693",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 40,
            "lastMileTravel": 6.5,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "6.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-23 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/uss-da-dhaba-race-course-chukkuwala-dehradun-69499",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "84229",
          "name": "Punjabi Dhaba",
          "cloudinaryImageId": "yyrjmyajqhyjq6mp1gha",
          "locality": "Paltan Bazar",
          "areaName": "Chukkuwala",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "North Indian"
          ],
          "avgRating": 4.1,
          "parentId": "1476",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 44,
            "lastMileTravel": 6.5,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "6.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-23 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/punjabi-dhaba-paltan-bazar-chukkuwala-dehradun-84229",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "419720",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
          "locality": "Mittal Chowk",
          "areaName": "Subhash Nagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          "avgRating": 4.2,
          "parentId": "2456",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 1.2,
            "serviceability": "SERVICEABLE",
            "slaString": "35 mins",
            "lastMileTravelString": "1.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-24 00:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Pizza.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/dominos-pizza-mittal-chowk-subhash-nagar-dehradun-419720",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "531280",
          "name": "KFC",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_531280.JPG",
          "locality": "Saharanpur Road",
          "areaName": "Subhash Nagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"
          ],
          "avgRating": 4.4,
          "parentId": "547",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 1.2,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "1.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-23 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Burger.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/kfc-saharanpur-road-subhash-nagar-dehradun-531280",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "413821",
          "name": "Pizza Hut",
          "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
          "locality": "Saharanpur Road",
          "areaName": "Majra",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas"
          ],
          "avgRating": 4.1,
          "parentId": "721",
          "avgRatingString": "4.1",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-23 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Pizza.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹179"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/pizza-hut-saharanpur-road-majra-dehradun-413821",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "656638",
          "name": "Subway",
          "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
          "locality": "Saharanpur Road",
          "areaName": "Patel Nagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 3.8,
          "parentId": "2",
          "avgRatingString": "3.8",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-24 02:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/subway-saharanpur-road-patel-nagar-dehradun-656638",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "502055",
          "name": "NIC Ice Creams",
          "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
          "locality": "Kanwali Road",
          "areaName": "Balliwala",
          "costForTwo": "₹120 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts"
          ],
          "avgRating": 4.6,
          "veg": true,
          "parentId": "6249",
          "avgRatingString": "4.6",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 6.5,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "6.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-24 00:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/nic-ice-creams-kanwali-road-balliwala-dehradun-502055",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "78106",
          "name": "Mughal Darbar",
          "cloudinaryImageId": "harzrppvhecvlvyrvgud",
          "locality": "Niranjanpur",
          "areaName": "Chukkuwala",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "North Indian",
            "Biryani",
            "Snacks"
          ],
          "avgRating": 4.1,
          "parentId": "8892",
          "avgRatingString": "4.1",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 1.6,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "1.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-24 02:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/mughal-darbar-niranjanpur-chukkuwala-dehradun-78106",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "530605",
          "name": "Kathi Junction",
          "cloudinaryImageId": "svfdhtf9m0fhnqve3bgp",
          "locality": "New Basti",
          "areaName": "Subhash Nagar",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "rolls",
            "Snacks"
          ],
          "avgRating": 4.3,
          "parentId": "1935",
          "avgRatingString": "4.3",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 2,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-24 01:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/kathi-junction-new-basti-subhash-nagar-dehradun-530605",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "311806",
          "name": "Burger King",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "Ballupur",
          "areaName": "Ballupur",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4.4,
          "parentId": "166",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 45,
            "lastMileTravel": 7.9,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "7.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-24 05:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Burger.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹139"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/burger-king-ballupur-dehradun-311806",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "253768",
          "name": "McDonald's",
          "cloudinaryImageId": "535fc9f9c135f7982317bbb6a64a1ffc",
          "locality": "Karanpur",
          "areaName": "Chukkuwala",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "American"
          ],
          "avgRating": 4.5,
          "parentId": "630",
          "avgRatingString": "4.5",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 49,
            "lastMileTravel": 8.2,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "8.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-23 23:45:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Burger.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/mcdonalds-karanpur-chukkuwala-dehradun-253768",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "793100",
          "name": "La Pino'z Pizza",
          "cloudinaryImageId": "e5f54df4ed8bac458b801ede76ee37d0",
          "locality": "Shastri nagar",
          "areaName": "Pitambar plaza",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4,
          "parentId": "4961",
          "avgRatingString": "4.0",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 48,
            "lastMileTravel": 8.5,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "8.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-24 02:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-shastri-nagar-pitambar-plaza-dehradun-793100",
          "type": "WEBLINK"
        }
      },
]
  


const RestaurantCard = (props) => {
    const {cloudinaryImageId, name, cuisines,costForTwo,avgRating} = props?.info //Good practice at industry level
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="res-container">
        {
            resList.map(restaurant =>{
                return <RestaurantCard key={restaurant.info.id} {...restaurant}/>
            })
        }

        {/* <RestaurantCard {...resList[0]}/>
        <RestaurantCard {...resList[1]}/>
        <RestaurantCard {...resList[2]}/> */}

      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
