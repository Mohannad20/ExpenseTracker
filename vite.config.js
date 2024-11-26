import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig( ({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/ExpenseTracker/' : '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
