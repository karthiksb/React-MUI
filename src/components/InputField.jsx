import { TextField } from '@mui/material'
import PropTypes from 'prop-types'; 

function InputField(prop) {
    return (
        <TextField
            required
            fullWidth
            id="textField"
            {...prop}
        >
        </TextField>
    )
}

InputField.propTypes = {
    label: PropTypes.string.isRequired 
};


export default InputField