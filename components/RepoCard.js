import { GitHub } from "react-feather"

export const RepoCard = ({ name, description, updated_at, language, html_url }) => {

    const updated_year = updated_at.slice(0, 4)
    const cards = true;
    return cards ? (
        <div className='card rounded-lg p-6 flex items-center justify-evenly border-2 border-gray-200 hover:border-blue-500 hover:shadow transition my-2'>
            <p className='mr-2'>{updated_year}</p>
            <h1 className='text-xl text-blue-500 m-1 w-64'>{name}</h1>
            <h2 className='hidden flex-1 md:block'>{description}</h2>
            <h2 className='hidden text-lg text-gray-400 m-1 md:block'>{language}</h2>
            <a href={html_url} target="_blank"><GitHub className='text-gray-400 hover:text-blue-500 ml-2' /></a>
        </div>
    ) : (
        <div className='card rounded-lg flex items-center justify-evenly transition my-2'>
            <p className='mr-2'>{updated_year}</p>
            <h1 className='text-xl text-blue-500 flex-1 m-1'>{name}</h1>
            <h2 className='text-lg text-gray-400 m-1'>{language}</h2>
            <a href={html_url} target="_blank"><GitHub className='text-gray-400 hover:text-blue-500 m-2' /></a>
        </div>
    )
}