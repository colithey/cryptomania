import { FC } from 'react';
import style from './Auth.module.scss';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../api/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export interface AuthProps {}

const authSchema = Yup.object().shape({
  login: Yup.string()
    .min(4, 'Недостаточная длина логина')
    .max(16, 'Длина логина превышает 16 символов')
    .matches(/^[a-zA-Z][a-zA-Z0-9]*$/, 'Введите логин латинскими символами')
    .required('Обязательное поле'),
  password: Yup.string()
    .min(6, 'Недостаточная длина')
    .required('Обязательное поле'),
});

export interface IFormValues {
  login: string;
  password: string;
}

const Auth: FC<AuthProps> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialFormValues: IFormValues = {
    login: '',
    password: '',
  };

  const handleSubmit = (values: IFormValues) => {
    if (values.login === 'admin' && values.password === '123456') {
      dispatch(login());
      console.log('Logged in:', values.login); // Для отладки
      navigate('/');
    } else {
      console.log('Данные не верны');
    }
  };

  return (
    <div className={style.auth}>
      <Formik
        validationSchema={authSchema}
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={style.formikForm}>
            <h2 className={style.title}>Авторизация</h2>
            <div className={style.formGroup}>
              <Field name="login" className={style.field} placeholder="Логин" />
              <span className={style.error}>{errors.login && touched.login ? errors.login : null}</span>
            </div>
            <div className={style.formGroup}>
              <Field name="password" className={style.field} placeholder="Пароль" type="password" />
              <span className={style.error}>{errors.password && touched.password ? errors.password : null}</span>
            </div>
            <button type="submit" className={style.button}>Войти</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Auth;
