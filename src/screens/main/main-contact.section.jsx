import axios from 'axios'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import detail from '../../assets/images/detail.png'
import { SectionTitle, Input, Textarea, Button } from '../../components'
import s from './main-contact.module.css'

export const MainContactSection = () => {
  const formInitialValues = {
    name: '',
    email: '',
    age: '',
    cep: '',
    message: ''
  }

  const formValidationSchema = Yup.object({
    name: Yup.string().required('O nome é obrigatório.'),
    email: Yup.string()
      .email('Formato de e-mail inválido.')
      .required('O e-mail é obrigatório.'),
    age: Yup.number()
      .typeError('A idade deve conter apenas números.')
      .integer('A idade deve ser um número inteiro.')
      .min(1, 'Idade inválida.')
      .max(150, 'Idade inválida.'),
    cep: Yup.string()
      .matches(/^\d{5}-\d{3}$/, 'O CEP deve possuir o formato 00000-000.')
      .required('O CEP é obrigatório.'),
    message: Yup.string().required('A mensagem é obrigatória.')
  })

  const handleFormSubmit = async (formValues) => {
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${formValues.cep}/json`
      )
      const responseData = response.data

      const dataToSubmit = {
        name: formValues.name,
        email: formValues.email,
        age: formValues.age,
        cep: formValues.cep,
        message: formValues.message,
        street: responseData.logradouro,
        district: responseData.bairro,
        city: responseData.localidade,
        state: responseData.uf
      }

      /* await axios.post(
        `api`, dataToSubmit
      ) */

      console.log(dataToSubmit)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section>
      <div className={s.container}>
        <div className={s.content}>
          <SectionTitle>Fale com a gente!</SectionTitle>

          <Formik
            initialValues={formInitialValues}
            validationSchema={formValidationSchema}
            onSubmit={handleFormSubmit}
          >
            {({ isValid }) => (
              <Form className={s.form}>
                <div className={s.inputsWrapper}>
                  <div className={s.inputs}>
                    <Input name='name' label='Nome' required />
                    <Input name='email' label='E-mail' required />
                    <Input name='age' label='Idade' />
                    <Input name='cep' label='CEP' required />
                  </div>

                  <Textarea name='message' label='Mensagem' required />
                </div>

                <Button type='submit' disabled={!isValid}>
                  Enviar
                </Button>
              </Form>
            )}
          </Formik>
        </div>

        <img className={s.detail} src={detail} alt='' />
      </div>
    </section>
  )
}
