import openailib from "openai";
import fs from 'fs'
import path from "path";

const openaiconst = new openailib({apiKey: "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"});

class OpenAI {
  roles = {
    ASSISTANT: 'assistant',
    USER: 'user',
    SYSTEM: 'system'
  }

  constructor() {
  }

  async chat(messages) {
    try {
      const response = await openaiconst.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages,
      })
      return response.choices[0].message
    } catch (e) {
      console.log('Error while gpt chat', e.message)
    }
  }

  async chat_voice(messages) {
    try {
      const response = await openaiconst.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages,
      })
      return response.choices[0].message
    } catch (e) {
      console.log('Error while gpt chat', e.message)
    }
  }

  async transcription(filepath) {
    try {
      const response = await openaiconst.audio.transcriptions.create({
        file: fs.createReadStream(filepath),
        model: "whisper-1",
      });
      return response.text
    } catch (e) {
      console.log('Error while transcription', e.message)
    }
  }
}

// Export an instance of the OpenAI class
export const openai = new OpenAI();














