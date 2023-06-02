import { create } from 'zustand'

const useAuthStore = create((set) => ({
  isLoading: true,
  isLogged: false,
  token: '',
  fname: '',
  cpf: '',
  loaded: (value) => set({ isLoading: false }),
  login: (token, user) => set({ isLogged: true, token, fname: user.fname, cpf: user.cpf }),
  logout: () => set({ isLogged: false, token: '', fname: '', cpf: '', roles: '' }),
}))

export default useAuthStore