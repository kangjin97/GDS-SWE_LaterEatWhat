// SuggestionForm.js
import React from 'react';

function SuggestionForm({ suggestion, name, setSuggestion, setName, handleSaveSuggestion }) {
  return (
    <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
      <div className='my-4'>
        <label className='text-xl mr-4 text-grey-500'>Suggestion</label>
        <input
          type="text"
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          className='border-2 border-grey-500 px-4 py-2 w-full'
        />
      </div>
      <div className='my-4'>
        <label className='text-xl mr-4 text-grey-500'>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border-2 border-grey-500 px-4 py-2 w-full'
        />
      </div>
      <button className='p-2 bg-sky-300 m-8' onClick={handleSaveSuggestion}>
        Save
      </button>
    </div>
  );
}

export default SuggestionForm;
