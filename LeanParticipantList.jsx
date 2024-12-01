import React, { useState } from 'react';
import participants from './Participants'; // Import the participants data

const LeanParticipantList = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Filter participants based on the search or alphabet selection
  const filteredParticipants = participants.filter((participant) =>
    participant.name.startsWith(filter)
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredParticipants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentParticipants = filteredParticipants.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (direction) => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const Avatar = ({ src, alt }) => {
    return <img src={src} alt={alt} style={avatarStyle} />;
  };
  return (
    <div style={{background:'#b9e2ef'}}>
        <div style={headerStyles}>
        <h1 style={{color:'#235460'}}>Participants</h1>
        <button style={weekButtonStyle}>Week # Session #</button>
      </div>
        <div style={participantContenStyle}>
      {/* Alphabet Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px',
  justifyContent:'center' }}>
        {alphabet.map((letter) => (
          <button
            key={letter}
            style={alphaButtonStyles}
            onClick={() => {
              setFilter(letter);
              setCurrentPage(1); // Reset to page 1 when filter changes
            }}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div style={{display:'flex',
  justifyContent:'center'}}><input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setFilter(e.target.value.toUpperCase());
          setCurrentPage(1); // Reset to page 1 when search input changes
        }}
        style={searchInputStyles}
      /></div>
      
       <div style={paginationStyles}> 
       <button
          onClick={() => handlePageChange('prev')}
          disabled={currentPage === 1}
          style={{
            ...pageButtonStyles,
            ...(currentPage === 1 ? disabledButtonStyles : enabledButtonStyles), // Apply disabled style
          }}
        >
        <span
    style={{
      ...upArrowIconStyle,
      borderColor:
        currentPage === 1 ? 'lightgray' : '#dc4e4a', // Change arrow color
    }}
  ></span>
        </button></div>
      {/* Participant List */}
      <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{width:'90%'}} >
        {currentParticipants.map((participant, index) => (
          <div key={index} style={participantStyles}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div> 
                    <img 
                    src={participant.avatar} 
                    alt={`${participant.name}'s avatar`} 
                    style={avatarStyle} />
                </div>
                <div style={{margin:'10px'}}>
                    <strong>{participant.name}</strong>
                    <p style={{margin:'0px',color:'#30c3d9'}}>{participant.conditions.join(', ')}</p>
                </div>
            </div>
            <button style={emailButtonStyles}>📧</button>
          </div>
        ))}
      </div></div>
      

      {/* Pagination Controls */}
      <div style={paginationStyles}> 
        <button
          onClick={() => handlePageChange('next')}
          disabled={currentPage === totalPages || totalPages === 0}
          style={{
            ...pageButtonStyles,
            ...(currentPage === totalPages || totalPages === 0 ? disabledButtonStyles : enabledButtonStyles), // Apply disabled style
          }}
        >
        <span
    style={{
      ...downArrowIconStyle,
      borderColor:
        currentPage === totalPages || totalPages === 0 ? 'lightgray' : '#dc4e4a', // Change arrow color
    }}
  ></span>
        </button>
      </div>
    </div>
    </div>
    
  );
};

// Styles
const avatarStyle = {
    width: '50px', // Adjust size
    height: '50px',
    borderRadius: '50%', // Makes the avatar circular
  };
const headerStyles = {
    padding: '10px 20px',
    display:'flex',
    justifyContent:'space-between',
  };
  const weekButtonStyle = {
    fontSize:'25px',
    color:'white',
    background :'#49a0bb',
    border:'none',
    borderRadius:'15px',
    height:'60px'
  };
const disabledButtonStyles = {
    backgroundColor: 'transparent', // Light gray background for disabled state
    cursor: 'not-allowed', // Change cursor to indicate disabled
    opacity: 0.5, // Reduce opacity
  };
  const participantContenStyle = {
    backgroundColor:'#49a0bb',
    padding:'0,20px',
    borderRadius:'20px',
  }
  const enabledButtonStyles = {
    backgroundColor: 'transparent', // Explicitly reset background to transparent
    border: 'none', // No border when enabled
  };
  const downArrowIconStyle = {
    border: 'solid gray',
    borderWidth: '0 3px 3px 0',
    display: 'inline-block',
    padding: '6px',
    transform: 'rotate(45deg)',
    marginTop: '-10px', // Adjust for centering
  };
  const upArrowIconStyle = {
    border: 'solid gray',
    borderWidth: '3px 0 0 3px',
    display: 'inline-block',
    padding: '6px',
    transform: 'rotate(45deg)',
    marginTop: '5px', // Adjust for centering
  };
  
const alphaButtonStyles = {
  color:'white',
  background: 'transparent',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  alignItems:'centre',
  marginTop: '10px',
};

const searchInputStyles = {
  marginTop: '10px',
  padding: '5px',
  width: '90%',
  borderRadius: '20px',
  border: '1px solid #ccc',
};

const participantStyles = {
  borderRadius:'10px',
  background:'#eff6f8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px',
  marginTop:'10px',
};

const emailButtonStyles = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
};

const paginationStyles = {
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
};

const pageButtonStyles = {
  padding: '5px 10px',
  background: 'transparent',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
};

export default LeanParticipantList;
