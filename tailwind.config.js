module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        sm: '32px',
        md: '36px',
        lg: '42px',
      },
      colors: {
        default: '#E0E0E0',
        'default-hover': '#AEAEAE',
        primary: '#2962FF',
        'primary-hover': '#0039CB',
        secondary: '#455A64',
        'secondary-hover': '#1C313A',
        danger: '#D32F2F',
        'danger-hover': '#9A0007',
      },
    },
  },
  plugins: [],
};
