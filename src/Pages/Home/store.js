import { create } from "zustand";
import axios from "axios";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

axios.defaults.baseURL = "https://api.punkapi.com/v2/";
export const useBeers = create(
  devtools(
    persist(
      (set, get) => ({
        beers: [],
        isLoading: false,
        error: null,
        page: 1,

        getAllBeers: async () => {
          set({ isLoading: true });
          try {
            const page = get().page;
            const { data } = await axios.get(`beers/?page=${page}&per_page=15`);
            set({ beers: await [...get().beers, ...data] });
          } catch (error) {
            set({ error: error.message });
          } finally {
            set({ isLoading: false });
          }
        },
        deleteBeerById: async (id) => {
          set({ isLoading: true });
          try {
            const index = await get().beers.findIndex((beer) => beer.id === id);

            const newArrOfBeers = [...get().beers];
            newArrOfBeers.splice(index, 1);
            set({ beers: newArrOfBeers });
          } catch (error) {
            set({ error: error.message });
          } finally {
            set({ isLoading: false });
          }
        },
        loadMore: () => {
          set({ page: get().page + 1 });
          get().getAllBeers();
        },
      }),
      {
        name: "beers-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
