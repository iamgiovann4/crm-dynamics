import { create } from 'zustand'

const useAuthStore = create((set) => ({
  isLoading: true,
  isLogged: false,
  token: '',
  fname: '',
  cpf: '',
  email: '',
  loaded: (value) => set({ isLoading: false }),
  login: (token, user) => set({ isLogged: true, token, fname: user.fname, cpf: user.cpf, email: user.email }),
  logout: () => set({ isLogged: false, token: '', fname: '', cpf: '', roles: '', email: '' }),
}))

export default useAuthStore