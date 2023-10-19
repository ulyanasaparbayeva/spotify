module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      container: {
        center: true,
        screens: {
          sm: '450px',
          md: '768px',
          lg: '1024px',
          xl: '1264px',
        },
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "1rem",
          xl: "1rem",
        },
      },
      colors: {
        "primary": "#B9B4C7",
        "primary-2":"#000",
        "secondary": "#fff",
        "secondary-2": "#CCC",
        "secondary-3":"#171717",
        "secondary-4":"#B3B3B3",
        "secondary-5":"rgba(101, 211, 110, 1)",
        "secondary-6":"#121212",
        "secondary-7":"#181818",
        "secondary-8":"rgba(255, 255, 255, 1)"
      },
     width: {
        "sidebar":"310px",
        "sidebar-secondary":"346px",
        "custom-width":"233px",
        "custom-width-2":"82px",
       "custom-width-3":"224px",
       "custom-width-4":"297px",
       "custom-width-5":"72px",
       "custom-width-6":"182px",
     },
      height: {
        'custom-height':'62px',
        'custom-height-2':'82px',
        'custom-height-3':'324px',
        'custom-height-4':'297px',
        'custom-height-5':'72px'
      },
      padding:{
        'custom-top': '70px',
        'custom-top-2':'23px',
        'custom-top-3':'21px',
        'custom-top-4':'22px',
        'custom-top-5':'18px',
        'custom-top-6':'50px',
        'custom-top-7':'26px',
        'custom-top-8':'25px',
        'custom-top-9':'28px',
        'custom-top-10':'89px',
        'custom-top-11':'30px',
        'custom-top-12':'13px',
        'custom-top-13':'94px',
        'custom-top-14':'7px',
        'custom-bottom':'39px',
        'custom-bottom-2':'18px',
        'custom-bottom-3':'31px',
        'custom-left':'30px',
        'custom-left-2':'41px',
        'custom-left-3':'21px',
        'custom-left-3':'49px',
        'custom-left-4':'22px',
        'custom-right':'35px',
      },
      fontWeight:{
        'custom-weight':'450'
      },
      fontSize:{
        'custom-size':'39px',
        'custom-size-2':'122px',
        'custom-size-3':'52px',
        'custom-size-4':'52px',
        'custom-size-5':'22px'
      },
      gap:{
        'custom-gap':'15px',
        'custom-gap-2':'22px',
        'custom-gap-3':'31px',
        'custom-gap-4':'21px',
        'custom-gap-5':'11px',
        'custom-gap-6':'23px',
        'custom-gap-7':'76px',
      }
    },

  },
};
