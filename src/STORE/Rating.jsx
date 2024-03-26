export default function Rating({rate}){

    if(rate< 3 ){ return <span className="badge badge-pill bg-danger">Rate: {rate}/5</span>}

    else{ return <span className="badge badge-pill bg-success">Rate: {rate}/5</span>}
   
}