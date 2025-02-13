import React from 'react';
    import styled from 'styled-components';

    const Card = styled.div`
      width: 100%;
      padding: 20px;
    `;

    const Title = styled.h2`
      font-family: 'Orbitron', sans-serif;
      color: var(--neon-pink);
      text-shadow: 0 0 10px var(--neon-pink);
      margin-bottom: 15px;
    `;

    const InputLabel = styled.label`
        display: block;
        margin-bottom: 5px;
        font-family: 'Orbitron', sans-serif;
        color: var(--neon-pink);
        text-shadow: 0 0 5px var(--neon-pink);
    `;

    function CharacterCard({ character, setCharacter }) {
      const handleChange = (e) => {
        setCharacter({
          ...character,
          [e.target.name]: e.target.value
        });
      };

      return (
        <Card>
          <Title>Character Profile</Title>
          <InputLabel htmlFor="name">Character Name:</InputLabel>
          <input
            className="cyberpunk-input"
            type="text"
            name="name"
            id="name"
            placeholder="Enter Character Name"
            value={character.name}
            onChange={handleChange}
          />
          <InputLabel htmlFor="personality">Personality Traits:</InputLabel>
          <textarea
            className="cyberpunk-input"
            name="personality"
            id="personality"
            placeholder="Enter Personality Traits (e.g., cynical, witty, resourceful)"
            value={character.personality}
            onChange={handleChange}
            rows="3"
          />
          <InputLabel htmlFor="writingStyle">Writing Style:</InputLabel>
          <textarea
            className="cyberpunk-input"
            name="writingStyle"
            id="writingStyle"
            placeholder="Enter Writing Style (e.g., noir, humorous, descriptive)"
            value={character.writingStyle}
            onChange={handleChange}
            rows="3"
          />
        </Card>
      );
    }

    export default CharacterCard;
