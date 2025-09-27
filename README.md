# 🔮 Synth AI

**Compare AI. Choose Wisely.**  
Synth AI is a unified platform that lets you ask any question and instantly receive responses from multiple top-tier AI models like **OpenAI GPT**, **Google Gemini**, **Anthropic Claude**, and others — all in one place.

---

## 🚀 Features

- 🧠 Query multiple AI models with a single prompt
- 📊 Side-by-side response comparison
- 🕵️‍♂️ Unbiased analysis of AI-generated content
- 🧩 Modular architecture for plugging in new LLMs
- 🌐 Web-based UI for easy interaction

---

## 🛠️ How It Works

1. User enters a prompt
2. Prompt is sent concurrently to:
   - OpenAI GPT (e.g., GPT-4)
   - Google Gemini
   - Anthropic Claude
   - (Optional: Mistral, Cohere, open-source LLMs via API)
3. Responses are collected and displayed in a clean, comparative format

---

## 📷 UI Preview

*Coming Soon*

---

## 📦 Tech Stack

- **Frontend**: React / Next.js / TailwindCSS
- **Backend**: Node.js / Express (or Python FastAPI)
- **APIs**: OpenAI, Google AI Studio, Anthropic, etc.
- **Auth (optional)**: Auth0 / Firebase / Custom
- **Deployment**: Vercel / Netlify / Docker + Cloud Provider

---

## 🧩 Integrating New Models

Easily add support for new models using the `adapters/` pattern:

```ts
// adapters/openai.ts
export const fetchOpenAIResponse = async (prompt) => {
  // call OpenAI API
};
````

Just implement a similar function for each LLM.

---

## 🔐 API Keys & Environment

Create a `.env` file with your API keys:

```
OPENAI_API_KEY=...
GEMINI_API_KEY=...
CLAUDE_API_KEY=...
```

---

## 📈 Use Cases

* Benchmarking LLMs
* AI research and comparison
* Prompt engineering experiments
* Educational purposes

---

## 🧠 Future Features (Roadmap)

* 🧪 Response rating system
* 💬 Chat history and threading
* 🔍 Model performance insights
* 📤 Export/share conversations
* 🛠️ Self-hosted option with API proxying

---

## 🤝 Contributing

Pull requests and feature suggestions are welcome!

```bash
# Clone the repo
git clone https://github.com/tier3guy/Synth-AI.git

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## 📄 License

MIT License. Use freely, but attribute appropriately.

---

## 🌐 Live Demo

[🔗 Launch Synth AI](https://synth-ai.tier3guy.com/) *(Coming soon)*

---

## ✨ Inspiration

Synth AI is inspired by the need to demystify AI behavior. Every model has strengths and biases — we help users make **informed choices** by giving them the full picture.
