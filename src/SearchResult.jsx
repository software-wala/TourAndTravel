function SearchResult({ img }) {
  //   const img = `https://plus.unsplash.com/premium_photo-1678167657994-5b96138b6abb?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

  const photo = `https://source.unsplash.com/400x300/?${img}`;
  return (
    <>
      <div>
        <img src={photo} alt="Mobile" />
      </div>
    </>
  );
}

export default SearchResult;
