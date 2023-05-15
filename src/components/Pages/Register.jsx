import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import styled from "styled-components";

const StyledMain = styled.main`
  height: calc(100vh - 250px);

  h1{
    text-align: center;
  }
  form{
    position: relative;
    margin: 100px auto;
    width: 400px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    box-shadow: 0 0 4px;
  }
  input{
    height: 23px;
    width: 230px;
  }
  a > input{
    background-color: #fbcc00;
    width: 100px;
    border-radius: 6px;
  }
`;

const Register = () => {

    const values = {
        email: '',
        password: '',
        repeatPassword: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Privaloma nurodyti egzistuojantį email')
            .email('Laukelis privalomas'),
        password: Yup.string()
            .matches(
                "^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$",
                "Turi būti 8 simboliai, viena didžioji raidė, viena mažoji raidė, vienas skaičius ir vienas specialus simbolis"
            )
            .required('Laukelis privalomas'),
        repeatPassword: Yup.mixed()
            .oneOf([Yup.ref('password'), null], 'Slaptažodžiai privalo sutapti')
            .required('Laukelis privalomas')
    });

    const formik = useFormik({
        initialValues: values,
        validationSchema: validationSchema,
        onSubmit: () => {
            console.log(values);
        }
    });


    return ( 
        <StyledMain>
            <h1>Registracija</h1>
            <form onSubmit={formik.handleSubmit}>
                <input 
                    type="text"
                    name="email" id="email" 
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Email"
                />
                {
                    formik.touched.email && formik.errors.email && 
                    <p
                        style={{ color: 'red' }}
                    >{formik.errors.email}</p>
                }

                <input 
                    type="paswword" 
                    name="password" id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Password"
                />
                {
                    formik.touched.password && formik.errors.password &&
                    <p
                        style={{color: 'red' }}
                    >{formik.errors.password}</p>
                }

                <input type="password" 
                    name="repeatPassword" id="repeatPassword"
                    value={formik.values.repeatPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Repeat password"
                />
                {
                    formik.touched.repeatPassword && formik.errors.repeatPassword &&
                    <p
                        style={{ color: 'red' }}
                    >{formik.errors.repeatPassword}</p>
                }
                <NavLink to="/home"><input type="submit" value="Registruotis"/></NavLink>
            </form>
        </StyledMain>
     );
}
 
export default Register;