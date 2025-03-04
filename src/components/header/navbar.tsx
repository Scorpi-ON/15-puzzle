import { HelpButton } from "@/components/header/help-button.tsx";
import { Logo } from "@/components/header/logo.tsx";
import { ResetAllButton } from "@/components/header/reset-all-button.tsx";
import { ModeToggle } from "@/components/theme/mode-toggle.tsx";

export function Navbar() {
    return (
        <div className="fixed left-0 right-0 top-0 z-50">
            <div className="flex h-16 items-center justify-between rounded-xl p-4 pl-64 pr-64">
                <div className="flex items-center gap-2">
                    <Logo />
                    <span className="text-xl font-bold">puzzle</span>
                </div>
                <div className="flex items-center gap-2">
                    <ResetAllButton />
                    <HelpButton />
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
}
