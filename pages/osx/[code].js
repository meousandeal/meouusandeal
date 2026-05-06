import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Page() {
  const router = useRouter()
  const { code } = router.query

  const [link, setLink] = useState('')

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setLink(text)
    } catch (e) {
      alert('Không đọc được clipboard')
    }
  }

  const handleCopy = async () => {
    const finalLink = `https://yourdomain.com/${code}?url=${encodeURIComponent(link)}`
    await navigator.clipboard.writeText(finalLink)
    alert('Đã copy link!')
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f5f5f5',
        padding: 20,
        fontFamily: 'Arial',
      }}
    >
      <div
        style={{
          background: '#00b14f',
          color: '#fff',
          padding: 20,
          borderRadius: 12,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 24,
        }}
      >
        Voucher Shopee {code}
      </div>

      <div
        style={{
          background: '#fff',
          marginTop: 20,
          padding: 20,
          borderRadius: 12,
        }}
      >
        <h2>Dán link Shopee</h2>

        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Dán link Shopee..."
          style={{
            width: '100%',
            padding: 14,
            borderRadius: 10,
            border: '1px solid #ddd',
            marginBottom: 12,
          }}
        />

        <button
          onClick={handlePaste}
          style={{
            width: '100%',
            padding: 14,
            background: '#00b14f',
            color: '#fff',
            border: 'none',
            borderRadius: 10,
            marginBottom: 10,
            fontWeight: 'bold',
          }}
        >
          Dán
        </button>

        <button
          onClick={handleCopy}
          style={{
            width: '100%',
            padding: 14,
            background: '#ff5722',
            color: '#fff',
            border: 'none',
            borderRadius: 10,
            fontWeight: 'bold',
          }}
        >
          Copy Link
        </button>
      </div>
    </div>
  )
}
