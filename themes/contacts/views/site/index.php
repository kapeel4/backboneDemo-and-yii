    <nav class="navbar navbar-default" role="navigation">
     <div id="session" class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
      <a class="navbar-brand" href="#">Session</a>
    </div>
    </div>
    </nav>

    <div id="contacts">
    <div>
            <label for="username" class="col-sm-2 control-label" >Username:</label>
                <input id="username" data-toggle="tooltip" data-placement="left" title="Name" placeholder="username" type="text" name="username" required  /><br/>
                </br>
                <label for="password" class="col-sm-2 control-label">Password:</label>
                <input id="password" placeholder="Password" type="password" name="password" required  /><br/>
                </br>
                <button id="submit" class="col-sm-1 btn btn-success">Submit</button><br/>
                </br>
        </div>
        <header><br/>
            <a id="showForm" href="#" class="label label-info">Add new contact</a><br/><br/>
        </header>
        <div >
        <form id="addContact" action="#">
        
             <div id= "imageupload-container"></div><br/>
                <label for="type" class="col-sm-2 control-label">Type:</label>
                <select id="select_type" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    <option value="1">family</option>
                    <option value="2">school</option>
                    <option value="3">collegeous</option>
                </select><br/>
                </br>
                <label for="name" class="col-sm-2 control-label" >Name:</label>
                <input id="name" data-toggle="tooltip" data-placement="left" title="Name" placeholder="Name" type="text" name="name" required  /><br/>
                </br>
                <label for="address" class="col-sm-2 control-label">Address:</label>
                <input id="address" placeholder="Address" type="text" name="address" required  /><br/>
                </br>
                <label for="tel" class="col-sm-2 control-label">Tel:</label>
                <input id="tel" placeholder="Telephone" type="number" name="telephone" required /><br/>
                </br>
                <label for="email" class="col-sm-2 control-label">Email:</label>
                <input id="email" placeholder="Email" type="email" name="email" required/><br/>
                </br>
                <button id="add" class="col-sm-1 btn btn-success">Add</button><br/>
                </br>
          
        </form>
        </div> 

        <div id="filter">
            <label>Show me:</label>
        </div>
            <div id="familytype"></div>
                <ul class="col-sm-6">
                <li class="list-group-item"> 
                <table class="table" id="familyList"> 
            <!--<div id="familyList"> -->
            </table>
     
             </div>
             </li>
             </ul>

    </div>
