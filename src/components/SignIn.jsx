import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//
import bg from '../img/sign_in_bg.jpg';
import { motion } from 'framer-motion';
import { fadeIn } from '../animation';
//validation & form handling
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/action/userAction';
//router
import { Link } from 'react-router-dom';


let schema = yup.object().shape({
    email: yup.string().email('Your email is invalid').required(),
    password: yup.string().min(6, 'At least 6 characters required').required(),
});


const myHeight = window.screen.height - 125;
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

export default function SignIn() {
    const dispatch = useDispatch()
    const listUsers = useSelector(state => state.users.listUser);
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            email: 'example@gmail.com',
            password: 'fuckyeah',
            name: '',
        },
        validationSchema: schema,
        onSubmit: (value) => {
            console.log(JSON.stringify(value, null, 2));
            const userIndex = listUsers?.findIndex((user) => (user.email === value.email && user.password === value.password))
            //nhieu user dang nhap nhung chi luu gia tri cua user dang nhap cuoi cung
            if (userIndex !== -1) {
                value.name = listUsers[userIndex].name
                localStorage.setItem("credential", JSON.stringify(value));
                return dispatch(userLogin())
            }

            alert('Wrong usernam or password !!!')
        }
    })
    return (
        <motion.div variant={fadeIn} initial='hidden'
            animate='show' className={classes.container}>
            <div className={classes.cover}></div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Link to='/' style={{ position: 'absolute', top: 0, right: 10, fontSize: '2rem' }}>&times;</Link>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
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
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to='/' variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to='signup' variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </motion.div>
    );
}