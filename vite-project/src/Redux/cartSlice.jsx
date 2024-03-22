import { createSlice } from "@reduxjs/toolkit";

// Create a slice for the cart. A slice is a collection of reducers logic and actions for a single feature in your app. 
const cartSlice = createSlice({
    //The name of the slice. This is used to generate action types and reducer function names. 
    name: "cart",
    // The inital state of the slice. In this case, the initial state is an empty array because the cart starts out empty.
    initialState: [],
    // The reducers functions for this slice. These functions define how the state should be updated in response to diffrent action.
    reducers: {
        // The addToCart reducer function. This function is called when the addToCart action is dispatched.
        // It recevies the current state and the action as arguments. The action object includes a payload property, which is the item to be added to the cart.
        // The function updates the state by pushing the item to the array. 
       addToCart: (state, action) => {
        state.push(action.payload);
       },
    },
});


// Export the actions created by the slice. These can be dispatched to trigger updates to the state. 
export const { addToCart } = cartSlice.actions;

// Export the reducer function generated by createSlice. This function will be used to create the store.
export default cartSlice.reducer;