import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../SearchBar.css'; // Certifique-se de importar o arquivo CSS

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = () => {
        
    }

    const handleSearchSubmit = () => {
        console.log(`Pesquisando por: ${searchTerm}`);
    }

    return (
        <form onSubmit={handleSearchSubmit} className="search-form">
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Pesquisar..." 
                    value={searchTerm} 
                    onChange={(e) =>setSearchTerm(e.target.value)} 
                    className="search-input"
                />
                <SearchIcon className="search-icon" />
            </div>
        </form>
    );
}

export default SearchBar;
