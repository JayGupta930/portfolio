import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';
import { GoogleGenerativeAI } from "@google/generative-ai";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your portfolio assistant powered by Gemini AI. Ask me anything!", sender: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Portfolio context for the AI
  const portfolioContext = {
    owner: {
      name: "Jay Gupta",
      role: "Frontend Developer",
      location: "Raipur, India",
      email: "jaygupta.works@gmail.com",
      education: "B.Tech in Computer Science & Engineering (2022-2026)",
      skills: ["React", "JavaScript", "HTML", "CSS", "Node.js", "UI/UX Design"],
    },
    projects: [
      {
        name: "JSON Code Editor",
        description: "A fully responsive JSON Code Editor built with React",
        technologies: ["React", "Node.js", "MongoDB"],
      },
      {
        name: "Uropine Admin Portal",
        description: "Admin dashboard for Uropine devices and customers",
        technologies: ["React", "Firebase", "Material UI"],
      },
      {
        name: "Hungry Food",
        description: "A food delivery app design concept",
        technologies: ["Figma", "SVG Repo"],
      }
    ]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const createContextualPrompt = (userMessage) => {
    return `You are a knowledgeable portfolio assistant for ${portfolioContext.owner.name}, a ${portfolioContext.owner.role}.

Context about the portfolio:
- Skills: ${portfolioContext.owner.skills.join(", ")}
- Education: ${portfolioContext.owner.education}
- Location: ${portfolioContext.owner.location}
- Projects: ${portfolioContext.projects.map(p => p.name).join(", ")}

Previous messages: ${messages.map(m => `${m.sender}: ${m.text}`).join("\n")}

User question: ${userMessage}

Instructions:
1. Provide accurate information based on the portfolio context
2. Be friendly and professional
3. Keep responses concise but informative
4. If asked about technical details, demonstrate technical understanding
5. If asked about projects, provide specific details from the context
6. If the question is outside the portfolio scope, redirect to relevant portfolio information

Please respond to the user's question:`;
  };

  const handleSend = async () => {
    if (!inputMessage.trim() || isLoading) return;
    
    const userMessage = inputMessage.trim();
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Initialize Gemini AI with API key
      const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      // Create contextual prompt
      const prompt = createContextualPrompt(userMessage);

      // Generate response with chat history context
      const result = await model.generateContent(prompt);
      const response = await result.response.text();
      
      // Clean and format the response
      const cleanedResponse = response
        .replace(/^(Assistant:|Bot:|A:)/i, '')
        .trim();
      
      setMessages(prev => [...prev, { text: cleanedResponse, sender: 'bot' }]);
    } catch (error) {
      console.error('Error generating response:', error);
      
      // Provide a helpful fallback response based on context
      const fallbackResponse = getFallbackResponse(userMessage);
      setMessages(prev => [...prev, { text: fallbackResponse, sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const getFallbackResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // Check for common question patterns
    if (lowerCaseMessage.includes('skill') || lowerCaseMessage.includes('technology')) {
      return `I can tell you about ${portfolioContext.owner.name}'s skills which include ${portfolioContext.owner.skills.join(", ")}. Which specific skill would you like to know more about?`;
    }
    if (lowerCaseMessage.includes('project') || lowerCaseMessage.includes('work')) {
      return `${portfolioContext.owner.name} has worked on several projects including ${portfolioContext.projects.map(p => p.name).join(", ")}. Would you like to know more about any specific project?`;
    }
    if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('email')) {
      return `You can contact ${portfolioContext.owner.name} at ${portfolioContext.owner.email}`;
    }
    if (lowerCaseMessage.includes('education') || lowerCaseMessage.includes('study')) {
      return `${portfolioContext.owner.name} is pursuing ${portfolioContext.owner.education}`;
    }
    
    return `I can help you learn about ${portfolioContext.owner.name}'s skills, projects, education, or how to get in contact. What would you like to know?`;
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Portfolio Assistant</h3>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="typing-indicator">Thinking<span>.</span><span>.</span><span>.</span></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me anything..."
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              disabled={isLoading}
            />
            <button onClick={handleSend} disabled={isLoading}>
              {isLoading ? '...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
