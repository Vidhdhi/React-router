import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
 primary: {
     main:'#4DB6AC',
     contrastText:'#fff'
 },
secondary: {
    main:'#00bcd4'
},
typography:{
    fontFamily:'PT Sans'
},
    }



});

export default theme;