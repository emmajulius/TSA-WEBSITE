import { useState, useEffect } from 'react'
import './CodeSnippet.css'

const CodeSnippet = () => {
  const [currentCode, setCurrentCode] = useState(0)
  const [typingText, setTypingText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  const codeExamples = [
    {
      language: 'JavaScript',
      code: `// Modern React Component
const DigitalSolution = () => {
  const [innovation, setInnovation] = useState(true);
  
  return (
    <div className="tsa-solution">
      <Technique />
      <Speed />
      <Accuracy />
    </div>
  );
};`
    },
    {
      language: 'Python',
      code: `# AI-Powered Solution
class TSASolution:
    def __init__(self):
        self.technique = "Cutting-edge"
        self.speed = "Rapid"
        self.accuracy = "Precise"
    
    def transform_ideas(self, idea):
        return self.digital_success(idea)`
    },
    {
      language: 'TypeScript',
      code: `// Type-Safe Development
interface TSAServices {
  technique: 'expert';
  speed: 'rapid';
  accuracy: 'precise';
}

const deliverSolution = (): TSAServices => {
  return {
    technique: 'expert',
    speed: 'rapid',
    accuracy: 'precise'
  };
};`
    }
  ]

  useEffect(() => {
    const currentExample = codeExamples[currentCode]
    let index = 0
    setIsTyping(true)
    setTypingText('')

    const typingInterval = setInterval(() => {
      if (index < currentExample.code.length) {
        setTypingText(currentExample.code.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, 30)

    return () => clearInterval(typingInterval)
  }, [currentCode])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCode((prev) => (prev + 1) % codeExamples.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="code-snippet-container">
      <div className="code-header">
        <div className="code-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="code-title">{codeExamples[currentCode].language}</div>
      </div>
      <div className="code-content">
        <pre>
          <code>{typingText}<span className={isTyping ? 'cursor' : ''}>|</span></code>
        </pre>
      </div>
    </div>
  )
}

export default CodeSnippet


