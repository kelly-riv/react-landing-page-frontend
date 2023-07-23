import React,{useState,useEffect} from "react";

const AccordionItemFragment =({collapseNum,name,specialty,description}) =>{
    const [collapseId, setCollapseId] = useState(collapseNum);

    useEffect(() => {
        setCollapseId(`#${collapseNum}`);
    },[collapseId]);
    return(
        <div className="accordion-item col-md-4 col-sd-12">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={collapseId} aria-expanded="true" aria-controls="collapseOne">
                {name}
            </button>
            </h2>
            <div id={collapseNum} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>{specialty}</strong>{description}
            </div>
            </div>
        </div>

    )
}

export default AccordionItemFragment