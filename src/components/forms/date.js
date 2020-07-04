import moment from "moment";
import MomentUtils from "@date-io/moment";
import MoreIcon from "@material-ui/icons/MoreVert";
import React, { useState, useCallback } from "react";
import { IconButton} from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";




function MomentLocalizationExample() {
 
  const [anchorEl, setAnchorEl] = useState(null);
  const [startDate,endDate, handleDateChange] = useState(new Date());

  const handleMenuOpen = useCallback(e => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  }, []);
 // const today = moment();
  //    console.log(today.format());
  const dateA = moment({startDate});
  const dateB = moment(endDate);
  
  console.log(dateA.diff(dateB, 'days'));
  

  return (
    <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} >
      <DatePicker
        value={startDate}
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
      <DatePicker
        value={endDate}
        onChange={date1 => handleDateChange(date1)}
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