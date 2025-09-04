import '../css/home.css'

const Card = (props) => {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <div className='card-category'>{props.category}</div>
      <img
        src={props.image}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{props.title}</h5>
        <p>{props.description}</p>
        <h4 className='fw-bold'>${props.price}</h4>
        <a href="#" className="btn btncard me-3">
          View Details
        </a>
        <a href="#" className="btn btncard">
          Buy now
        </a>
      </div>
    </div>
  );
};

export default Card;
