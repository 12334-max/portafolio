
interface ProjectItem{
    title: string,
    description: string,
    tecnologies: string,
    image?: string
}

export function ProjectHistory() {

    const CSharp = 'C# webapi .NET'
    const SqlServerAndMongoDB = 'Sql Server | MongoDB'

    const historyProject: ProjectItem[] = [
        {
            title: 'App movil',
            description: 'App movil para control de actividades para los gestores de campo',
            tecnologies: `Kotlin | ${CSharp} | AndroidStudio | Sqlite | ${SqlServerAndMongoDB}`
        },
        {
            title: 'App de gestión carta poder',
            description: 'App web para gestionar cartas poder para todo tipo de usuarios.',
            tecnologies: `React | ${CSharp} | MongoDB`
        },
        {
            title: 'App de gestión de polizas de seguro',
            description: 'Aplicacion para llevar un control de los seguros vendidos por mes, usuario y reporte mensual',
            tecnologies: `Angular TS | ${CSharp} | Sql Server`
        },
        {
            title: 'Mantenimiento de aplicaciones empresariales',
            description: 'Mantenimiento y mejoras en aplicaciones existentes de la empresa para su optimo funcionamieto',
            tecnologies: `Angular TS | React | ${CSharp} | ${SqlServerAndMongoDB} | CI/CD`
        },
        {
            title: 'Administración de servidor Linux',
            description: 'Conexión entre sevidores Linux y Windows con herramientas de NFS y Samba, tareas programadas, creacion y ejeucion de instruccioes .sh',
            tecnologies: `Linux | CI/CD`
        }
    ] 

    return (<>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-3 py-2">
            {
                historyProject.map(item => (
                    <div className="rounded-md bg-background p-2 h-fit">
                        <p id="title" className="font-semibold uppercase text-center">{item.title}</p>
                        <p id="description" className="text-justify pt-2">{item.description}</p>
                        <p id="tecnologies" className="text-xs font-light pt-5 text-center" >{item.tecnologies}</p>
                    </div>

                ))
            }
            
        </div>
    </>);
}