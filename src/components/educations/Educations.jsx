import EducationList from './EducationList'

function Educations() {
    return (
        <div className='rounded-xl mb-10 shadow-lg shadow-gray-900 bg-slate-950 hover:-translate-y-1 hover:scale-100 duration-300'>
            <h1 className='text-2xl text-center font-bold'>Formación Academica</h1>
            <div className='rounded-2xl shadow gap-3 p-4'>
                <EducationList />
            </div>
        </div>
    )
}

export default Educations