<file path="README.md">
      # NovelGenAI

      NovelGenAI is a web application that uses the OpenRouter API and the power of AI (specifically, Google's Gemini Pro model) to help you generate a cyberpunk-themed novel.  It allows you to define a character, provide chapter roadmaps, and maintain context across multiple chapters, resulting in a more coherent and engaging story.

      ## Features

      *   **Character Customization:** Define your main character's name, personality traits, and the overall writing style of the novel. This allows you to shape the tone and voice of your story.
      *   **Chapter-Based Generation:** Generate your novel chapter by chapter.  Provide a roadmap or prompt for each chapter, guiding the AI's creative process.
      *   **Contextual Awareness:** The AI considers previously generated chapters when creating new ones. This helps maintain consistency and continuity throughout the story.
      *   **Interactive Chapter Library:**  A pop-up library allows you to easily browse, read, rename, and delete generated chapters.
      *   **Mobile Responsiveness:** The application is designed to work seamlessly on various screen sizes.
      *   **Cyberpunk 2077 Inspired Theme:**  The user interface is styled with a vibrant, neon-infused aesthetic.
      *   **Save Chapters:** Explicitly save generated chapters to the library.
      *   **Rename and Delete Chapters:** Manage your chapter library by renaming or deleting chapters as needed.
      *   **View Chapter Content:** Read the content of each chapter directly within the chapter library.
      *   **Clear User Guidance:** Input fields now include placeholder text to guide users.
      *   **Generation Feedback:**  A "Generating..." message provides visual feedback during chapter creation.

      ## Getting Started

      1.  **Prerequisites:** You'll need an API key from [OpenRouter](https://openrouter.ai/).  Create an account and obtain your key.
      2.  **Installation:**
          *   Open your terminal or command prompt.
          *   Navigate to the project directory (where this README is located).
          *   Run the following command to install the necessary dependencies:
              ```bash
              npm install
              ```
      3.  **Running the Application:**
          *   Start the development server with:
              ```bash
              npm run dev
              ```
          *   The application will typically open automatically in your browser. If not, you'll see a local URL (usually `http://localhost:5173`) in the terminal that you can open.

      ## Usage

      1.  **Enter Your OpenRouter API Key:**  The first field is for your OpenRouter API key.
      2.  **Define Your Character (Character Card):**
          *   **Character Name:** Enter the name of your protagonist.
          *   **Personality Traits:** Describe your character's personality.
          *   **Writing Style:**  Specify the desired writing style.
      3.  **Create Chapters:**
          *   **Chapter Title:** Enter a title for the chapter.
          *   **Story Roadmap/Prompt:**  Provide a detailed outline of what should happen in the chapter.
          *   Click **Generate Chapter**. The AI-generated content will appear below.
          *   Review the generated content. If satisfied, click **Save Chapter** to add it to the library.
      4.  **Manage Chapters in the Library:**
          *   Click **Open Chapter Library** to access the library.
          *   **Read Chapters:** Click on a chapter title to display its content below the chapter list.
          *   **Rename Chapters:** Click the "Rename" button next to a chapter to edit its title. Click "Save" to confirm the new title.
          *   **Delete Chapters:** Click the "Delete" button to remove a chapter from the library.
          *   Click **Close Library** to close the library popup.
      5.  **Continue Building Your Novel:** Repeat step 3 and 4 to add more chapters, building your novel chapter by chapter.

      ## Project Structure

      *   `src/`: Contains the source code.
          *   `components/`: React components.
              *   `ApiKeyInput.jsx`: API key input.
              *   `CharacterCard.jsx`: Character profile form.
              *   `ChapterLibrary.jsx`: Chapter library popup with reading, renaming, and deleting features.
              *   `NovelGenerator.jsx`: Core logic for chapter generation and saving.
          *   `App.jsx`: Main application component.
          *   `main.jsx`: Entry point.
          *   `index.css`: Global styles.
      *   `index.html`: Main HTML file.
      *   `package.json`: NPM configuration.
      *   `README.md`: Project documentation.

      ## Dependencies

      *   `react`: UI library.
      *   `react-dom`: DOM bindings for React.
      *   `axios`: HTTP client for API requests.
      *   `styled-components`: CSS-in-JS library.
      *   `vite`: Build tool and dev server.

      ## Important Notes

      *   **API Key Security:** Keep your OpenRouter API key secure.
      *   **HTTP-Referer Header:** Update the `HTTP-Referer` header in `NovelGenerator.jsx` with your site URL when deploying.
      *   **Model Selection:** Uses `google/gemini-pro` model.
      *   **Cost:** Be aware of OpenRouter API usage costs.

      ## Future Enhancements

      *   Chapter reordering in the library.
      *   Search/filter functionality for the library.
      *   More AI model options and parameter controls.
      *   Export functionality (e.g., to text file).
      *   In-place chapter editing.
      *   Saving and loading entire novel projects.
    </file>
