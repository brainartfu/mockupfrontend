import {useState} from 'react';
import { SignupRequest } from 'src/backend/auth';
import {Link, useNavigate} from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setpassword] = useState<string>('');
    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const onChange = (e:any, type:string) =>{
        switch (type) {
            case 'firstname':
                return setFirstname(e.target.value);
            case 'lastname':
                return setLastname(e.target.value);
            case 'email':
                return setEmail(e.target.value);
            case 'password':
                return setpassword(e.target.value);
            default:
                break;
        }
    }

    const onSubmit = async(e:any) => {
        e.preventDefault();
        const data = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password : password
        }
        const result = await SignupRequest(data);
        if ( result.error ) {
            alert(result.message);
        } else {
            navigate('/');
        }
    }

    return (
        <>
            <div className="container">
                <form onSubmit={onSubmit} style={{
                    maxWidth:'800px',
                    margin:'auto',
                    backgroundColor:'#6b7a89',
                    padding:'30px',
                    marginTop:'100px',
                    borderRadius:"10px",
                    boxShadow:'1px 1px 10px black'
                }}>
                    <div className='row mt-5'>
                        <div className='col-md-6'>
                            <label htmlFor='firstname'>Firstname</label>
                            <input
                                id='firstname'
                                className='form-control'
                                name='firstname'
                                value={firstname} 
                                onChange={(e)=>onChange(e, 'firstname')}
                            />
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='lastname'>Lastname</label>
                            <input
                                id='lastname'
                                className='form-control'
                                name='lastname'
                                value={lastname} 
                                onChange={(e)=>onChange(e, 'lastname')}
                            />
                        </div>
                    </div>
                    <div className='form-group mt-1'>
                        <label htmlFor='email'>Email</label>
                        <input
                            id='email'
                            className='form-control'
                            name='email'
                            value={email} 
                            onChange={(e)=>onChange(e, 'email')}
                        />
                    </div>
                    <div className = 'form-group mt-1'>
                        <label htmlFor='password'>Password</label>
                        <input
                            id='password'
                            className='form-control'
                            name='password'
                            type='password'
                            value={password}
                            onChange={(e)=> onChange(e,'password')}
                        />
                    </div>
                    <div className = 'form-group mt-1'>
                        Do you have already account? please <Link style={{
                            textDecoration:'none',
                            color : '#27ff00',
                            fontWeight:'900'
                        }} to='/login'>Log in</Link>
                    </div>
                    <div className='form-group mt-5' style={{
                        textAlign:'right'
                    }}>
                        <button
                            className='btn btn-info'
                            type='submit'
                        >Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Signup;