import { Field, ErrorMessage } from 'formik'
import s from './input.module.css'

export const Input = ({ name, label, required, ...props }) => {
  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor={name}>
        {required ? `${label}*` : label}
      </label>

      <Field className={s.input} name={name} {...props} />

      <ErrorMessage className={s.error} name={name} component='span' />
    </div>
  )
}

//o componente Field do Formik representa a tag input e eu preciso receber o name para poder vincular aos values quando for tratar e validar os dados recebidos
//o componente ErrorMessage é o componente que irá mostrar uma mensagem de invalidação de dados caso necessário para o ususário