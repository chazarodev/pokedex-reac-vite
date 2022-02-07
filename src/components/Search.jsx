
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Search = ({handleSubmit}) => {

    const searchSchema = Yup.object().shape({
        pokemonsNumber: Yup.number().integer('Number must be an integer').positive('Number must be greater than zero').typeError('It is not a valid number').required('Type a number')
    })

    return (
        <>
            <div>
                <h1 className='font-sans text-2xl text-center laptop:text-left text-white font-bold mt-5'>Search a Pokemon by his number</h1>
                <Formik
                    initialValues={{
                        pokemonsNumber: '',
                    }}
                    enableReinitialize={true}
                    onSubmit={ async (values, {resetForm}) => {
                        await handleSubmit(values)
                        resetForm
                    }}
                    validationSchema={searchSchema}
                >
                    {({errors}) => (
                        <Form className='mt-2'>
                            <div className='flex flex-wrap justify-center laptop:justify-start'>
                                <div>
                                    <Field
                                        className='mt-1 mx-2 movilsm:mx-0 p-5 block w-full movilsm:w-[208px] rounded-l-lg border-l-4 border-borde focus:ring-1 focus:ring-borde focus:outline-none' 
                                        type='number'
                                        placeholder='Ej. 25'
                                        name='pokemonsNumber'
                                    />
                                </div>
                                <input 
                                    type="submit" 
                                    value={'GO!'}
                                    className='mt-1 mx-2 movilsm:mx-0  font-bold w-3/12 p-1 rounded-r-lg bg-btn hover:bg-encabezado shadow-md cursor-pointer border-r-4 border-borde transition-all'
                                />
                            </div>
                            {errors.pokemonsNumber && (
                                <ErrorMessage 
                                    name='pokemonsNumber'  
                                    component='div' 
                                    className='text-error bg-white p-2 rounded text-2xl mt-2 w-full text-center laptop:text-left laptop:w-1/2 font-sans font-bold shadow-md transition-all'
                                />
                            )}
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default Search
