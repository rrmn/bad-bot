# Bad Bot

Bad Bot is a Chrome extension that automates downvoting responses in OpenAI Chat. It streamlines providing feedback by clicking the "thumbs down" button for each response, saving time and ensuring consistent feedback.

---

## Features

- **Automated Downvoting**: Automatically clicks the "thumbs down" button for every AI response.
- **Per-Tab State**: Toggles ON or OFF for each tab independently.
- **Dynamic Icon**: The toolbar icon updates to reflect the extension's current state (ON or OFF).
- **Tab Refresh Handling**: Maintains functionality even after refreshing the page.
- **Lightweight**: Operates only on OpenAI Chat tabs to minimize resource usage.

---

## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the folder containing the extension files.
5. The Bad Bot icon should now appear in your toolbar.

---

## Usage

1. Open OpenAI Chat at [https://chat.openai.com](https://chat.openai.com).
2. Click the **Bad Bot** icon in your toolbar:
   - **Gray Icon**: The extension is OFF.
   - **Colored Icon**: The extension is ON.
3. Refresh the page or open new tabs as needed. The extension will retain its ON/OFF state for each tab.
4. To stop the automation, click the icon again to toggle it OFF.

---

## Permissions

- **`activeTab`**: Allows the extension to interact with the current active tab.
- **`scripting`**: Enables dynamic injection of the automation script.
- **`storage`**: Saves the ON/OFF state for each tab, ensuring preferences persist during the session.

---

## How It Works

- **Background Script**: Manages per-tab state, toggles the extension ON/OFF, and injects the content script as needed.
- **Content Script**: Monitors OpenAI Chat responses and clicks the "thumbs down" button automatically.
- **Dynamic Icons**: Reflects the current state (ON/OFF) in the toolbar.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Contribution

Contributions are welcome! Feel free to submit issues or pull requests to improve Bad Bot.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Commit changes: `git commit -m "Add new feature"`.
4. Push to the branch: `git push origin feature-branch`.
5. Open a pull request.

---

## Support

For questions you can submit an issue on [GitHub Issues](https://github.com/rrmn/bad-bot/issues).