import Header from "@/Components/Header";
import "./globals.css"

export default function RootLayout({children}){
  return(
    <html lang="en">
      <body className="p-3">
        <Header/>
        {children}
      </body>
    </html>
  )
}