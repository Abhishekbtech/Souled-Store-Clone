import React from 'react';
import categories from './data';
import { useNavigate } from 'react-router-dom';

function Categorie() {
    const navigate = useNavigate()
    const handelclick =((category) =>{
        console.log(category);
        const gender = "Women"
        navigate(`/${gender}/${category.title}`, { state: { category } })
    })

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">CATEGORIES</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    categories.map((category) => (
                        <div key={category.id} className="border rounded-md overflow-hidden cursor-pointer" onClick={() =>handelclick(category)}>
                            <div className="overflow-hidden">
                                <img 
                                    src={category.url} 
                                    alt={category.title} 
                                    className="w-full h-35 object-cover rounded-md hover:scale-105 transition duration-300" 
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Categorie;
