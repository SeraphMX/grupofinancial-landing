import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ClientType = 'personal' | 'business';
export type GuaranteeType = 'sin-garantia' | 'con-garantia';

interface ClientData {
  name: string;
  email: string;
  phone: string;
  rfc: string;
  companyName?: string;
  industry?: string;
  annualRevenue?: string;
}

interface CreditState {
  step: number;
  clientType: ClientType | null;
  guaranteeType: GuaranteeType;
  amount: number;
  term: number;
  monthlyPayment: number;
  totalPayment: number;
  interestRate: number;
  clientData: ClientData;
}

const calculatePayments = (amount: number, term: number, rate: number) => {
  const monthlyRate = rate;
  const numerator = monthlyRate * Math.pow(1 + monthlyRate, term);
  const denominator = Math.pow(1 + monthlyRate, term) - 1;
  const monthlyPayment = amount * (numerator / denominator);
  const totalPayment = monthlyPayment * term;

  return {
    monthlyPayment: Math.round(monthlyPayment),
    totalPayment: Math.round(totalPayment),
  };
};

const initialState: CreditState = {
  step: 1,
  clientType: null,
  guaranteeType: 'sin-garantia',
  amount: 100000,
  term: 12,
  monthlyPayment: 0,
  totalPayment: 0,
  interestRate: 0.02,
  clientData: {
    name: '',
    email: '',
    phone: '',
    rfc: '',
    companyName: '',
    industry: '',
    annualRevenue: '',
  },
};

// Calcular los pagos iniciales
const initialPayments = calculatePayments(
  initialState.amount,
  initialState.term,
  initialState.interestRate
);
initialState.monthlyPayment = initialPayments.monthlyPayment;
initialState.totalPayment = initialPayments.totalPayment;

export const creditSlice = createSlice({
  name: 'credit',
  initialState,
  reducers: {
    setClientType: (state, action: PayloadAction<ClientType>) => {
      state.clientType = action.payload;
      state.step = 2;
      state.amount = action.payload === 'personal' ? 100000 : 500000;
      const payments = calculatePayments(
        state.amount,
        state.term,
        state.interestRate
      );
      state.monthlyPayment = payments.monthlyPayment;
      state.totalPayment = payments.totalPayment;
    },
    setGuaranteeType: (state, action: PayloadAction<GuaranteeType>) => {
      state.guaranteeType = action.payload;
      // Ajustar el monto si es necesario
      if (action.payload === 'con-garantia' && state.amount < 500000) {
        state.amount = 500000;
      } else if (action.payload === 'sin-garantia' && state.amount > 5000000) {
        state.amount = 5000000;
      }
      // Ajustar el plazo si es necesario
      if (action.payload === 'sin-garantia' && state.term > 60) {
        state.term = 60;
      }
      const payments = calculatePayments(
        state.amount,
        state.term,
        state.interestRate
      );
      state.monthlyPayment = payments.monthlyPayment;
      state.totalPayment = payments.totalPayment;
    },
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
      const payments = calculatePayments(
        action.payload,
        state.term,
        state.interestRate
      );
      state.monthlyPayment = payments.monthlyPayment;
      state.totalPayment = payments.totalPayment;
    },
    setTerm: (state, action: PayloadAction<number>) => {
      state.term = action.payload;
      const payments = calculatePayments(
        state.amount,
        action.payload,
        state.interestRate
      );
      state.monthlyPayment = payments.monthlyPayment;
      state.totalPayment = payments.totalPayment;
    },
    setClientData: (state, action: PayloadAction<Partial<ClientData>>) => {
      state.clientData = { ...state.clientData, ...action.payload };
    },
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    resetForm: () => initialState,
  },
});

export const {
  setClientType,
  setGuaranteeType,
  setAmount,
  setTerm,
  setClientData,
  nextStep,
  prevStep,
  resetForm,
} = creditSlice.actions;

export default creditSlice.reducer;