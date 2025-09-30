# OpenRouter Configuration Guide

This guide will help you configure the AI Interview Generator to use your OpenRouter API key and select specific models.

## 🚀 Quick Setup

### 1. Get Your OpenRouter API Key

1. Go to [OpenRouter.ai](https://openrouter.ai)
2. Sign up or log in to your account
3. Navigate to the **Keys** section: https://openrouter.ai/keys
4. Click "Create new key"
5. Give your key a name (e.g., "AI Interview Generator")
6. Copy the API key (it starts with `sk-or-`)

### 2. Configure Environment Variables

Create a `.env` file in your project root (copy from `.env.example`):

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration:

```env
# OpenRouter Configuration
OPENROUTER_API_KEY=sk-or-your-actual-api-key-here
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
OPENROUTER_MODEL=deepseek/deepseek-r1:free

# Application Configuration
APP_URL=http://localhost:3000
APP_NAME=AI Interview Generator

# Database Configuration
DATABASE_URL="file:./dev.db"
```

### 3. Using the Settings UI (Recommended)

Instead of manually editing the `.env` file, you can use the built-in settings interface:

1. **Start the application**:
   ```bash
   npm run dev
   ```

2. **Open the Settings tab**:
   - Go to http://localhost:3000
   - Click on the "Settings" tab

3. **Configure your settings**:
   - **API Key**: Paste your OpenRouter API key
   - **Model**: Choose your preferred AI model
   - **Base URL**: Keep the default unless you need to change it
   - **Temperature**: Adjust creativity (0.1 = focused, 1.0 = creative)
   - **Max Tokens**: Set maximum response length

4. **Save your settings**:
   - Click "Save Settings"
   - Settings are stored in your browser's local storage

## 🤖 Available Models

### Free Models (No Cost)
- **DeepSeek R1** (`deepseek/deepseek-r1:free`) - Excellent for technical content
- **DeepSeek R1 Distill Llama 70B** (`deepseek/deepseek-r1-distill-llama-70b:free`) - High performance
- **Llama 3.1 8B Instruct** (`meta-llama/llama-3.1-8b-instruct:free`) - Fast and capable
- **Google Gemini Flash 1.5** (`google/gemini-flash-1.5:free`) - Google's fast model
- **Mistral 7B Instruct** (`mistralai/mistral-7b-instruct:free`) - Lightweight and fast

### Paid Models (Require Credits)
- **GPT-4** (`openai/gpt-4`) - Best overall quality
- **GPT-3.5 Turbo** (`openai/gpt-3.5-turbo`) - Fast and cost-effective
- **Claude 3 Sonnet** (`anthropic/claude-3-sonnet`) - Great for reasoning
- **Claude 3 Haiku** (`anthropic/claude-3-haiku`) - Fast and efficient

## ⚙️ Configuration Options

### Temperature
- **0.1 - 0.3**: Very focused, deterministic responses
- **0.4 - 0.6**: Balanced creativity and focus
- **0.7 - 0.9**: More creative and varied responses
- **1.0**: Maximum creativity

For interview questions, **0.5 - 0.7** works well for balanced technical content.

### Max Tokens
- **2000 - 3000**: Shorter responses, faster generation
- **4000**: Default, good balance
- **6000 - 8000**: Longer, more detailed responses

## 🔧 Advanced Configuration

### Environment Variables vs UI Settings

The application uses a hierarchy for configuration:

1. **UI Settings** (highest priority)
   - Stored in browser localStorage
   - Configurable via Settings tab
   - Applied immediately

2. **Environment Variables** (fallback)
   - Stored in `.env` file
   - Used when UI settings not configured
   - Requires application restart

3. **Default Values** (lowest priority)
   - Hardcoded fallbacks
   - Ensure the app works out-of-the-box

### Custom Base URL

If you need to use a different OpenRouter endpoint:

```env
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
```

### Custom Model

You can use any model available on OpenRouter by specifying its full ID:

```env
OPENROUTER_MODEL=anthropic/claude-3-opus
```

## 🛠️ Troubleshooting

### Common Issues

#### 1. "Invalid API Key" Error
- **Solution**: Double-check your API key in the OpenRouter dashboard
- **Ensure**: The key starts with `sk-or-`
- **Verify**: The key hasn't expired or been revoked

#### 2. "Model Not Found" Error
- **Solution**: Verify the model ID is correct
- **Check**: Available models on OpenRouter website
- **Try**: Switch to a different model from the dropdown

#### 3. "Rate Limit Exceeded" Error
- **Solution**: Free models have usage limits
- **Options**: 
  - Wait for the limit to reset
  - Add credits to use paid models
  - Try a different free model

#### 4. "Network Error" 
- **Solution**: Check your internet connection
- **Firewall**: Ensure OpenRouter.ai is accessible
- **Proxy**: Configure if you're behind a corporate proxy

### Testing Your Configuration

1. **Check API Key**: 
   ```bash
   curl -H "Authorization: Bearer sk-or-your-key" https://openrouter.ai/api/v1/models
   ```

2. **Test Model Access**:
   ```bash
   curl -X POST https://openrouter.ai/api/v1/chat/completions \
     -H "Authorization: Bearer sk-or-your-key" \
     -H "Content-Type: application/json" \
     -d '{"model": "deepseek/deepseek-r1:free", "messages": [{"role": "user", "content": "Hello"}]}'
   ```

## 📝 Best Practices

### For Production Use
1. **Use paid models** for better reliability and quality
2. **Set up monitoring** for API usage and costs
3. **Implement rate limiting** in your application
4. **Use environment variables** instead of UI settings for deployment
5. **Keep your API key secure** - never commit it to version control

### For Development
1. **Start with free models** to test functionality
2. **Use the UI settings** for quick experimentation
3. **Monitor token usage** to understand costs
4. **Test different models** to find the best fit for your use case

## 🎯 Model Recommendations

### For Technical Interview Questions
1. **Best Overall**: `deepseek/deepseek-r1:free` (free) or `openai/gpt-4` (paid)
2. **Fast Generation**: `meta-llama/llama-3.1-8b-instruct:free`
3. **Cost-Effective**: `openai/gpt-3.5-turbo`
4. **Detailed Responses**: `anthropic/claude-3-sonnet`

### For Different Question Types
- **Coding Questions**: Models with strong reasoning (GPT-4, Claude 3 Sonnet)
- **Architecture Questions**: Models with broad knowledge (GPT-4, DeepSeek R1)
- **ML Theory**: Models trained on technical content (DeepSeek R1, Llama 3.1)
- **Quick Practice**: Fast models (Llama 3.1 8B, Mistral 7B)

## 🔐 Security Considerations

1. **Never commit API keys** to version control
2. **Use environment variables** in production
3. **Rotate API keys** regularly if compromised
4. **Monitor usage** for unusual activity
5. **Set up billing alerts** on OpenRouter

---

You're now ready to use the AI Interview Generator with your OpenRouter configuration! 🚀