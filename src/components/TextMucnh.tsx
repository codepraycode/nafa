import React from "react";


export default function TextMunch({text}:{text:string[]}){
    return (
        <>
            {
                text.map((e,i)=>(
                    <React.Fragment key={i}>
                        {/* {e} */}
                        {e === "" ? <br/> : (
                            <>
                                {e}
                                {(i !== text.length -1) && <br/>}
                            </>
                        )}
                    </React.Fragment>
                ))
            }       
        </>
    )
}