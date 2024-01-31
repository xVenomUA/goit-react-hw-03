import css from "./ContactForm.module.css";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required name"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required number")
    .matches(/^[0-9-+]+$/, "Must be only digits"),
});
const initialValues = {
  name: "",
  number: "",
};
export const ConctactForm = ({ handleAddContact }) => {
  const idName = useId();
  const idNumber = useId();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleAddContact}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <div className={css.divName}>
            <label htmlFor={idName}>Name</label>
            <Field type="text" name="name" id={idName} className={css.fieldInput} />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          <div className={css.divNumber}>
            <label htmlFor={idNumber}>Number</label>
            <Field
              type="text"
              name="number"
              id={idNumber}
              className={css.fieldInput}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>
        </div>
        <button type="submit" className={css.btn}>Add contact</button>
      </Form>
    </Formik>
  );
};
