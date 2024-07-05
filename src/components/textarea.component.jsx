import { Field, ErrorMessage } from 'formik'
import s from './textarea.module.css'

export const Textarea = ({ name, label, required, ...props }) => {
  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor={name}>
        {required ? `${label}*` : label}
      </label>

      <Field className={s.textarea} as='textarea' name={name} {...props} />

      <ErrorMessage className={s.error} name={name} component='span' />
    </div>
  )
}
