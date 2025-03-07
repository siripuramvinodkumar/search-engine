# search-engine
# Search Engine Project

This project is a simple search engine built using Python and Flask. It allows users to search for keywords in a list of documents and returns the documents that contain the keywords.

## Features

- Search for keywords in documents
- Display search results

## Requirements

- Python 3.6+
- Flask

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/search-engine.git
    cd search-engine
    ```

2. Create a virtual environment and activate it:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the required packages:
    ```sh
    pip install -r requirements.txt
    ```

4. Run the application:
    ```sh
    python app.py
    ```

5. Open your browser and go to `http://127.0.0.1:5000`.

## Usage

1. Enter a keyword in the search box.
2. Click the "Search" button.
3. The search results will be displayed.

## Project Structure

- `app.py`: The main application file.
- `templates/`: Directory containing HTML templates.
- `static/`: Directory containing static files (e.g., CSS).
- `documents/`: Directory containing the documents to be searched.
