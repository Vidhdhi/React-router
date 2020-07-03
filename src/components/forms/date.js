import moment from "moment";
import MomentUtils from "@date-io/moment";
import MoreIcon from "@material-ui/icons/MoreVert";
import React, { useState, useCallback } from "react";
import { IconButton} from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";


moment.locale("fr"); // it is required to select default locale manually


function MomentLocalizationExample() {
 
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDate, handleDateChange] = useState(new Date());

  const handleMenuOpen = useCallback(e => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  }, []);
 // const today = moment();
  //    console.log(today.format());
  const dateA = moment('10-01-2001', 'DD-MM-YYYY');
  const dateB = moment('01-01-2001', 'DD-MM-YYYY');
  
  console.log(dateA.diff(dateB, 'days'));
  

  return (
    <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} >
      <DatePicker
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        InputProps={{
          endAdornment: (
            <IconButton
              aria-label="Select locale"
              onClick={handleMenuOpen}
              aria-owns={anchorEl ? "locale-menu" : undefined}
            >
              <MoreIcon />
            </IconButton>
          ),
        }}
      />

     
    </MuiPickersUtilsProvider>
    
  );
}

export default MomentLocalizationExample;