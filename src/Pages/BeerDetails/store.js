import { create } from "zustand";

import axios from "axios";
axios.defaults.baseURL = "https://api.punkapi.com/v2/";
export const useSingeBeer = create((set) => ({
  beer: {},
  isLoading: false,
  error: null,
  getBeerById: async (id) => {
    set({ isLoading: true });
    try {
      const { data } = await axios.get(`beers/${id}`);
      set({ beer: data[0] });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));
