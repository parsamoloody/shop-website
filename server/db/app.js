import { ApolloServer, gql } from "apollo-server";

let typeDefs = gql`
  type Image {
  src: String
  extension: String
  type: String
  alt: String
}

type CategoryInformation {
  title: String
  path: String
  description: String
  image: [Image]
}

type Product {
  title: String
  image: [Image]
  description: String
  price: Int
  isDiscount: Boolean
  discountRate: Int
  rating: Float
  author: String
  Date: String
}

type ClothingCategory {
  categoryName: String
  image: [Image]
  products: [Product]
}

type ClothingCategoryNoImage { 
  products: [Product]
}

type ClothingCategorySingleImage { 
  image: [Image]
  products: [Product]
}

type Man {
  categoryInformation: [CategoryInformation]
  shirts: [ClothingCategory]
  jeans: [ClothingCategory]
  sweaters: [ClothingCategorySingleImage]
  suits: [ClothingCategorySingleImage] 
  outerwear: [ClothingCategorySingleImage]
}

type Woman {
  categoryInformation: [CategoryInformation]
  jeans: [ClothingCategory]
  shirts: [ClothingCategory]
}

type Gender {
  man: [Man]
  woman: [Woman]
}

type Query {
  theMan: [Gender]
  theWoman: [Gender]
}

`;

let resolvers = {
    Query: {
        theMan: () => categories,
        theWoman: () => categories
    }
}

let server = new ApolloServer({ typeDefs, resolvers })
server.listen()

const categories = [
    {
        man: [
            {

                categoryInformation: [
                    {
                        title: "man clothing",
                        path: "man-clothing",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus ut nunc lacinia ultrices. Nullam nec purus nec nunc lacinia ultrices. Nullam nec purus nec nunc lacinia ultrices. Nullam nec purus nec nunc lacinia ultrices.",
                        image: [
                            {
                                src: "m-jeans-nav-2-skinny-dt",
                                extension: "avif",
                                type: "image/avif",
                                alt: "Slim Fit Jeans"
                            }
                        ]
                    },
                ],
                shirts: [
                    {
                        categoryName: "shirts",
                        imaage: [
                            {
                                src: "01-hp-m-mb",
                                extension: "avif",
                                type: "image/avif",
                                alt: "shirt"
                            },
                        ],
                        products: [
                            {
                                title: "Plaid Cotton Stretch Flannel Shirt.",
                                image: [
                                    {
                                        src: "0020_01768689_0631_f001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Slim Fit Jeans"
                                    }
                                ],
                                description: "A perfect slim fit for everyday wear.",
                                price: 68.00,
                                isDiscount: true,
                                discountRate: 48,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Plaid Pocket Cotton Stretch Shirt.",
                                image: [
                                    {
                                        src: "0020_01768555_2237_f001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 68.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Slim Solid Short Sleeve 1MX Dress Shirt.",
                                image: [
                                    {
                                        src: "0020_01698363_0001_c001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 68.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Slim Mini Floral Wrinkle-Resistant Everyday Performance Dress Shirt",
                                image: [
                                    {
                                        src: "0020_01768555_2237_f001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Slim Mini Floral Wrinkle-Resistant Everyday Performance Dress Shirt"
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 68.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {

                                title: "Slim Gradient Plaid Wrinkle-Resistant Everyday Performance Dress Shirt",
                                image: [
                                    {
                                        src: "0020_06030300_2237_a001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 68.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 78.00,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Slim Solid Stretch Modern Tech 1MX Dress Shirt",
                                image: [
                                    {
                                        src: "0020_00303473_2092_c001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 68.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 78.00,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {

                                title: "Extra Slim Solid Stretch 1MX Dress Shirt.",
                                image: [
                                    {
                                        src: "0020_06039140_0001_4_fb",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 68.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {

                            }
                        ]
                    },
                ],
                jeans: [
                    {
                        categoryName: "jeans",
                        imaage: [
                            {
                                src: "02-hp-m-mb",
                                extension: "avif",
                                type: "image/avif",
                                alt: "shirt"
                            },
                        ],
                        products: [
                            {
                                title: "Loose Gray Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "0024_00918224_0098_c001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Loose Brown Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "0024_00918238_2629_f001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "0024_00918232_0019_c001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "0024_00918255_0018_a001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "0024_00918243_0020_f001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "0024_00918234_2707_f002",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "0024_02757689_0001_f001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "0024_00918227_3471_c001",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            }
                        ]
                    }
                ],
                sweaters: [
                    {
                        categoryName: "Sweaters",
                        image: [
                            {
                                src: "0024_00918227_3471_c001",
                                extension: "avif",
                                type: "image/avif",
                                alt: "Plaid Pocket Cotton Stretch Shirt."
                            }
                        ],
                        products: [
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "03-hp-m-mb",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                        ]
                    }
                ],
                suits: [
                    {
                        categoryName: "Suits",
                        image: [
                            {
                                src: "04-hp-m-mb",
                                extension: "avif",
                                type: "image/avif",
                                alt: "Plaid Pocket Cotton Stretch Shirt."
                            }
                        ],
                        products: [
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "03-hp-m-mb",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                        ]
                    }
                ],
                outerwear: [
                    {
                        categoryName: "Outerwear",
                        image: [
                            {
                                src: "05-hp-m-mb",
                                extension: "avif",
                                type: "image/avif",
                                alt: "Plaid Pocket Cotton Stretch Shirt."
                            }
                        ],
                        products: [
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "03-hp-m-mb",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                        ],
                    }
                ]

            }
        ],
        woman: [
            {
                categoryInformation: [
                    {
                        title: "woman clothing",
                        path: "woman-clothing",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus ut nunc lacinia ultrices. Nullam nec purus nec nunc lacinia ultrices. Nullam nec purus nec nunc lacinia ultrices. Nullam nec purus nec nunc lacinia ultrices.",
                        image: [
                            {
                                src: "m-jeans-nav-2-skinny-dt",
                                extension: "avif",
                                type: "image/avif",
                                alt: "Slim Fit Jeans"
                            }
                        ]
                    },
                ],
                jeans: [
                    {
                        categoryName: "Jeans",
                        image: [
                            {
                                src: "01-hp-m-mb",
                                extension: "avif",
                                type: "image/avif",
                                alt: "Plaid Pocket Cotton Stretch Shirt."
                            }
                        ],
                        products: [
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "03-hp-m-mb",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                        ]
                    }
                ],
                shirts: [
                    {
                        categoryName: "Shirts",
                        image: [
                            {
                                src: "05-hp-m-mb",
                                extension: "avif",
                                type: "image/avif",
                                alt: "Plaid Pocket Cotton Stretch Shirt."
                            }
                        ],
                        products: [
                            {
                                title: "Loose Medium Wash Stretch Carpenter Jeans.",
                                image: [
                                    {
                                        src: "03-hp-m-mb",
                                        extension: "avif",
                                        type: "image/avif",
                                        alt: "Plaid Pocket Cotton Stretch Shirt."
                                    }
                                ],
                                description: "Plaid Pocket Cotton Stretch Shirt..",
                                price: 88.00,
                                isDiscount: false,
                                discountRate: 9,
                                rating: 4.5,
                                author: "parsa",
                                Date: "2023-08-01",
                            },
                        ]
                    }
                ]

            }
        ]
    }
]