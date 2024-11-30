// app/layout.jsx
'use client';
import Navbar from '@/components/Navbar'
import { ThemeProvider } from "@/components/theme-provider"
// Add this import
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children} {/* Add this line to render page content */}
        </ThemeProvider>
      </body>
    </html>
  )
}
