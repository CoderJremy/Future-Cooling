const Hero = () => {
    return (
        <main>
            <div className="left-side">
                <h1>Cooling Solutions for Tomorrow's Needs</h1>
                <p>
                    With a commitment to excellence, we strive to exceed your expectations in every
                    aspect of appliance repair, from diagnosis to completion.
                </p>
                <button>
                    {" "}
                    <span class="material-symbols-outlined">book</span>
                    <span>Book A Diagnostic</span>
                </button>
            </div>
            <div className="right-side">
                <div className="stacked-image" id="first-img"></div>
                <div className="stacked-image" id="second-img"></div>
                <div className="stacked-image" id="third-img"></div>
            </div>
        </main>
    );
};

export default Hero;
