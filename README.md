# NovelGenAI - Cyberpunk Novel Generator

    NovelGenAI is a web application that leverages the OpenRouter API and the power of AI (specifically, Google's Gemini Pro model) to help you generate a cyberpunk-themed novel.  It allows you to define a character, provide chapter roadmaps, and maintain context across multiple chapters, resulting in a more coherent and engaging story.

    ## Features

    *   **Character Customization:** Define your main character's name, personality traits, and the overall writing style of the novel. This allows you to shape the tone and voice of your story.
    *   **Chapter-Based Generation:** Generate your novel chapter by chapter.  Provide a roadmap or prompt for each chapter, guiding the AI's creative process.
    *   **Contextual Awareness:** The AI considers previously generated chapters when creating new ones. This helps maintain consistency and continuity throughout the story, preventing the AI from "hallucinating" or forgetting important plot points.
    *   **Interactive Chapter Library:**  A pop-up library allows you to easily browse and review all generated chapters.
    *   **Mobile Responsiveness:** The application is designed to work seamlessly on various screen sizes, including mobile devices and tablets.
    *   **Cyberpunk 2077 Inspired Theme:**  The user interface is styled with a vibrant, neon-infused aesthetic inspired by Cyberpunk 2077.

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

    1.  **Enter Your OpenRouter API Key:**  The first field you'll see is for your OpenRouter API key. Paste your key here.  This is essential for the application to communicate with the AI model.
    2.  **Define Your Character (Character Card):**
        *   **Character Name:** Enter the name of your protagonist.
        *   **Personality Traits:** Describe your character's personality. Be as detailed as possible (e.g., "cynical, quick-witted, haunted by their past").
        *   **Writing Style:**  Specify the desired writing style (e.g., "terse, noir, descriptive, humorous"). This influences the overall tone of the generated text.
    3.  **Create Your First Chapter:**
        *   **Chapter Title:** Enter a title for the chapter you're about to generate.
        *   **Story Roadmap/Prompt:**  This is the most crucial input. Provide a detailed outline or summary of what should happen in this chapter.  The more specific you are, the better the results.  Include key events, character interactions, and any important plot points.
        *   Click the **Generate Chapter** button.
    4.  **Review and Iterate:**
        *   The generated chapter content will appear below the button. Read through it carefully.
        *   If you're not satisfied, you can modify the **Chapter Title** and/or **Story Roadmap/Prompt** and generate again.  The AI will use the updated information, along with the previous chapters, to create a revised version.
    5.  **Adding More Chapters:**
        *   Repeat steps 3 and 4 for each new chapter.  The AI will automatically incorporate the content of all previous chapters into its context, ensuring a cohesive narrative.
    6.  **Using the Chapter Library:**
        *   Click the **Open Chapter Library** button to view a list of all generated chapters.
        *   Click on a chapter title in the library to view its content (this feature is not yet fully implemented - it currently only displays the title).
        *   Click the **Close** button to close the library.

    ## Project Structure

    The project is organized into the following key files and directories:

    *   `src/`:  This directory contains all the source code for the React application.
        *   `components/`:  This subdirectory holds the reusable React components.
            *   `ApiKeyInput.jsx`:  Manages the input field for the OpenRouter API key.
            *   `CharacterCard.jsx`:  Provides the form for defining the character's profile.
            *   `ChapterLibrary.jsx`:  Implements the pop-up chapter library.
            *   `NovelGenerator.jsx`:  Contains the core logic for interacting with the OpenRouter API and generating the novel content.
        *   `App.jsx`:  The main application component, which brings together all the other components.
        *   `main.jsx`:  The entry point for the React application.
        *   `index.css`:  Contains global styles for the application, including the Cyberpunk theme.
    *   `index.html`:  The main HTML file that loads the React application.
    *   `package.json`:  The NPM configuration file, listing dependencies and scripts.
    *   `README.md`: This file, providing an overview of the project.

    ## Dependencies

    The project relies on the following key libraries:

    *   `react`:  The core library for building user interfaces with React.
    *   `react-dom`:  Provides DOM-specific methods for rendering React components.
    *   `axios`:  A promise-based HTTP client used to make requests to the OpenRouter API.
    *   `styled-components`:  A library for writing CSS-in-JS, enabling dynamic and component-specific styling.
    *   `vite`:  A fast build tool and development server that provides hot module replacement (HMR) for a smooth development experience.
    *   `react-router-dom` (Included but not actively used): For potential future routing needs.
    *   `zustand` (Included but not actively used):  For potential future state management.

    ## Important Notes

    *   **API Key Security:**  Never commit your OpenRouter API key directly to a public repository.  Keep it secure and consider using environment variables for production deployments.
    *   **HTTP-Referer Header:** The `HTTP-Referer` header in the API requests is currently set to `http://localhost:5173`.  **You must change this to your website's actual URL when deploying your application.** This header is used by OpenRouter for tracking and ranking purposes.
    *   **Model Selection:** The application currently uses the `google/gemini-pro` model. You can explore other models available on OpenRouter, but you may need to adjust the code slightly to accommodate different model parameters or response formats.
    *   **Error Handling:** The application includes basic error handling, but it can be further improved to provide more user-friendly error messages and recovery options.
    * **Cost:** Be mindful of the costs associated with using the OpenRouter API.  The pricing depends on the specific model and the number of requests you make.

    ## Future Enhancements

    *   **Chapter Selection Functionality:**  Currently, clicking on a chapter in the library only displays the title.  Implement the functionality to display the full chapter content when selected.
    *   **Editing Chapters:** Allow users to edit the generated chapter content directly within the application.
    *   **Saving and Loading:** Implement features to save the entire novel project (including character details, chapters, and API key) and load it later.  This could be done using local storage or a backend service.
    *   **More Advanced AI Parameters:** Expose more of the OpenRouter API parameters to the user, such as temperature, top_p, and frequency penalty, to give them finer control over the AI's generation process.
    *   **User Authentication:**  If you plan to deploy the application publicly, consider adding user authentication to protect user data and API keys.
    * **Different Models:** Allow users to select from a list of available models.
