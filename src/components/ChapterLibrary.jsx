import React, { useState } from 'react';
    import styled, { keyframes } from 'styled-components';

    const neonGlow = keyframes`
      from {
        box-shadow: 0 0 5px var(--neon-blue), 0 0 10px var(--neon-blue);
      }
      to {
        box-shadow: 0 0 10px var(--neon-blue), 0 0 20px var(--neon-blue), 0 0 30px var(--neon-blue);
      }
    `;
    const LibraryOverlay = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      animation: ${neonGlow} 2s ease-in-out infinite alternate;
    `;

    const LibraryContainer = styled.div`
      width: 80%;
      max-width: 600px;
      padding: 20px;
      background-color: var(--dark-bg);
      border: 2px solid var(--neon-blue);
      box-shadow: 0 0 10px var(--neon-blue);
      overflow-y: auto;
      max-height: 80vh;
      border-radius: 10px;
    `;

    const LibraryTitle = styled.h2`
      font-family: 'Orbitron', sans-serif;
      color: var(--neon-pink);
      text-shadow: 0 0 10px var(--neon-pink);
      margin-bottom: 15px;
    `;

    const ChapterList = styled.ul`
      list-style: none;
      padding: 0;
    `;

    const ChapterItem = styled.li`
      padding: 10px;
      border-bottom: 1px solid var(--neon-blue);
      transition: all 0.3s ease;
      display: flex; /* Use flexbox for layout */
      justify-content: space-between; /* Space out items */
      align-items: center; /* Vertically center items */

      &:last-child {
        border-bottom: none;
      }
      &:hover {
        color: var(--neon-pink);
        background-color: rgba(0, 240, 255, 0.1);
      }
    `;

    const ChapterTitle = styled.span`
      cursor: pointer;
      flex-grow: 1; /* Allow title to take up available space */
    `;

    const ChapterButtons = styled.div`
      display: flex;
      gap: 5px; /* Space between buttons */
    `;

    const EditButton = styled.button`
      background: transparent;
      border: 1px solid var(--neon-blue);
      color: var(--neon-blue);
      padding: 5px 10px;
      font-family: 'Orbitron', sans-serif;
      cursor: pointer;
      transition: all 0.3s ease;
      border-radius: 3px;
      font-size: 0.8em;

      &:hover {
        background: var(--neon-blue);
        color: var(--dark-bg);
        box-shadow: 0 0 10px var(--neon-blue);
      }
    `;

    const DeleteButton = styled(EditButton)`
      border-color: var(--neon-pink);
      color: var(--neon-pink);

      &:hover {
        background: var(--neon-pink);
        box-shadow: 0 0 10px var(--neon-pink);
      }
    `;

      const RenameInput = styled.input`
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid var(--neon-blue);
        color: var(--neon-blue);
        padding: 5px;
        font-family: 'Roboto Mono', monospace;
        border-radius: 3px;
        margin-right: 5px; /* Space from the Save button */
        font-size: 0.8em;
    `;

    const CloseButton = styled.button`
      background: transparent;
      border: 2px solid var(--neon-blue);
      color: var(--neon-blue);
      padding: 10px 20px;
      font-family: 'Orbitron', sans-serif;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 15px;
      border-radius: 5px;
      &:hover {
        background: var(--neon-blue);
        color: var(--dark-bg);
        box-shadow: 0 0 15px var(--neon-blue);
      }
    `;

    function ChapterLibrary({ chapters, onChapterSelect, onClose, onDeleteChapter, onRenameChapter }) {
      const [editingChapterId, setEditingChapterId] = useState(null);
      const [newTitle, setNewTitle] = useState('');

      const handleRename = (chapter, index) => {
          setEditingChapterId(index);
          setNewTitle(chapter.title); // Initialize with current title
      };

      const handleSaveRename = (index) => {
        onRenameChapter(index, newTitle);
        setEditingChapterId(null);
        setNewTitle('');
      };

      return (
        <LibraryOverlay>
          <LibraryContainer>
            <LibraryTitle>Chapter Library</LibraryTitle>
            <ChapterList>
              {chapters.map((chapter, index) => (
                <ChapterItem key={index}>
                  {editingChapterId === index ? (
                    <>
                      <RenameInput
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                      />
                      <EditButton onClick={() => handleSaveRename(index)}>Save</EditButton>
                    </>

                  ) : (
                    <ChapterTitle onClick={() => onChapterSelect(chapter)}>
                      {chapter.title}
                    </ChapterTitle>
                  )}

                  <ChapterButtons>
                    {editingChapterId !== index && (
                      <EditButton onClick={() => handleRename(chapter, index)}>Rename</EditButton>
                    )}
                    <DeleteButton onClick={() => onDeleteChapter(index)}>Delete</DeleteButton>
                  </ChapterButtons>
                </ChapterItem>
              ))}
            </ChapterList>
            <CloseButton onClick={onClose}>Close</CloseButton>
          </LibraryContainer>
        </LibraryOverlay>
      );
    }

    export default ChapterLibrary;
