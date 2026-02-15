export function WorkHistory() {
    const styleExpirence = "text-muted-foreground text-xs text-center py-1 px-2 rounded-lg bg-background h-fit w-[70%]";
    const fechaActual = new Date()

    const yyyyMM = `${fechaActual.getFullYear()}/${String(
    fechaActual.getMonth() + 1
    ).padStart(2, '0')}`
    

    return (<>
        <div className="flex flex-col sm:flex-row gap-2 p-3 uppercase scroll-smooth justify-center items-center">
            <span className={styleExpirence}>restaurante paladino {<br />} [2021/06-2022/03] </ span>
            <p className={styleExpirence}> AppArte {<br/>} [2021/08-2021/12] </ p>
            <p className={styleExpirence}> ATI Tecnologia integrada {<br/>} [2023/01-2023/04]</ p>
            <p className={styleExpirence}> CAFI tu casa financiera {<br/>} [2024/02-{yyyyMM}] </ p>
        </div>
    </>);
}