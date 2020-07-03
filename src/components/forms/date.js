import moment from "moment";
import MomentUtils from "@date-io/moment";
import MoreIcon from "@material-ui/icons/MoreVert";
import React, { useState, useCallback } from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import "moment/locale/fr";
import "moment/locale/ru";

moment.locale("fr"); // it is required to select default locale manually

const localeMap = {
  en: "en",
 
};

function MomentLocalizationExample() {
  const [locale, setLocale] = useState("en");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDate, handleDateChange] = useState(new Date());

  const handleMenuOpen = useCallback(e => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  }, []);

  const selectLocale = useCallback(locale => {
    moment.locale(locale);

    setLocale(locale);
    setAnchorEl(null);
  }, []);

  return (
    <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale={locale}>
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

      <Menu
        id="locale-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {Object.keys(localeMap).map(localeItem => (
          <MenuItem
            key={localeItem}
            selected={localeItem === locale}
            onClick={() => selectLocale(localeItem)}
          >
            {localeItem}
          </MenuItem>
        ))}
      </Menu>
    </MuiPickersUtilsProvider>
  );
}

export default MomentLocalizationExample;