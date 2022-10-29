import {
    Checkbox,
    CheckboxProps,
    FormControl,
    FormControlLabel,
    FormControlProps,
    FormGroup,
    FormLabel
} from "@mui/material";
import {useField, useFormikContext} from "formik";
import {ChangeEvent, FC} from "react";

interface ICheckboxWrapper {
    name: string,
    label: string
    legend: string
}

export const CheckboxWrapper: FC<ICheckboxWrapper & CheckboxProps> = ({name, label, legend, ...otherProps}) => {
    const {setFieldValue} = useFormikContext(),
        [field, meta] = useField(name),
        handleChange = (evt: ChangeEvent<any>) => {
            const {checked} = evt.target
            setFieldValue(name, checked)
        },
        checkBoxProps = {
            ...field,
            ...otherProps,
            onClick: handleChange
        },
        formControlProps: FormControlProps = {}

    if (meta.touched && meta.error) {
        formControlProps.error = true
    }


    return (
        <FormControl {...formControlProps}>
            <FormLabel component="legend">{legend}</FormLabel>
            <FormGroup>
                <FormControlLabel control={<Checkbox {...checkBoxProps}/>} label={label}/>
            </FormGroup>
        </FormControl>
    )
}
