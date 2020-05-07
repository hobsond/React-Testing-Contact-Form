import React from 'react';
import {render,fireEvent} from '@testing-library/react'
import ContactForm from './ContactForm'

test('conact form rendered without error',()=>{
    render(<ContactForm/>)
})

test('contactform and inputs render to page',()=>{
    const {getByText,getByAltText,container} = render(<ContactForm/>)

    const firstname = getByText(/first name/i);
    const lastname = getByText(/last name/i);

    const email = getByText(/email/i);
    const message = getByText(/message/i);

    // const submit = getByAltText(/submit/i);
    const cont = container.querySelector('[type = "submit"]')



    expect(firstname).toBeInTheDocument()
    expect(lastname).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(message).toBeInTheDocument()
    
    expect(cont).toBeInTheDocument()
})

test('test input text ',()=>{
    const inputTest = {
        fname:'rick',
        lname:'james',
        email:'hitstick@gmail.com',
        message:'im rick james'

    }
    const {getByText,getByPlaceholderText,container} = render(<ContactForm/>)
    const fnameInput = container.querySelector('[name = "firstName"]')
 
    fireEvent.change(fnameInput,{target:{value:inputTest.fname}})
    
    
    
})