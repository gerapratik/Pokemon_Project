import React from 'react'
import { Button } from 'semantic-ui-react'

function Pagination({goToNextPage,goToPrevPage}) {
    return (
        <div>
            {goToPrevPage &&<Button attached='left' className="previous" onClick={()=>{goToPrevPage()}}>Previous Page</Button> }
            {goToNextPage &&  <Button attached='right'className="next" onClick={()=>{goToNextPage()}}>NextPage</Button>}
           
            
        </div>
    )
}

export default Pagination

