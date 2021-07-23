import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//img
import bg from '../img/new_signup_bg.jpg';
import { motion } from 'framer-motion';
import { fadeIn } from '../animation';
//validation & form handling
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/action/userAction';


let schema = yup.object().shape({
    name: yup.string().required(),
    dob: yup.date('Your date is invalid'),
    email: yup.string().email('Your email is invalid').required(),
    password: yup.string().min(6, 'At least 6 characters required').required(),
});


const myHeight = window.screen.height - 130;
const useStyles = makeStyles((theme) => ({
    cover: {
        background: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        minHeight: myHeight,
        position: 'absolute',
        top: 0,
    },
    container: {
        background: `url(${bg})`,
        width: '100%',
        minHeight: myHeight,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'none',
        paddingTop: theme.spacing(25),
    },
    paper: {
        // paddingTop: theme.spacing(25),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'white',
        padding: theme.spacing(5, 3, 2),
        borderRadius: '10px',
        position: 'relative',
        zIndex: 100
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const dispatch = useDispatch();
    //css material ui
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            name: 'Geralt of Rivia',
            dob: '2007 / 12 / 15',
            email: 'someone@gmail.com',
            password: 'yourpassword',
        },
        validationSchema: schema,
        onSubmit: (value) => {
            console.log(JSON.stringify(value, null, 2));
            dispatch(setUser(value));
        }
    })

    return (
        <motion.div variant={fadeIn} initial='hidden'
            animate='show' className={classes.container}>
            <div className={classes.cover}></div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                    autoComplete="name"
                                    name="name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="dob"
                                    label="Date of Birth (YYYY/MM/DD)"
                                    name="dob"
                                    value={formik.values.dob}
                                    onChange={formik.handleChange}
                                    error={formik.touched.dob && Boolean(formik.errors.dob)}
                                    helperText={formik.touched.dob && 'Please try again'}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </motion.div>
    );
}