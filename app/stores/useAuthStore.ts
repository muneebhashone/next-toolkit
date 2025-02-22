import { create } from 'zustand'

interface IAuthStore {
    token: string | null
    setToken: (token: string) => void
    removeToken: () => void
}

const useAuthStore = create<IAuthStore>((set) => ({
  token: null,
  setToken: (token: string) => set({ token }),
  removeToken: () => set({ token: null }),
}))

export default useAuthStore