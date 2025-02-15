import { motion } from 'framer-motion'
import { Loader2, MessageCircle, MinusCircle, Send, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

interface Message {
  id: string
  type: 'user' | 'assistant'
  content: string
}

const initialMessages: Message[] = [
  {
    id: '1',
    type: 'assistant',
    content: '¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?'
  }
]

// Páginas donde no queremos mostrar el chat
const excludedPaths = ['/cotizador', '/cotizador-revolvente', '/cotizador-arrendamiento']

// Tiempo de espera antes de mostrar el chat (en milisegundos)
const CHAT_DELAY = 20000 // 3 minutos

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [newMessage, setNewMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [shouldShow, setShouldShow] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Verificar si estamos en una página excluida
    const isExcludedPath = excludedPaths.some((path) => location.pathname.startsWith(path))

    if (isExcludedPath) {
      setShouldShow(false)
      setIsOpen(false)
      return
    }

    // Configurar el temporizador para mostrar el chat
    const timer = setTimeout(() => {
      setShouldShow(true)
    }, CHAT_DELAY)

    return () => {
      clearTimeout(timer)
    }
  }, [location.pathname])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: newMessage
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage('')
    setIsTyping(true)

    // Simular respuesta del asistente
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: getAssistantResponse(newMessage)
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1000)
  }

  const getAssistantResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes('tasa') || lowerMessage.includes('interés')) {
      return 'Nuestras tasas de interés son competitivas, comenzando desde el 2% mensual. La tasa exacta dependerá de tu perfil crediticio y el tipo de crédito que solicites.'
    }

    if (lowerMessage.includes('requisito')) {
      return 'Los requisitos básicos incluyen: identificación oficial, comprobante de domicilio, estados de cuenta bancarios y buen historial crediticio. ¿Te gustaría conocer los requisitos específicos para algún producto?'
    }

    if (lowerMessage.includes('plazo')) {
      return 'Ofrecemos plazos flexibles desde 12 hasta 120 meses, dependiendo del tipo de crédito y monto solicitado.'
    }

    if (lowerMessage.includes('contacto') || lowerMessage.includes('asesor')) {
      return 'Puedes contactar a un asesor llamando al (555) 123-4567 o completando el formulario de contacto en nuestra página. ¿Te gustaría que un asesor te contacte?'
    }

    return 'Entiendo tu consulta. Para brindarte la mejor atención, ¿podrías proporcionar más detalles sobre tu pregunta? Estoy aquí para ayudarte con información sobre nuestros productos financieros.'
  }

  if (!shouldShow) {
    return null
  }

  return (
    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ type: 'spring' }} className='fixed bottom-4 right-4 z-50'>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className='bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors'
        >
          <MessageCircle className='h-6 w-6' />
        </button>
      ) : (
        <div
          className={`bg-white rounded-lg shadow-xl transition-all duration-300 ${
            isMinimized ? 'h-14' : 'h-[500px]'
          } w-[350px] flex flex-col`}
        >
          <div className='flex items-center justify-between p-4 border-b'>
            <div className='flex items-center space-x-2'>
              <MessageCircle className='h-5 w-5 text-primary' />
              <span className='font-semibold text-primary'>Asistente Virtual</span>
            </div>
            <div className='flex items-center space-x-2'>
              <button onClick={() => setIsMinimized(!isMinimized)} className='text-gray-500 hover:text-primary transition-colors'>
                <MinusCircle className='h-5 w-5' />
              </button>
              <button onClick={() => setIsOpen(false)} className='text-gray-500 hover:text-primary transition-colors'>
                <X className='h-5 w-5' />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className='flex-1 overflow-y-auto p-4 space-y-4'>
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.type === 'user' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className='flex items-center space-x-2 text-gray-500'>
                    <Loader2 className='h-4 w-4 animate-spin' />
                    <span className='text-sm'>Escribiendo...</span>
                  </div>
                )}
              </div>

              <form onSubmit={handleSendMessage} className='p-4 border-t'>
                <div className='flex space-x-2'>
                  <input
                    type='text'
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder='Escribe tu mensaje...'
                    className='flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary'
                  />
                  <button type='submit' className='bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors'>
                    <Send className='h-5 w-5' />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </motion.div>
  )
}

export default ChatAssistant
