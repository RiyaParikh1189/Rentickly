import React , {Component} from 'react';
export function Footer(props) {
  const styles = {
    footer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      marginTop: '1rem',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      color: props.color,
    },
    line: {
      height:'1px',
      width:'90%',
      background: props.color,
    },
    text: {
      padding: '0.5rem',
    }
  }  
  
  return (
    <div style={styles.footer}>
      <div style={styles.line}>
      </div>
      <div style={styles.text}>{props.title} created by Riya Parikh &copy; 2020
      </div>
    </div>
  )
}

Footer.defaultProps = {
  color: 'black',
  title: 'Rentickly'
}

