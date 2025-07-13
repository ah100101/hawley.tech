export default function Footer() {
  return (
    <footer className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-neutral-500 text-sm">
      {/* Changed back to text-center for centered footer text */}
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  )
}
