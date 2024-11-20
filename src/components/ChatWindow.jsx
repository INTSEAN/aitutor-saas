import { useState, useEffect, useRef } from 'react';
import './ChatWindow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPaperclip, faUser, faRobot } from '@fortawesome/free-solid-svg-icons';

function ChatWindow() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your AI Tutor. I'm here to help you learn and understand any topic you're interested in. What would you like to explore today?",
      type: 'ai'
    }
  ]);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [thinking, setThinking] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, thinking]);

  const handleSend = async () => {
    if (input.trim() === '' && files.length === 0) return;

    const newMessage = { text: input, type: 'user', files: [...files] };
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setFiles([]);
    setThinking(true);

    setTimeout(() => {
      const aiResponse = {
        text: `AI response to: "${newMessage.text}"`,
        type: 'ai',
      };
      setMessages(prev => [...prev, aiResponse]);
      setThinking(false);
    }, 1000);
  };

  return (
    <section className="chat-section">
      <div className="chat-header">
        <h1>AI Tutor Chat</h1>
        <p className="chat-subtitle">Your personal AI learning assistant</p>
      </div>
      <div className="chat-window">
        <div className="conversation-start">
          <div className="date-divider">
            <span>Conversation started {new Date().toLocaleDateString()}</span>
          </div>
        </div>
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.type}`}>
              <div className={`message-icon ${msg.type}-icon`}>
                <FontAwesomeIcon icon={msg.type === 'user' ? faUser : faRobot} />
              </div>
              <div className="message-content">
                {msg.text}
              </div>
            </div>
          ))}
          {thinking && (
            <div className="message ai">
              <div className="message-icon ai-icon">
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <div className="message-content thinking">
                AI is thinking
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="input-area">
          <div className="input-container">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <div className="button-group">
              <label className="file-upload-label">
                <FontAwesomeIcon icon={faPaperclip} />
                <span>Upload</span>
                <input
                  type="file"
                  hidden
                  multiple
                  onChange={(e) => setFiles([...e.target.files])}
                />
              </label>
              <button
                className="send-button"
                onClick={handleSend}
                disabled={input.trim() === '' && files.length === 0}
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChatWindow; 