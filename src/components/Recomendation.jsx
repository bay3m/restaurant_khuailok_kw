import React, { useState, useEffect, useCallback } from "react";

function Recomendation() {
    const [data, setData] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("JsonData/Recomendation.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
            return response.json();
            })
            .then(dataResult => setData(dataResult))
            .catch(error => {
                console.error("Error fetching data:", error);
            });
        }, []);

    const updateContent = useCallback(index => {
        if (data && index >= 0 && index < data.length) {
            setCurrentIndex(index);
        }
    }, [data]);

    const handleRightClick = () => {
        if (currentIndex < data.length - 1) {
            updateContent(currentIndex + 1);
        } else {
            updateContent(0);
        }
    };

    const handleLeftClick = () => {
        if (currentIndex > 0) {
            updateContent(currentIndex - 1);
        } else {
            updateContent(data.length - 1);
        }
    };

    return (
        <>
            <h1 id="recomendation_title">Our recomendation</h1>

            <div id="wrapper">
                

                <div id="outSideBox" style={{ backgroundImage : `url(${data && data[currentIndex].imageUrl})` }}>
                    <div className="arrow_wrapper">
                        <div className="arrow" id="left" onClick={handleLeftClick}></div>
                    </div>
                    <p id="menu_recomendation_name">{data && data[currentIndex].title}</p>
                    <div className="arrow_wrapper">
                        <div className="arrow" id="right" onClick={handleRightClick}></div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Recomendation;