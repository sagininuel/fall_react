function Printsubmits(props) {
  return (
    <ul>
      {props.title.map((meetup) => {
        return (
          (<p>{meetup.title}</p>),
          (<p>{meetup.address}</p>),
          (<p>{meetup.description}</p>),
          (<p>{meetup.image}</p>)
        );
      })}
    </ul>
  );
}

export default Printsubmits;
