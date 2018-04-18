import React from 'react'

export default props => (
    <div className="modal fade" id="myModal" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <button type="button" className="btn btn-default" data-dismiss="modal">
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <div className="modal-body">
                    <form action="/action_page.php">
                        <div className="form-group">
                            <label htmlFor="email">Usuário:</label>
                            <input type="user" className="form-control" id="user"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Senha:</label>
                            <input type="password" className="form-control" id="pwd"/>
                        </div>
                        <div className="checkbox">
                            <button type="submit" id="submit" className="btn btn-outline-warning">Cadastrar</button>
                            <label><input type="checkbox"/> Lembre-me</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
)