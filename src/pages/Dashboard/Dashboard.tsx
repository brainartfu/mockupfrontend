import {useState} from 'react';
import {Link} from 'react-router-dom';

import Brand from 'src/assets/img/brand.png';
import { SearchCollectionRequest } from 'src/backend/nft';

const Dashboard = () => {
    const [idname, setIdname] = useState<string>('');
    const [apilist, setApilist] = useState<any>([]);
    const [apistatus, setApistatus] = useState<any>([]);

    const onSubmit = async(e:any) => {
        e.preventDefault();
        if ( apilist.length === 0 ) {
            alert('please add Id lists');
            return ;
        }
        const result = await SearchCollectionRequest(apilist);
        if ( result.error ){
            alert(result.meassage);
        } else {
            setApistatus(result);
        }
    }

    const handleChange = (e:any) => {
        setIdname(e.target.value);
    }

    const handleAddClick = () => {
        if ( idname.trim().length === 0) return ;
        setApilist([...apilist, idname]);
        setIdname('');
    }

    return (
        <>
            <div className="container">
                <form onSubmit={onSubmit} style={{
                    maxWidth:'800px',
                    margin:'auto',
                    padding:'40px',
                    paddingTop:'0px',
                    marginTop:'100px',
                    borderRadius:"10px",
                    boxShadow:'1px 1px 10px black'
                }}>
                    <div style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-between'
                    }}>
                        <img src={Brand} style = {{
                            width:'50%'
                        }}alt = "Liquidium" />
                        <Link to='/dashboard/create' style={{
                            textDecoration: 'none',
                            fontSize: '25px',
                            fontWeight: '900',
                            marginTop: '65px',
                            color: '#5095f7'
                        }}>CREATE</Link>
                    </div>
                    <div className='form-group' style={{
                        display: 'flex',
                        justifyContent:'space-between',
                        paddingBottom:'5px',
                        gap:'5px',
                    }}>
                        <input 
                            name='idname'
                            className='form-control text-center'
                            style={{
                                borderRadius:'3px',
                                fontSize: "20px",
                                fontFamily: "cursive",
                            }}
                            placeholder='Add Id option'
                            onChange={handleChange}
                            value={idname}
                        />
                        <button className='btn btn-success' onClick={handleAddClick} type='button'>Add</button>
                    </div>
                    <div className = 'form-group mt-1'>
                        <ul style={{
                            listStyleType: "none",
                            fontSize: "20px",
                            fontFamily: "cursive",
                            color: "#8fef38"
                        }}>
                            {
                                apilist.length > 0 ?
                                apilist.map((row:string, id:number) => (
                                    <li style={{
                                        marginTop:'5px',
                                        display:'flex',
                                        flexDirection:'row',
                                        justifyContent:'space-between'
                                    }} key = {id}>
                                        <label>{row}</label>
                                        <label style={{
                                            color: 'red'
                                        }}>{apistatus[id]}</label>
                                    </li>
                                )):
                                <li className='text-center'>Here are Id lists</li>
                            }
                        </ul>
                    </div>
                    <div className='form-group mt-5' style={{
                        textAlign:'right'
                    }}>
                        <button
                            className='btn btn-success'
                            type='submit'
                        >CHECK</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Dashboard;