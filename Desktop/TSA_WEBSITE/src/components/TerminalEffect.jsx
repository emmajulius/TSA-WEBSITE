import { useState, useEffect } from 'react'
import './TerminalEffect.css'

const TerminalEffect = () => {
  const [lines, setLines] = useState([])
  const [currentLine, setCurrentLine] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  const commands = [
    { text: '$ npm install tsa-digital-solutions', delay: 50 },
    { text: '✓ Package installed successfully', delay: 30 },
    { text: '$ npm run build', delay: 50 },
    { text: '✓ Build completed in 2.3s', delay: 30 },
    { text: '$ npm start', delay: 50 },
    { text: '🚀 Server running on http://localhost:3000', delay: 30 },
    { text: '✨ Your digital solution is ready!', delay: 30 }
  ]

  useEffect(() => {
    let commandIndex = 0
    let charIndex = 0
    let timeoutId

    const typeNextChar = () => {
      if (commandIndex < commands.length) {
        const command = commands[commandIndex]
        
        if (charIndex < command.text.length) {
          setCurrentLine(command.text.slice(0, charIndex + 1))
          charIndex++
          timeoutId = setTimeout(typeNextChar, command.delay)
        } else {
          setLines(prev => [...prev, command.text])
          setCurrentLine('')
          charIndex = 0
          commandIndex++
          if (commandIndex < commands.length) {
            timeoutId = setTimeout(typeNextChar, 500)
          }
        }
      }
    }

    timeoutId = setTimeout(typeNextChar, 1000)

    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-controls">
          <span className="control close"></span>
          <span className="control minimize"></span>
          <span className="control maximize"></span>
        </div>
        <div className="terminal-title">tsa-terminal</div>
      </div>
      <div className="terminal-body">
        <div className="terminal-content">
          {lines.map((line, index) => (
            <div key={index} className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-text">{line}</span>
            </div>
          ))}
          {currentLine && (
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-text">{currentLine}</span>
              {showCursor && <span className="terminal-cursor">|</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TerminalEffect

