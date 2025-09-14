import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // dark mode look
    primary: {
      main: '#1976d2', // blue accent
    },
    secondary: {
      main: '#ff4081', // pink accent
    },
    background: {
      default: '#0d1117', // dark background
      paper: '#161b22', // card background
    },
    text: {
      primary: '#e6edf3',
      secondary: '#8b949e',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          border: '1px solid rgba(255,255,255,0.1)',
        },
      },
    },
  },
});

export default theme;
