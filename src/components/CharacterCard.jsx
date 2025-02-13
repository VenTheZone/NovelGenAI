import React from 'react';
    import styled from 'styled-components';

    const Card = styled.div`
      width: 100%; /* Full width on mobile */
      padding: 20px;
    `;

    const Title = styled.h2`
      font-family: 'Orbitron', sans-serif;
      color: var(--neon-pink);
      text-shadow: 0 0 10px var(--neon-pink);
      margin-bottom: 15px;
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
          <input
            className="cyberpunk-input"
            type="text"
            name="name"
            placeholder="Character Name"
            value={character.name}
            onChange={handleChange}
          />
          <textarea
            className="cyberpunk-input"
            name="personality"
            placeholder="Personality Traits"
            value={character.personality}
            onChange={handleChange}
            rows="3"
          />
          <textarea
            className="cyberpunk-input"
            name="writingStyle"
            placeholder="Writing Style"
            value={character.writingStyle}
            onChange={handleChange}
            rows="3"
          />
        </Card>
      );
    }

    export default CharacterCard;
