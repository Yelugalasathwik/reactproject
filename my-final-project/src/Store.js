// import { configureStore, createSlice } from "@reduxjs/toolkit";
import { configureStore,createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
    name :'products',
    initialState:{
        veg:[
            {name:'Tamato', price:50.0},
            {name:'Potato', price:40.0},
            {name:'Onion' , price:50.0},
            {name:'Brinjal' , price:20.0},
            {name:'Cabage' ,price:100.0}
        ],
        nonveg:[
            {name:'Chicken', price:250.0},
            {name:'Mutton', price:800.0},
            {name:'Fish' ,price:150.0},
            {name:'Egg' ,price:115.0}
        ]
    },
    reducers:{}
})
// const store = configureStore({
//     reducer:
//     {products:productSlice.reducer}
// } 
// )


const cartSclice = createSlice
(
    {
        name:"cart",
        initialState:[], 
        reducers:{
            addToCart:(state,action)=>{
                const status = state.find(item=>item.name===action.payload.name)
            
            if (status) {
                status.quantity+=1
            } else {
                state.push({...action.payload,quantity:1})
            }
        },
        increment: (state, action) => {
            const item = state.find(item => item.name === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrement: (state, action) => {
            const item = state.find(item => item.name === action.payload);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    return state.filter(item => item.name !== action.payload);
                }
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.name !== action.payload);
        }
        }   
        
    }
)

export const{addToCart,increment,decrement,removeFromCart} = cartSclice.actions;

const store = configureStore(
    {
        reducer:{
                    products:productSlice.reducer,
                    cart:cartSclice.reducer,
        }
    }
)

export default store;