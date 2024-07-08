import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  //creating a proxy bcz url's for backend and frontend 
  //is not same in order to fetch/update the data
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:4000",
        secure: false,
      }
    }
  },
  plugins: [react()],
})
