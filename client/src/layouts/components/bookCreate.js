import React from "react";
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
const BookList = props => {
  return props.bookDetails.map((val, idx) => {
    let 
      key = `key-${idx}`,
      Value = `Value-${idx}`,
      description = `description-${idx}`;
    return (
      <div className="form-row" type={val.index}>
        <form className="export1" name="export1">
        <div className="col">
          <Box component="span" m={2}>
            <TextField label="key" variant="outlined" size="small" type="text"
            className="form-control"
            placeholder="key"
            name="key"
            id={key}
            data-id={idx}/></Box>
          <Box component="span" m={2}>
            <TextField  label="Value" variant="outlined" size="small" className="form-control"
            placeholder="Value"
            id={Value}
            name= "Value"
            data-id={idx}/></Box>
          <Box component="span" m={2}>
        <   TextField name="description" label="description" variant="outlined" size="small"
            className="form-control"
            placeholder="description"
            name="description"
            data-id={idx}
            id={description}/></Box>
        </div>
        </form>
        <div className="col p-4">
          {idx === 0 ? ( 
            <Box m={3}><Button  className="btn btn-primary text-center" type="button" variant="contained" color="primary" size="large" onClick={() => props.add()} className="btn btn-primary text-center">+<i className="fa fa-plus-circle" aria-hidden="true" /></Button>
            </Box>   
          ) : (
            <Box m={3}>
            <Button className="btn btn-danger" onClick={() => props.delete(val)} variant="contained" color="primary" size="large" type="button">-</Button></Box>
          )}
        </div>
      </div>
    );
  });
};
export default BookList;