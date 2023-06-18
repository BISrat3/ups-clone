import {gql} from "@apollo/client"

export const GET_CUSTOMERS = gql`
    query GetCustomers {
        GetCustomers {
            value {
                emailname
            }
            name
        }
    }`

export const GET_ORDERS = gql`
    query GetOrders {
        getOrders {
            value {
                Address
                City
                Lat
                Lng
                carrier
                createAt
                shippingCost
                trackingId
                trackingItem {
                    customer {
                    email
                    name
                    }
                    items {
                    item_id
                    name
                    price
                    quantity
                    }
                }
            }
        }
    }
`