import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        'gradient-start': '#6a0dad',
        'gradient-end': '#4ADE80',
        Border: {
          Card: 'var(--border-card)',
          Primary: 'var(--border-primary)',
          PrimaryDark: 'var(--border-primary-dark)',
          ButtonOutline: 'var(--border-button-outline)',
          TextFieldDefault: 'var(--border-text-field-default)',
          TextFieldError: 'var(--border-text-field-error)',
          TextFieldFocus: 'var(--border-text-field-focus)',
          TextFieldHover: 'var(--border-text-field-hover)',
        },
        Surface: {
          Alternative: 'var(--surface-alternative)',
          Card: 'var(--surface-card)',
          Error: 'var(--surface-error)',
          ErrorLight: 'var(--surface-error-light)',
          ErrorMedium: 'var(--surface-error-medium)',
          Info: 'var(--surface-info)',
          InfoLight: 'var(--surface-info-light)',
          InfoMedium: 'var(--surface-info-medium)',
          Light: 'var(--surface-light)',
          Medium: 'var(--surface-medium)',
          Overlay: 'var(--surface-overlay)',
          Primary: 'var(--surface-primary)',
          PrimaryAlpha: 'var(--surface-primary-alpha)',
          PrimaryDark: 'var(--surface-primary-dark)',
          PrimaryLight: 'var(--surface-primary-light)',
          PrimaryMedium: 'var(--surface-primary-medium)',
          Soft: 'var(--surface-soft)',
          Success: 'var(--surface-success)',
          SuccessLight: 'var(--surface-success-light)',
          SuccessMedium: 'var(--surface-success-medium)',
          Suggest: 'var(--surface-suggest)',
          SuggestLight: 'var(--surface-suggest-light)',
          SuggestMedium: 'var(--surface-suggest-medium)',
          Warning: 'var(--surface-warning)',
          WarningLight: 'var(--surface-warning-light)',
          WarningMedium: 'var(--surface-warning-medium)',
          ButtonDestructive: 'var(--surface-button-destructive)',
          ButtonDestructiveHover: 'var(--surface-button-destructive-hover)',
          ButtonOutlineHover: 'var(--surface-button-outline-hover)',
          ButtonPrimary: 'var(--surface-button-primary)',
          ButtonPrimaryHover: 'var(--surface-button-primary-hover)',
          ButtonSecondary: 'var(--surface-button-secondary)',
          ButtonSecondaryHover: 'var(--surface-button-secondary-hover)',
          ChatAudioWave: 'var(--surface-chat-audio-wave)',
          ChatBubbleReceive: 'var(--surface-chat-bubble-receive)',
          ChatBubbleSend: 'var(--surface-chat-bubble-send)',
          TextFieldDefault: 'var(--surface-text-field-default)',
        },
        Text: {
          Alternative: 'var(--text-alternative)',
          Default: 'var(--text-default)',
          Disabled: 'var(--text-disabled)',
          Error: 'var(--text-error)',
          Info: 'var(--text-info)',
          Link: 'var(--text-link)',
          Primary: 'var(--text-primary)',
          Secondary: 'var(--text-secondary)',
          Success: 'var(--text-success)',
          Suggest: 'var(--text-suggest)',
          Warning: 'var(--text-warning)',
          ButtonDestructive: 'var(--text-button-destructive)',
          ButtonGhost: 'var(--text-button-ghost)',
          ButtonOutline: 'var(--text-button-outline)',
          ButtonPrimary: 'var(--text-button-primary)',
          ButtonSecondary: 'var(--text-button-secondary)',
          ChatBubbleReceive: 'var(--text-chat-bubble-receive)',
          ChatBubbleSend: 'var(--text-chat-bubble-send)',
          TextFieldDefault: 'var(--text-text-field-default)',
          TextFieldError: 'var(--text-text-field-error)',
          TextFieldSecondary: 'var(--text-text-field-secondary)',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'gradient-animation': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 0deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'spin-slow': 'spin 5s linear infinite',
        'gradientAnimation': 'gradient-animation 1s ease infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config