import './App.css';
import {Button, Container, Grid, Toolbar, Typography} from "@mui/material";
import {Header} from "./components/Header";
import {Formik, Form} from "formik";
import {object, string, date, boolean} from 'yup'
import {TextFieldWrapper} from "./components/FormComponents/TextFieldWrapper";
import {SelectFieldWrapper} from "./components/FormComponents/SelectFieldWrapper";
import CountriesJSON from '../src/data/countries.json'
import {DateTimeWrapper} from "./components/FormComponents/DateTimeWrapper";
import {CheckboxWrapper} from "./components/FormComponents/CheckboxWrapper";

const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    arrivalDate: '',
    departureDate: '',
    message: '',
    termsOfService: false
}

const formValidationSchema = object({
    firstName: string().required('First Name is required'),
    lastName: string().required('Last Name is required'),
    email: string().email('Invalid email').required('Email is required'),
    phone: string().required('phone number is required'),
    addressLine1: string().required('Address Line 1 is required'),
    addressLine2: string(),
    city: string().required('City is required'),
    state: string().required('State is required'),
    country: string().required('Country is required'),
    arrivalDate: date().required('Arrival date is required'),
    departureDate: date().required('Departure date is required'),
    message: string(),
    termsOfService: boolean().oneOf([true], 'Please accept to continue').required('Please accept to continue')
})

const COUNTRIES = new Map(Object.entries(CountriesJSON))

function App() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Header/>
            </Grid>
            <Grid item xs={12}>
                <Toolbar/>
                <Container sx={{
                    mt: 4
                }}>
                    <Formik
                        initialValues={INITIAL_FORM_STATE}
                        validationSchema={formValidationSchema}
                        onSubmit={(values) => {
                            console.log(values)
                        }}>
                        {({isValid}) => (
                            <Form className={'form'}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography>
                                            Your details
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <TextFieldWrapper name={'firstName'} label={"First Name"}/>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextFieldWrapper name={'lastName'} label={"Last Name"}/>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextFieldWrapper name={'email'} label={"Email Address"}/>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextFieldWrapper name={'phone'} label={"Phone Number"}/>
                                    </Grid>


                                    <Grid item xs={12}>
                                        <Typography>
                                            Address
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextFieldWrapper name={'addressLine1'} label={"Address Line 1"}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextFieldWrapper name={'addressLine2'} label={"Address Line 2"}/>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextFieldWrapper name={'city'} label={"City"}/>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextFieldWrapper name={'state'} label={"State"}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <SelectFieldWrapper name={'country'} label={"Country"} options={COUNTRIES}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>
                                            Booking information
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <DateTimeWrapper name={'arrivalDate'} label={"Arrival Date"}/>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <DateTimeWrapper name={'departureDate'} label={"Departure Date"}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextFieldWrapper name={'message'} label={"Message"} multiline rows={4}/>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <CheckboxWrapper name={'termsOfService'} label={"I agree"}
                                                         legend={"Terms of service"}/>
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <Button variant={"outlined"} fullWidth type={"submit"}
                                                disabled={!isValid}>
                                            Submit
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Button variant={"outlined"} fullWidth type={"reset"}
                                                color={"error"}>
                                            Clear
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Container>
            </Grid>
        </Grid>
    );
}

export default App;
