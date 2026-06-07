import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDocker, FaGithub } from "react-icons/fa"
import { SiPostgresql, SiSupabase, SiVercel } from "react-icons/si"
const stack_icons = {
    "html": { icon: <FaHtml5 />, color: "#E34F26" },
    "css": { icon: <FaCss3Alt />, color: "#1572B6" },
    "js": { icon: <FaJs />, color: "#F7DF1E" },
    "react": { icon: <FaReact />, color: "#61DAFB" },
    "nodejs": { icon: <FaNodeJs />, color: "#339933" },
    "docker": { icon: <FaDocker />, color: "#2496ED" },
    "postgresql": { icon: <SiPostgresql />, color: "#4169E1" },
    "supabase": { icon: <SiSupabase />, color: "#3ECF8E" },
    "github": { icon: <FaGithub />, color: "#ffffff" },
    "vercel": { icon: <SiVercel />, color: "#000000" }
}
export default function getIcon(name) {
    return stack_icons[name] || null;
}