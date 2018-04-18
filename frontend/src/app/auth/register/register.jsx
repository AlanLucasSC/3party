import React from 'react'

export default props => (
    <div className="modal fade" id="myModal" tabindex="0" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="modal-body">
                    <form action="/action_page.php">
                        <div className="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" className="form-control" id="email"/>
                        </div>
                        <div className="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" className="form-control" id="pwd"/>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox"/> Remember me</label>
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
)