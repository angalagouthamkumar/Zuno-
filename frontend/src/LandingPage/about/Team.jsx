import React from 'react';

function Team() {
    return (
        <div className="container">
            <div
                className="row p-3 mt-5 mb-5 text-muted border-top"
                style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
            >
                <h1 className="text-center mt-5 text-dark">People</h1>
            </div>

            <div className="row p-3">
                <div className="col-lg-6 text-center">
                    <img
                        src="/images/Founder.png"
                        alt="Goutham Kumar"
                        className="img-fluid rounded-circle shadow"
                        style={{
                            borderRadius: "100%",
                            width: "50%"
                        }}
                    />

                    <h4 className=" mt-4 mb-3">
                        Goutham Kumar
                    </h4>

                    <h6 className="text-muted mb-4">
                        Founder & CEO
                    </h6>
                </div>

                {/* Right Column */}
                <div className="col-6 p-3">
                    <p>
                        As a passionate technology enthusiast and trader,
                        Goutham started <strong>ZUNO</strong> with a vision to
                        simplify stock market participation for millions of
                        investors.
                    </p>

                    <p>
                        Combining expertise in software development and
                        financial technology, he focuses on building products
                        that make investing more accessible, transparent, and
                        efficient.
                    </p>

                    <p>
                        "Great investing begins with great tools."
                    </p>
                    <p >Connect on <a href="#" style={{ textDecoration: "none" }}>Email</a> <a href="#" style={{ textDecoration: "none" }}>Twitter</a> <a href="#" style={{ textDecoration: "none" }}>LinkedIn</a></p>
                </div>
            </div>
        </div>
    );
}

export default Team;