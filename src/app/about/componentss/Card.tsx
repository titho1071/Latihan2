type CardProps = {
    title: string;
    description: string;
};

export default function Card({ title, description }: CardProps) {
return (
    

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-">
    <a>
        <img className="rounded-t-lg" src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"/>
    </a>
    <div className="p-5">
        <a>
            <h5 className="mb-2 text-2xl font">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            </svg>
        </a>
    </div>
</div>

    );

}
