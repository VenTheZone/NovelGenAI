import React from 'react';
    import styled from 'styled-components';

    const ApiKeyContainer = styled.div`
      margin-bottom: 20px;
    `;

    const ApiKeyLabel = styled.label`
      display: block;
      margin-bottom: 5px;
      font-family: 'Orbitron', sans-serif;
      color: var(--neon-pink);
      text-shadow: 0 0 5px var(--neon-pink);
    `;

    function ApiKeyInput({ apiKey, setApiKey }) {
      return (
        <ApiKeyContainer>
          <ApiKeyLabel htmlFor="apiKey">OpenRouter API Key:</ApiKeyLabel>
          <input
            className="cyberpunk-input"
            type="text"
            id="apiKey"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your OpenRouter API Key"
          />
        </ApiKeyContainer>
      );
    }

    export default ApiKeyInput;
