


export function Skills() {
    const skills = [
        { title: 'backend', field: ['.net web api', 'C#', 'java', 'python'] },
        { title: 'frontend', field: ['angular', 'react', 'typescript'] },
        { title: 'devops | ci/cd', field: ['gitlab', 'docker', 'pipelines', 'nginx'] },
        { title: 'herraminetas', field: ['git', 'docker desktop', 'vscode'] },
    ]
    const styleLabel = 'text-sm font-bold'
    const styleContentSkill = 'pl-3 text-xs uppercase';
    return (<>
        <div className="bg-background rounded-xl p-2 w-[95%] columns-2 uppercase ">
            {
                skills.map((skill) => (
                    <div key={skill.title} >
                        <label className={styleLabel}>{skill.title}</label>
                        <div className={styleContentSkill}>
                            {skill.field.map((item) => (
                                <p key={item}>{item}</p>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    </>);
}