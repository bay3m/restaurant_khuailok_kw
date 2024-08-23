import { useState, useEffect } from "react";
import axios from 'axios';

const MenuList = () => {
    const [menu, setMenu] = useState({});
    const [removingItem, setRemovingItem] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await axios.get('../JsonData/Menu.json');
                const results = response.data; 

                setMenu(() => {
                    const menuObject = {};
                    results.forEach((categoryObject) => {
                        const categoryName = Object.keys(categoryObject)[0];
                        menuObject[categoryName] = categoryObject[categoryName];
                    });
                    return menuObject;
                }); 
                // console.log(menu);
            } catch (error) {
                console.error("error: ", error);
            }
        };

        fetchMenu(); 
    }, []); 

    const handleRemoveItem = (category, itemIndex) => {
        setRemovingItem({ category, itemIndex });
        setTimeout(() => {
            setMenu((prevMenu) => {
                const newMenu = { ...prevMenu };
                newMenu[category].splice(itemIndex, 1);
                console.log(newMenu[category])
                return newMenu; 
            });
            setRemovingItem(null);
        }, 2000);
    };

    return (
        <ul className="menu_list_wrapper">
            {Object.keys(menu).map((category, index) => (
                <li key={index} className="menu_list">
                    <h1>{category}</h1>

                    <div className="menu_item_wrapper">
                        <ul>
                            {menu[category].map((item, itemIndex) => (
                                <li key={itemIndex} 
                                    className={`menu_item ${removingItem && removingItem.category === category && removingItem.itemIndex === itemIndex ? 'removing' : ''}`}>
                                    
                                    {item}
                                    
                                    <span onClick={() => handleRemoveItem(category, itemIndex)} className="material-symbols-outlined" id="add_menu_btn">
                                        add
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
    );

};

export default MenuList;