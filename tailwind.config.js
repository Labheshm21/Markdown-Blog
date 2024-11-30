/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"], // Enable dark mode with class-based toggling
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Scans all page files
	  "./components/**/*.{js,ts,jsx,tsx,mdx}", // Scans all component files
	  "./app/**/*.{js,ts,jsx,tsx,mdx}", // Scans app directory
	],
	theme: {
	  extend: {
		colors: {
		  background: 'hsl(var(--background))', // Custom background color
		  foreground: 'hsl(var(--foreground))', // Custom foreground color
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		  },
		  border: 'hsl(var(--border))', // Custom border color
		  input: 'hsl(var(--input))', // Custom input color
		  ring: 'hsl(var(--ring))', // Custom ring color
		  chart: {
			1: 'hsl(var(--chart-1))',
			2: 'hsl(var(--chart-2))',
			3: 'hsl(var(--chart-3))',
			4: 'hsl(var(--chart-4))',
			5: 'hsl(var(--chart-5))',
		  },
		},
		borderRadius: {
		  lg: 'var(--radius)', // Large border radius
		  md: 'calc(var(--radius) - 2px)', // Medium border radius
		  sm: 'calc(var(--radius) - 4px)', // Small border radius
		},
	  },
	},
	plugins: [
	  require("tailwindcss-animate"),
	  require("@tailwindcss/typography") // Add animation utilities
	],
  };
  