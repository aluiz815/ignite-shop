import { styled } from "@stitches/react";

export const Container = styled('div', {
    display: 'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    minHeight:'100vh',
    justifyContent:'center',
    position:'relative',
    overflowX:'hidden'
})

export const Header = styled('header', {
    padding:'2rem 0',
    width:'100%',
    maxWidth:1100,
    margin: '0 auto',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
})


export const IconContainer = styled('button', {
    background:'$gray800',
    padding:'0.75rem',
    borderRadius:'6px',
    cursor:'pointer',
    position:'relative',
    border:'0',
    color:'$gray200'
});


export const HeaderIconContainer = styled('div', {
    color:'$white',
    background:'$green500',
    borderRadius:'1000px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position: 'absolute',
    width:'1.5rem',
    height:'1.5rem',
    top:'-10px',
    right:'-10px'
});
