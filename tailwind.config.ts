import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      flexGrow:{
        2:'2',
        3:'3',
        4:'4',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'linear':'linear-gradient(90deg, rgba(130,180,255,1) 0%, rgba(191,240,255,1) 100%)',
        'linear-verde':'linear-gradient(90deg, rgba(192,240,255,1) 0%, rgba(169,254,129,1) 50%)',
        'linear-amarillo':'linear-gradient(90deg, rgba(170,255,130,1) 0%, rgba(255,229,151,1) 100%)',
        'linear-AMA-VIO':'linear-gradient(90deg, rgba(255,199,135,1) 0%, rgba(224,166,244,1) 100%)',
        'linear-violet-azul':'linear-gradient(90deg, rgba(129,179,254,1) 0%, rgba(224,166,244,1) 100%)',
        'linear-hero':'linear-gradient(90deg, rgba(219,166,244,1) 0%, rgba(169,129,254,1) 100%)',
      },
      colors:{
        bg:'#151212',
        paragraph:'#ffffff',
        'linear-hero':'linear-gradient(90deg, rgba(219,166,244,1) 0%, rgba(169,129,254,1) 100%)',
        button:'#C0F0FF',
        buttonHover:'rgba(192,240,255,0.7)',

      },
      borderColor:{
        'linear-hero':'linear-gradient(90deg, rgba(219,166,244,1) 0%, rgba(169,129,254,1) 100%)',
      },
      fontFamily:{
        spaceMono:'var(--font-spaceMono)',
        dmSans:'var(--font-dmSans)',
        nanumPen:'var(--font-nanumPen)',
      },
      fontSize:{
        'ds-primary':['96px','1'],
        'ds-secondary':['78px','1'],
        'ds-subtitle':['48px','1'],
        'mb-primary':['30px','1'],
        'mb-secondary':['30px','1'],
        'mb-subtitle':['24px','1'],
        'floatText':['40px','1'],
        'paragraphText':['32px','1'],
        'mb-paragraphText':['18px','1'],
        'mb-floatText':['25px','1']

      },
    },
  },
  plugins: [],
};
export default config;
