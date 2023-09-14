import React from 'react'
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import axios from 'axios';

const DeleteAllSuggestions = () => {
    const navigate = useNavigate();
    const handleDeleteAllSuggestion = () => {
        axios
            .delete(`http://localhost:5555/suggest/`)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                alert('An Error Happened. Please check console');
                console.log();
            });
    };
    return (
        <div>
            <BackButton />
            <h1 className='text-3xl my-4'>Delete All Suggestions</h1>
            <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
                <h3 className='text-2xl'>Confirm Delete All?</h3>

                <button className='p-4 bg-red-600 text-white m-8 w-full'
                    onClick={handleDeleteAllSuggestion}
                >Yes</button>
            </div>
        </div>
    )
}

export default DeleteAllSuggestions