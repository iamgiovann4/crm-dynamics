import { create } from 'zustand'

const useAuthStore = create((set) => ({
    isLogged: false,
    token: '',
    name: '',
    email: '',
    roles: '',
  login: (token, user) => set({ isLogged: true, token: token, name: user.name, email: user.email, roles: user.roles }),
  logout: () => set({ isLogged: false, token: '', name: '', email: '', roles: ''}),
}))

export default useAuthStore