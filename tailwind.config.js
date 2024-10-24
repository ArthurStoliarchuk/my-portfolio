/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            border: "hsl(var(--ring ))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary:{
               DEFAULT: "hsl(var(--primary))",
               foreground: "hsl(var(--primary-foreground))",
            },
            secondary:{
               DEFAULT: "hsl(var(--secondary))",
               foreground: "hsl(var(--secondary-foreground))",
            },
         },
      },
   },
   plugins: [],
}