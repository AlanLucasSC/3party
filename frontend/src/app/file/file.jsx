import React from 'react'

export default props => (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <form action="http://localhost:4009/file" method="POST" encType="multipart/form-data">
            <input type="file" name="image"/>
            <input type="submit" value="Enviar"/>
        </form>
        <br/>
    </div>
)