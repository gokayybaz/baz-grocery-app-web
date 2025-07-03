/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// Shadcn/ui'nin kullandığı temel renk değişkenleri
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				// Sizin özel renkleriniz için Tailwind sınıfları (global.css'te tanımlanacak değişkenleri referans alır)
				// Örnek kullanım: bg-my-primary-background-color, text-my-primary-text-color
				'my-primary-background-color': 'hsl(var(--my-primary-background))',
				'my-secondary-background-color': 'hsl(var(--my-secondary-background))',
				'my-tertiary-background-color': 'hsl(var(--my-tertiary-background))',
				'my-primary-text-color': 'hsl(var(--my-primary-text))',
				'my-secondary-text-color': 'hsl(var(--my-secondary-text))',
				'my-primary-link-color': 'hsl(var(--my-primary-link))',
				'my-primary-border-color': 'hsl(var(--my-primary-border))',
				'my-primary-color-main': 'hsl(var(--my-primary-color))', // 'primary' ile çakışmaması için sonuna '-main' eklendi
				'my-primary-dark-color': 'hsl(var(--my-primary-dark-color))',
				'my-primary-light-color': 'hsl(var(--my-primary-light-color))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
