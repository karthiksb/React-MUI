import { Button } from '@mui/material'
import PropTypes from 'prop-types'; 

function ButtonInput({sx, ...prop}) {
    return (
        <Button
        sx={{
            backgroundColor:'orange',
            ...sx
        }}
        {...prop}>
            {prop.children}
        </Button>
    )
}

ButtonInput.propTypes = {
    children: PropTypes.node,
    sx:PropTypes.object
};


export default ButtonInput