/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 這行最重要！告訴 Tailwind 去 src 資料夾找樣式
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}