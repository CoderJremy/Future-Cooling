import React, { useState, useEffect } from "react";

const Nav = ({ links }) => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1000); // Example threshold, adjust as needed
        };

        // Add event listener to handle window resize
        window.addEventListener("resize", handleResize);

        // Initial call to set initial state
        handleResize();

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array to only run the effect once

    return (
        <nav>
            {isLargeScreen ? (
                <>
                    <img src="src/assets/icons/Future Cooling (lg).svg" alt="logo" id="logo-lg" />
                    <div className="links">
                        <ul>
                            {links.map((item, index) => (
                                <li>
                                    <a href="#" id={index === 0 ? "current" : index}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <>
                    <img
                        src="src/assets/icons/Future Cooling.svg"
                        alt="logo"
                        style={{ width: "55px" }}
                    />
                    <img
                        src="src/assets/icons/Menu.svg"
                        alt="menu"
                        style={{ width: "35px" }}
                        id="menu"
                    />
                </>
            )}
        </nav>
    );
};

export default Nav;
