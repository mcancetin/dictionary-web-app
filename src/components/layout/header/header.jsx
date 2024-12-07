import FontSelector from "@/components/common/font-selector";
import ThemeSwitcher from "@/components/common/theme-switcher";
import { memo } from "react";

function Header() {
    return (
        <header className="flex justify-between pb-12 pt-6 lg:pb-24 lg:pt-24">
            <div className="flex items-center">
                <img src="/images/logo.svg" alt="" />
            </div>

            <div className="flex items-center gap-6 divide-x-2">
                <FontSelector />
                <ThemeSwitcher />
            </div>
        </header>
    );
}

Header.propTypes = {};

export default memo(Header);
