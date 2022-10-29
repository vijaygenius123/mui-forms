import {ChangeEvent, FC} from 'react'
import {MenuItem, TextField, TextFieldProps} from "@mui/material";
import {useField, useFormikContext} from "formik";

interface ISelectFieldWrapper {
    name: string,
    options: Map<string, string>
}

export const SelectFieldWrapper: FC<ISelectFieldWrapper & TextFieldProps> = ({name, options, ...otherProps}) => {

    const [field, meta] = useField(name),
        {setFieldValue} = useFormikContext(),
        handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
            const {value} = evt.target
            setFieldValue(name, value)
        },
        textFieldProps: TextFieldProps = {
            ...field,
            ...otherProps,
            select: true,
            variant: 'outlined',
            fullWidth: true,
            onChange: handleChange
        }

    if (meta.touched && meta.error) {
        textFieldProps.error = true
        textFieldProps.helperText = meta.error
    }
    return (
        <TextField {...textFieldProps}>
            {
                Array.from(options, ([key, value]) =>
                    (
                        <MenuItem key={key} value={key}>
                            {value}
                        </MenuItem>
                    )
                )
            }
        </TextField>
    )
}
