import { useEffect, useState } from "react";

const Menu = () => {
    const [menu, setMenu] = useState([]);


    useEffect(() => {
        fetch('../../public/menu.json')
            .then(res => res.json())
            .then(data => {
                const PopularItems = data.filter(iteams => iteams.category === 'popular')
                setMenu(PopularItems)
            })
    }, [])
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="my-4">
                    <h2 className="text-center text-yellow-300">---Check It Out---</h2>
                    <h2 className="text-center border-t-4 border-b-4 text-3xl">From Our Menu</h2>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="md:grid grid-cols-2 w-3/5 gap-4">
                    {
                        menu.map(menu => (
                            <div key={menu._id} className="flex " >
                                <img src={menu.image} className="w-[100px] py-2" />
                                <div className="px-3">
                                    <div className="flex justify-between items-center">
                                        <p className="text-xl font-semibold">{menu.name}</p>
                                        <p className="text-yellow-400">${menu.price}</p>
                                    </div>
                                    <p className="text-xs">{menu.recipe}</p>
                                </div>
                            </div>


                        ))
                    }
                </div>
            </div>
        </div >
    );
};

export default Menu;