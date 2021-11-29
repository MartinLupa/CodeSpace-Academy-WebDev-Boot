// Complete set of tutorials: https://www.youtube.com/watch?v=dWKPkGDe9pw&list=PLC3y8-rFHvwiPmFbtzEWjESkqBVDbdgGu&index=10
// Next to watch: 10

import { useFormik } from 'formik';

const initialValues = { name: '', email: '', channel: '' };
const onSubmit = (values) => {
  console.log('Form data: ', values);
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
    // Email validation using regex (Regular Expression)
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format';
  }

  if (!values.channel) {
    errors.channel = 'Required';
  }

  return errors;
};

export default function YouTubeForm() {
  // Formik hook
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log('Visited fields: ', formik.touched);
  return (
    <form className="form-container" onSubmit={formik.handleSubmit} action="">
      <div className="form-control">
        <label htmlFor="name">
          <b>Name</b>
        </label>
        <input
          type="text"
          id="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {/* Conditional rendering of errors */}
        {formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="form-control">
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="form-control">
        <label htmlFor="channel">
          <b>Channel</b>
        </label>
        <input
          type="text"
          id="channel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.channel}
        />
        {formik.errors.channel ? (
          <div className="error">{formik.errors.channel}</div>
        ) : null}
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}
