import React, { useState } from 'react';
    import { createGlobalStyle } from 'styled-components';
    import NovelGenerator from './components/NovelGenerator';
    import CharacterCard from './components/CharacterCard';
    import ChapterLibrary from './components/ChapterLibrary';
    import styled, { keyframes } from 'styled-components';

    const neonGlow = keyframes`
      from {
        text-shadow: 0 0 5px var(--neon-blue), 0 0 10px var(--neon-blue), 0 0 15px var(--neon-blue);
      }
      to {
        text-shadow: 0 0 10px var(--neon-blue), 0 0 20px var(--neon-blue), 0 0 30px var(--neon-blue);
      }
    `;

    const GlobalStyle = createGlobalStyle`
      * {
        box-sizing: border-box;
      }

      body {
        background-color: var(--dark-bg);
        color: var(--neon-blue);
        font-family: 'Roboto Mono', monospace;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      }

      .cyberpunk-input {
        background: rgba(0, 0, 0, 0.5);
        border: 2px solid var(--neon-blue);
        color: var(--neon-blue);
        padding: 10px;
        font-family: 'Roboto Mono', monospace;
        margin: 8px 0;
        width: 100%;
        border-radius: 5px;
        transition: all 0.3s ease;
        &:focus {
          outline: none;
          border-color: var(--neon-pink);
          box-shadow: 0 0 10px var(--neon-pink);
        }
      }

      .cyberpunk-button {
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
      }
    `;

    const AppContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      padding: 20px;

      @media (min-width: 768px) {
        flex-direction: row;
        align-items: stretch;
      }
    `;

    const LibraryButton = styled.button`
      background: transparent;
      border: 2px solid var(--neon-pink);
      color: var(--neon-pink);
      padding: 10px 20px;
      font-family: 'Orbitron', sans-serif;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 10px;
      border-radius: 5px;
      animation: ${neonGlow} 1.5s ease-in-out infinite alternate;

      &:hover {
        background: var(--neon-pink);
        color: var(--dark-bg);
        box-shadow: 0 0 15px var(--neon-pink);
      }

      @media (min-width: 768px) {
        margin-top: 0;
        margin-left: 10px;
      }
    `;

    const CardWrapper = styled.div`
      width: 100%;
      max-width: 300px;
      margin-bottom: 20px;
      border: 2px solid var(--neon-blue);
      border-radius: 10px;
      padding: 15px;
      box-shadow: 0 0 10px var(--neon-blue);

      @media (min-width: 768px) {
        margin-bottom: 0;
        margin-right: 20px;
      }
    `;

    const GeneratorWrapper = styled.div`
      width: 100%;
      flex: 1;
    `;

    const Title = styled.h1`
      font-family: 'Orbitron', sans-serif;
      color: var(--neon-pink);
      text-align: center;
      margin-bottom: 30px;
      animation: ${neonGlow} 1.5s ease-in-out infinite alternate;
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      z-index: 10;
    `;

    const ContentWrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-top: 80px;

      @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        margin-top: 60px;
      }
    `;

    function App() {
      const [character, setCharacter] = useState({
        name: '',
        personality: '',
        writingStyle: ''
      });
      const [chapters, setChapters] = useState([]);
      const [selectedChapter, setSelectedChapter] = useState(null);
      const [showLibrary, setShowLibrary] = useState(false);

      const handleChapterGenerated = (newChapter) => {
        // No direct action, chapter added on save
      };

      const handleChapterSaved = (newChapter) => {
        setChapters([...chapters, newChapter]);
        setSelectedChapter(newChapter); // Auto-select the newly saved chapter
      };

      const handleChapterSelect = (chapter) => {
        setSelectedChapter(chapter);
      };

      const handleDeleteChapter = (index) => {
        const updatedChapters = chapters.filter((_, i) => i !== index);
        setChapters(updatedChapters);
        if (selectedChapter && selectedChapter.title === chapters[index].title) {
          setSelectedChapter(null);
        }
      };

      const handleRenameChapter = (index, newTitle) => {
        const updatedChapters = chapters.map((chapter, i) => {
          if (i === index) {
            return { ...chapter, title: newTitle };
          }
          return chapter;
        });
        setChapters(updatedChapters);

        if (selectedChapter && selectedChapter.title === chapters[index].title) {
          setSelectedChapter(updatedChapters[index]);
        }
      };

      return (
        <>
          <GlobalStyle />
          <Title>NovelGenAI</Title>
          <AppContainer>
            <ContentWrapper>
              <CardWrapper>
                <CharacterCard character={character} setCharacter={setCharacter} />
              </CardWrapper>
              <GeneratorWrapper>
                <NovelGenerator
                  character={character}
                  chapters={chapters}
                  onChapterGenerated={handleChapterGenerated}
                  onChapterSaved={handleChapterSaved}
                />
              </GeneratorWrapper>
              <LibraryButton onClick={() => setShowLibrary(true)}>
                Open Chapter Library
              </LibraryButton>
            </ContentWrapper>

            {showLibrary && (
              <ChapterLibrary
                chapters={chapters}
                onChapterSelect={handleChapterSelect}
                onClose={() => setShowLibrary(false)}
                onDeleteChapter={handleDeleteChapter}
                onRenameChapter={handleRenameChapter}
              />
            )}
          </AppContainer>
        </>
      );
    }

    export default App;
