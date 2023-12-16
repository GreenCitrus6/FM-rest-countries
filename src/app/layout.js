import { Inter } from 'next/font/google'
import './globals.css'
import Header from './header'
import HandleDarkMode from './handledarkmode'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'REST API Country Viewer',
  description: 'Challenge on Frontend Mentor, project created with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full overflow-x-hidden">
      <body className={inter.className + " w-full overflow-x-hidden"}>
        <HandleDarkMode>
            {children}
        </HandleDarkMode>
        </body>
    </html>
  )
}
