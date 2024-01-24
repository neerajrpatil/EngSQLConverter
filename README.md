# Streamlit Google LangChain SQL Converter

This Streamlit app allows users to convert natural language text into SQL commands using Google's LangChain API. LangChain is a powerful natural language processing (NLP) tool that understands and translates human language into machine-readable commands.

## Getting Started

### Prerequisites

Before running the app, make sure you have the following installed:

- Python 3.6 or higher
- Streamlit: You can install it using `pip install streamlit`

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/streamlit-langchain-sql-converter.git
```

2. Change into the project directory:

```bash
cd streamlit-langchain-sql-converter
```

3. Install the required packages:

```bash
pip install -r requirements.txt
```

### Usage

1. Obtain Google LangChain API key:

   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project or select an existing one.
   - Enable the LangChain API.
   - Create API credentials and obtain the API key.

2. Set up environment variables:

   - Create a `.env` file in the project directory.
   - Add your Google LangChain API key to the `.env` file:

     ```
     LANGCHAIN_API_KEY=your_api_key_here
     ```

3. Run the Streamlit app:

```bash
streamlit run app.py
```

4. Open your browser and navigate to `http://localhost:8501` to use the app.

## Features

- **Text Input:** Enter your natural language text in the input box.
- **Convert Button:** Click the "Convert" button to send the text to the LangChain API and receive the corresponding SQL command.
- **Output Display:** The converted SQL command will be displayed for you to copy and use in your database.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This app relies on the power of Google LangChain for natural language processing.
- Streamlit makes it easy to create interactive and user-friendly web applications.
- Thanks to the open-source community for providing valuable tools and resources.
