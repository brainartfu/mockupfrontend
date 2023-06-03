import {useState} from 'react';
import { LoginRequest } from 'src/backend/auth';
import {Link, useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setpassword] = useState<string>('');
    const onChange = (e:any, type:string) =>{
        switch (type) {
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
            email: email,
            password : password
        }
        const result = await LoginRequest(data);
        console.log(result);
        if ( result.error ){
            alert(result.meassage);
            return ;
        } else if ( !result.email) {
            alert(result);
        } else {
            alert('successed login');
            navigate('/dashboard');
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
                    <div className='form-group mt-5'>
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
                        Don't you have account? please <Link style={{
                            textDecoration:'none',
                            color : '#27ff00',
                            fontWeight:'900'
                        }} to='/signup'>Sign up</Link>
                    </div>
                    <div className='form-group mt-5' style={{
                        textAlign:'right'
                    }}>
                        <button
                            className='btn btn-info'
                            type='submit'
                        >Login</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;