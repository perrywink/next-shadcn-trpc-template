import Link from "next/link";
import { Home, LogOut } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { ModeToggle } from "../theming/mode-toggle";
import { NavItem, navItems } from "./nav-items";

function MainNavItem({ icon, link, description }: NavItem) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={link}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
        >
          {icon}
          <span className="sr-only">{description}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{description}</TooltipContent>
    </Tooltip>
  )
}

export default function MainNav() {
  return (
    <TooltipProvider>
      <aside className="fixed inset-y-0 left-0 z-10 w-14 flex-col border-r bg-background hidden sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
          <Link
            href="/"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Home className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          {
            navItems.map((item, idx) => 
              <MainNavItem 
                key={idx}
                icon={item.icon} 
                link={item.link} 
                description={item.description} 
              />)
          }
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
          <ModeToggle />
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <LogOut className="h-5 w-5" />
                <span className="sr-only">Logout</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Logout</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
    </TooltipProvider>
  )
}