import react from 'react'

export default props => (
    <div className="card"  style="margin-top:10px"  >
        <a href={ props.url }>
            <div className="card-body">
                <i className={ "fa fa-"+props.icon } style="font-size:60px; color:black"></i>
                <br/>
                <br/>
                <h5 className="service-heading" style="color:black">{ props.text }</h5> 
            </div>
        </a>
    </div>
)