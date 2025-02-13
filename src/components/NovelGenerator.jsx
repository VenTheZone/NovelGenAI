import React, { useState, useEffect } from 'react';
    import styled from 'styled-components';
    import ApiKeyInput from './ApiKeyInput';

    const Container = styled.div`
      flex: 1;
      padding: 20px;
      overflow-y: auto;
    `;

    const InputLabel = styled.label`
      display: block;
      margin-bottom: 5px;
      font-family: 'Orbitron', sans-serif;
      color: var(--neon-pink);
      text-shadow: 0 0 5px var(--neon-pink);
    `;

    const PromptInput = styled.textarea`
      width: 100%;
      min-height: 120px;
      margin-bottom: 20px;
    `;

    const Output = styled.div`
      white-space: pre-wrap;
      background: rgba(0, 0, 0, 0.5);
      padding: 20px;
      border: 2px solid var(--neon-blue);
      box-shadow: 0 0 10px var(--neon-blue);
      overflow-y: auto;
      max-height: 400px;
      border-radius: 10px;
    `;

    const ButtonContainer = styled.div`
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    `;

    const GenerateButton = styled.button`
      background: transparent;
      border: 2px solid var(--neon-blue);
      color: var(--neon-blue);
      padding: 10px 20px;
      font-family: 'Orbitron', sans-serif;
      cursor: pointer;
      transition: all 0.3s ease;
      border-radius: 5px;
      &:hover {
        background: var(--neon-blue);
        color: var(--dark-bg);
        box-shadow: 0 0 15px var(--neon-blue);
      }
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `;

    const SaveButton = styled(GenerateButton)`
      border-color: var(--neon-pink);
      color: var(--neon-pink);
      &:hover {
        background: var(--neon-pink);
        box-shadow: 0 0 15px var(--neon-pink);
      }
    `;

    const GeneratingText = styled.span`
      font-family: 'Orbitron', sans-serif;
      color: var(--neon-blue);
      margin-left: 10px;
    `;

    function NovelGenerator({ character, chapters, onChapterGenerated, onChapterSaved }) {
      const [prompt, setPrompt] = useState('');
      const [output, setOutput] = useState('');
      const [isLoading, setIsLoading] = useState(false);
      const [apiKey, setApiKey] = useState('');
      const [chapterTitle, setChapterTitle] = useState('');
      const [isGenerated, setIsGenerated] = useState(false);

      useEffect(() => {
        setIsGenerated(false);
      }, [chapters]);

      const generateNovel = async () => {
        if (!apiKey) {
          setOutput('Please enter your OpenRouter API Key.');
          return;
        }
        if (!chapterTitle) {
          setOutput('Please enter a chapter title.');
          return;
        }

        setIsLoading(true);

        let context = `You are a creative writing assistant. Write in the style of ${character.writingStyle}. The main character is ${character.name} who has these traits: ${character.personality}. You are writing a chapter titled: ${chapterTitle}.\n\n`;

        if (chapters.length > 0) {
          context += "Here are the previous chapters:\n";
          chapters.forEach((chap) => {
            context += `### ${chap.title}\n${chap.content}\n\n`;
          });
        }

        context += `Roadmap/Prompt for this chapter: ${prompt}`;

        try {
          const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${apiKey}`,
              "HTTP-Referer": "http://localhost:5173",
              "X-Title": "NovelGenAI",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "model": "google/gemini-pro",
              "messages": [
                {
                  role: 'system',
                  content: context
                },
              ],
              "top_p": 1,
              "repetition_penalty": 1
            })
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`API Error: ${response.status} - ${errorData.error.message}`);
          }

          const data = await response.json();
          setOutput(data.choices[0].message.content);
          setIsGenerated(true);

        } catch (error) {
          console.error('Error:', error);
          setOutput(`Error generating novel: ${error.message}`);
        } finally {
          setIsLoading(false);
        }
      };

      const handleSaveChapter = () => {
        if (output && chapterTitle) {
          onChapterSaved({ title: chapterTitle, content: output });
          setOutput('');
          setIsGenerated(false);
        }
      };

      return (
        <Container>
          <ApiKeyInput apiKey={apiKey} setApiKey={setApiKey} />

          <InputLabel htmlFor="chapterTitle">Chapter Title:</InputLabel>
          <input
            className="cyberpunk-input"
            type="text"
            id="chapterTitle"
            placeholder="Enter Chapter Title"
            value={chapterTitle}
            onChange={(e) => setChapterTitle(e.target.value)}
          />

          <InputLabel htmlFor="roadmap">Story Roadmap/Prompt:</InputLabel>
          <PromptInput
            className="cyberpunk-input"
            id="roadmap"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your story roadmap - be as detailed as possible!"
          />
          <ButtonContainer>
            <GenerateButton
              onClick={generateNovel}
              disabled={isLoading}
            >
              {isLoading ? 'Generating...' : 'Generate Chapter'}
            </GenerateButton>
            <SaveButton
              onClick={handleSaveChapter}
              disabled={!isGenerated || isLoading}
            >
              Save Chapter
            </SaveButton>
            {isLoading && <GeneratingText>Generating...</GeneratingText>}
          </ButtonContainer>

          <Output>{output}</Output>
        </Container>
      );
    }

    export default NovelGenerator;
