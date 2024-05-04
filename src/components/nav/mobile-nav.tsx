import Link from "next/link";
import { Package2, PanelLeft, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { NavItem, navItems } from "./nav-items";
import { ModeToggle } from "../theming/mode-toggle";

function MobileNavLink({ icon, link, description }: NavItem) {
  return (
    <Link
      href={link}
      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
    >
      {icon}
      {description}
    </Link>
  )
}

export default function MobileNav() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium mt-10">
            <Link
              href="/"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            {navItems.map((item, idx) =>
              <MobileNavLink
                key={idx}
                icon={item.icon}
                link={item.link}
                description={item.description}
              />
            )}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex gap-1">
        <ModeToggle />
        <Button variant="outline" size="icon">
          <Link href={"/"}>
            <Settings className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </header>
  )
}