const globals = {
  font: {
    fontFamily: 'IBM Plex Mono',
    fontSize: '12px'
  },
  layout: {
    columnSize: 'calc(100vw / 12)',
  },
  bp: {
    print: 'print',
    sm: 'screen and (max-width: 720px)',
    md: 'screen and (max-width: 1220px)',
    lg: 'screen and (max-width: 1480px)',
  }
};

export const light = {
  ...globals,
  colors: {
    background: 'white',
    primary: 'slateblue',
    font: 'rgb(44, 43, 51)'
  }
}

export const dark = {
  ...globals,
  colors: {
    background: 'rgb(44, 43, 51)',
    primary: 'rgb(130, 119, 208)',
    font: 'white'
  }
};