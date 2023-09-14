import React, { useState } from 'react'
import BackButton from '../components/BackButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LocationFinder from './LocationFinder';


const addSuggestion = () => {
    const [suggestion, setSuggestion] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const handleSaveSuggestion = () => {
        const data = {
            suggestion,
            name,
        };
        axios
            .post('http://localhost:5555/suggest', data)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                alert('An Error Happened. Please check console');
                console.log(error);
            });
    }


    return (
        <div className='p-4'>
            <BackButton />
            <LocationFinder />
            <h1 className='text-3xl my-4'>Add Suggestion</h1>
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-grey-500'>Suggestion</label>
                    <input type="text"
                        value={suggestion}
                        onChange={(e) => setSuggestion(e.target.value)}
                        className='border-2 border-grey-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-grey-500'>Name</label>
                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='border-2 border-grey-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleSaveSuggestion}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default addSuggestion