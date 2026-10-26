import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function App() {
  return (
    <div className="flex-center h-screen">
      App
    </div>
  )
}
