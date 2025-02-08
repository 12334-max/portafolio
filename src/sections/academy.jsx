import EducationList from "../components/educations/EducationList"

function AcademySection() {
    return <>
        <div className='rounded-xl bg-slate-950'>
            <h1 className='text-2xl text-center text-slate-400 font-bold'>Formación Academica</h1>
            <div className='rounded-2xl shadow p-4'>
                <EducationList />
            </div>
        </div>
    </>
}

export default AcademySection