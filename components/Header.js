import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link style={linkStyle} href="/">
        Home
      </Link>
      <Link style={linkStyle} href="/about">
        About
      </Link>
    </div>
  )
}
