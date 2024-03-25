import Link from "next/link"

export default function Footer() {
  return (
    <footer className="sticky flex justify-between items-center px-4 py-2 border-b">
      <Link href="https://github.com/YelyzavetaRohovska/task-manager" target="_blank">
        Source on GitHub
      </Link>
      <div className="flex gap-2 justify-start items-center">
        Copyrights
      </div>
    </footer>
  )
}