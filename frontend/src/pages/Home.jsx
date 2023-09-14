import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import { Suggestion } from '../../../Backend/models/eatSession';
import '../RandomGenerator.css';

const home = () => {
    const [suggestions, setSuggestions] = useState([]);
    axios
        .get('http://localhost:5555/suggest')
        .then((response) => {
            setSuggestions(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });

    const [selectedSuggestion, setSelectedSuggestion] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleRandomPick = () => {
        if (suggestions.length === 0) return;

        setIsAnimating(true);

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * suggestions.length);
            setSelectedSuggestion(suggestions[randomIndex].suggestion);
            setIsAnimating(false);
        }, 3000); // Simulated animation duration (3 seconds)
    };


    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Later Eat What</h1>
                <Link to='/suggest/add'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>

            <table className='w-full border-separate border-spacing-2'>
                <thead>
                    <tr>
                        <th className='border border-slate-600 rounded-md'>No</th>
                        <th className='border border-slate-600 rounded-md max-md:hidden'>
                            Suggestion
                        </th>
                        <th className='border border-slate-600 rounded-md max-md:hidden'>
                            Name
                        </th>
                        <th className='border border-slate-600 rounded-md'>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {suggestions.map((suggestion, index) => (
                        <tr key={suggestion._id} className='h-8'>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {index + 1}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                {suggestion.suggestion}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                {suggestion.name}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                <div className='flex justify-center gap-x-4'>
                                    <Link to={`/suggest/delete/${suggestion._id}`}>
                                        <MdOutlineDelete className='text-2xl text-red-600' />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="container mx-auto text-center mt-8">
                <Link to={'/suggest/deleteall'}>
                    <button className='px-4 py-2 bg-blue-500 text-white rounded-md text-lg'>Clear All Records</button>
                </Link>
            </div>

            <div className="container mx-auto text-center mt-8">
                <button
                    className={`px-4 py-2 bg-blue-500 text-white rounded-md text-lg ${isAnimating ? 'cursor-not-allowed opacity-50' : ''
                        }`}
                    onClick={handleRandomPick}
                    disabled={isAnimating}
                >
                    {isAnimating ? 'Picking...' : 'Pick a Suggestion'}
                </button>
                <div className={`suggestion mt-8 ${isAnimating ? 'animate-spin' : ''}`}>
                    {selectedSuggestion}
                </div>
            </div>
        </div>
    )
};

export default home;