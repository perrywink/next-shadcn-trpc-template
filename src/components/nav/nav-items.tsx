import { Package, FileSpreadsheet } from "lucide-react"

export interface NavItem {
  icon: JSX.Element
  link: string
  description: string
}

export const navItems: NavItem[] = [
  {
    icon: <Package className="h-5 w-5" />,
    link: "/link-1",
    description: "Link1"
  },
  {
    icon: <FileSpreadsheet className="h-5 w-5" />,
    link: "/link-2",
    description: "Link2"
  },
]