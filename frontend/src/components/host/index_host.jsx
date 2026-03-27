import './style_host.css';

function Host({ name, picture }) {
  return (
    <figure className="host">
      <figcaption className="host-name">
        {name.split(' ').map((part, index) => (
          <span key={index}>{part}</span>
        ))}
      </figcaption>
      <img className="host-picture" src={picture} alt={name} />
      
    </figure>
  );
}

export default Host;