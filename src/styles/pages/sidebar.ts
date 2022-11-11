import { styled } from "@stitches/react";


export const SidebarContainer = styled('main',{
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 100,
  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    height: '100vh',
    maxWidth: 400,
    padding: 25,

  
    backgroundColor: '$gray800',
    transition: '.5s',

    '> button:first-child': {
        background:'transparent',
        border:0,
        color:'$gray200',
        width: '100%',
        display:'flex',
        justifyContent: 'flex-end',
        cursor:'pointer'
    },
  
    header: {
        marginTop:'4.5rem',
    },

    footer: {
        marginTop:'12.375rem',
        width:'100%',
        div: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap:'0.5rem',
            color:'$white',
            fontSize:'$md',
            fontWeight:'bold',
            '&:first-child': {
                color:'$gray100',
                fontSize:'1rem',
                fontWeight:'regular',
            },
        },
        button: {
            background:'$green500',
            width:'100%',
            padding:'2rem 1.25rem',
            marginTop:'3.563rem',
            border:0,
            borderRadius:8,
            color:'$white',
            fontSize:'$md',
            lineHeight:1.6,
            cursor:'pointer',
            fontWeight:'bold',
        }
    },

    variants: {
        display:{
            flex: {
                display:'flex'
            },
            none: {
                display:'none'
            },
        },
        transform: {
          hidden: {
            transform: 'translateX(110%)',
          },
          show: {
            transform: 'translateX(0%)',
          },
        },
      },
})

export const CardContainer = styled('div',{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'2rem',
    gap:'1.25rem',

    '> div':{
        display:'flex',
        flexDirection:'column',
        gap:'0.25rem',
        h3: {
            fontSize:'$md',
            fontWeight:'regular',
            color:'$gray300'
        },
        span: {
            fontSize:'$md',
            fontWeight:'bold',
            color:'$white'
        },
        '> button': {
            background:'transparent',
            border:0,
            textAlign:'left',
            fontWeight:'bold',
            color:'$green500',
            cursor:'pointer'
        }
    },
    img: {
        width:'6.25rem',
        height:'5.625rem',
        background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
        objectFit: 'cover',
        borderRadius:8
    }
})