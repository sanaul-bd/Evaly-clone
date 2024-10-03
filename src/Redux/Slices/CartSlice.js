const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: "exampleReducer ",
});

export default store