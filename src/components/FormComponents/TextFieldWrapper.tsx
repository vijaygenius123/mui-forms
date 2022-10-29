import {TextField, TextFieldProps} from "@mui/material";
import {useField} from "formik";
import {FC} from "react";

interface ITextFieldWrapper  {
    name: string
}

export const TextFieldWrapper:FC<ITextFieldWrapper & TextFieldProps> = ({
    name, ...otherProps
                                 }) => {

    const [field, meta] = useField(name),
        props:TextFieldProps = {
        ...field,
        ...otherProps,
        fullWidth: true,
    }

    if (meta && meta.touched && meta.error) {
        props.error = true
        props.helperText = meta.error
    }

    return (
        <TextField {...props}/>
    )
}
