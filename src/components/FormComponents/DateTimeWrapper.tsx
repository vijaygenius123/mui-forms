import {FC} from 'react'
import {TextField, TextFieldProps} from "@mui/material";
import {useField} from "formik";


interface IDateTimeWrapper {
    name: string
}

export const DateTimeWrapper: FC<IDateTimeWrapper & TextFieldProps> = ({name, ...otherProps}) => {

    const [field, meta] = useField(name),
        textFieldProps = {
            ...field,
            ...otherProps,
            type: 'date',
            fullWidth: true,
            InputLabelProps: {
                shrink: true
            }
        }

    if (meta.touched && meta.error) {
        textFieldProps.error = true
        textFieldProps.helperText = meta.error
    }

    return (
        <TextField {...textFieldProps}/>
    )
}
