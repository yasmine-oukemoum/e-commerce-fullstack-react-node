/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'custom-24': '24px',
      },
      spacing: {
        '60': '60px',
      },
      colors:{
        primary:'#FFFFFF',
        primary1:'#363738',
        secondary:'#F5F5F5',
        secondary1:'#F5F5F5',
        secondary2:'#DB4444',
        button1:'#00FF66',
        button2:'#DB4444',
        hoverbutton:'#E07575',
        hoverbutton1:'#A0BCE0',
        bg:"#FFFFFF",
        Text:'#FAFAFA',
        Text1:'#7D8184',
        Text2:'#000000',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
}