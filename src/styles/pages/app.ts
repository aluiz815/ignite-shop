import { styled } from "@stitches/react";

export const Container = styled('div', {
    display: 'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    minHeight:'100vh',
    justifyContent:'center',
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


export const IconContainer = styled('div', {
    background:'$gray800',
    padding:'0.75rem',
    borderRadius:'6px',
    cursor:'pointer'
});
