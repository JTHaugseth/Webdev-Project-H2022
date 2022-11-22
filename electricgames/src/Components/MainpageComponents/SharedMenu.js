
const SharedMenu = () => {

    return (
       <>
        <div className="container">
         <div className="row">
            <div id="pageblocks" className="col-sm-6 col-md-6"><h4 className="borderbottom">Show  all *</h4>
                <p>Show all * is an application developed to show you all the current items in the active database. 
                    Enter the application with the link in the navbar.</p>
                
            </div>
            
            <div id="pageblocks" className="col-sm-6 col-md-6"><h4 className="borderbottom">Search by id</h4>
                <p>Search by id is an application developed to show you the items based on the id
                from the database. Enter the application with the link in the navbar.
                </p>

            </div>
            
            <div id="pageblocks" className="col-sm-6 col-md-6"><h4 className="borderbottom">Search by title</h4>
                <p>Search by title is an application developed to show you the items based on the title 
                from the database. Enter the application with the link in the navbar.
                </p>
            </div>
       
            <div id="pageblocks" className="col-sm-6 col-md-6"><h4 className="borderbottom">Add new *</h4>
                <p>Add new * is an application developed to let you add new objects to the database.
                Enter the application with the link in the navbar.
                </p>
            </div>
            
            <div id="pageblocks" className="col-sm-6 col-md-6"><h4 className="borderbottom">Update *</h4>
                <p>Update * is an application developed to let you update the objects in the
                database. Enter the application with the link in the navbar.
                </p>
            </div>
           
            <div id="pageblocks" className="col-sm-6 col-md-6"><h4 className="borderbottom">Delete *</h4>
                <p>Delete * is an application developed to let you delete objects in the
                database. Enter the application with the link in the navbar.
                </p>
            </div>
            
            </div>
         </div>
        </>
        ); 
};

export default SharedMenu;