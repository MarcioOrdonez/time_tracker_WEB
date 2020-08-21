import React from 'react';
import Input from '../../components/Input';

function Register(){
    return(
        <div id="page-register">
            <main>
                <fieldset>
                    <legend>Sing up</legend>
                    <Input name='name' label='Name' placeholder='Jhon Doe' />
                    <Input name='email' label='Email' placeholder='Jhon_Doe@email.com' />
                    <Input name='password' label='Password' placeholder='*********' />
                </fieldset>
            </main>
        </div>
    )
}

export default Register;