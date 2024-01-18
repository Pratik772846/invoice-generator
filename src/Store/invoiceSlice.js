import { createSlice } from '@reduxjs/toolkit';

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState:{
    invoices:[]
  },
  reducers: {
    addInvoice: (state, action) => {
        const { invoiceNumber } = action.payload;
        const existingInvoiceIndex = state.invoices.findIndex(
          (invoice) => invoice.invoiceNumber === invoiceNumber
        );
        if (existingInvoiceIndex !== -1) {
          state.invoices[existingInvoiceIndex] = action.payload;
        } else {
          state.invoices.push(action.payload);
        }

    },
    deleteInvoice:(state,action)=>{
        const updatedInvoices = state.invoices.filter(
            (invoice) => invoice.invoiceNumber !== action.payload
          );
          return {
            ...state,
            invoices: updatedInvoices,
          };
    },
  }
});
export const {addInvoice,deleteInvoice} = invoiceSlice.actions;
export default invoiceSlice.reducer;
