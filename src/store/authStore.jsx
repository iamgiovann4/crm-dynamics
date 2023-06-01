import { create } from 'zustand'

const useAuthStore = create((set) => ({
    isLogged: false,
    token: '',
    fname: '',
    cpf: '',
    roles: '',
  login: (token, user) => set({ isLogged: true, token: token, fname: user.fname, cpf: user.cpf, roles: user.roles }),
  logout: () => set({ isLogged: false, token: '', fname: '', cpf: '', roles: ''}),
}))

export default useAuthStore