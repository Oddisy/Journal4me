import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CheckoutState {
  isProcessing: boolean;
  paymentSuccess: boolean;
  email: string;
}

const initialState: CheckoutState = {
  isProcessing: false,
  paymentSuccess: false,
  email: '',
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setProcessing: (state, action: PayloadAction<boolean>) => {
      state.isProcessing = action.payload;
    },
    setPaymentSuccess: (state, action: PayloadAction<boolean>) => {
      state.paymentSuccess = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { setProcessing, setPaymentSuccess, setEmail } = checkoutSlice.actions;

export default checkoutSlice.reducer;
